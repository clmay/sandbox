import { load } from "cheerio";

type Pricing = {
  size: string;
  price: string;
};

type Tap = {
  tapNumber: number;
  brewery: string;
  name: string;
  location: string;
  description: string;
  abv: number;
  prices: Pricing[];
  percentRemaining: number;
};

class ScraperError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ScraperError";
  }
}

const BIER_STEIN_URL = "https://thebierstein.com/draft-bottles/";

async function scrape(
  url: string
): Promise<{ html: string; response: Response }> {
  console.log(`Fetching from ${url}`);
  const response = await fetch(url).catch((error) => {
    throw new ScraperError(`Failed to fetch ${url}: ${error.message}`);
  });

  if (!response.ok) {
    throw new ScraperError(`HTTP ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  if (!html) {
    throw new ScraperError("No response body received");
  }

  return { html, response };
}

function parse(html: string): Tap[] {
  console.log("Parsing HTML...");
  const $ = load(html);
  const taplist = Array.from($(".list-menu-item")).map((el) => {
    const [tapNumberText, brewery] = $(el)
      .find(".list-menu-item__head span:nth-of-type(1)")
      .text()
      .split(".")
      .map((s) => s.trim());

    const tapNumber = parseInt(tapNumberText);

    const name = $(el)
      .find(".list-menu-item__head span:nth-of-type(2)")
      .text()
      .trim();

    const location = $(el)
      .find(".list-menu-item__head span:nth-of-type(3)")
      .text()
      .trim();

    const [description, abvText] = $(el)
      .find(".list-menu-item__body")
      .text()
      .split("|")
      .map((s) => s.trim());

    const abv = parseFloat(abvText.replace(/[^0-9.]/g, ""));

    const prices = Array.from(
      $(el).find(".list-menu-item__table tbody tr")
    ).map((row) => ({
      size: $(row).find("td").eq(0).text().trim(),
      price: $(row).find("td").eq(1).text().trim(),
    }));

    const percentRemainingText = $(el)
      .find(".list-menu-item__progress strong")
      .text()
      .replace(/[^0-9.]/g, "");

    const percentRemaining = parseInt(percentRemainingText);

    return {
      tapNumber,
      brewery,
      name,
      location,
      description,
      abv,
      prices,
      percentRemaining,
    };
  });

  if (taplist.length === 0) {
    throw new ScraperError("No taplist entries found in the response");
  }

  console.log(`Parsed ${taplist.length} entries`);
  return taplist;
}

try {
  const { html, response } = await scrape(BIER_STEIN_URL);
  const taplist = parse(html);
  const result = {
    timestamp: new Date(response.headers.get("date") || new Date()),
    url: response.url,
    response: {
      status: `${response.status} ${response.statusText}`,
      data: taplist,
    },
  };

  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(
    error instanceof ScraperError
      ? error.message
      : "An unexpected error occurred"
  );
  Deno.exit(1);
}
