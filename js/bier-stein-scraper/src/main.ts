import { load } from "cheerio";

const url = "https://thebierstein.com/draft-bottles/";

console.log(`Fetching from ${url}`);
const response = await fetch(url).catch((error) => {
  throw new Error(`Failed to fetch ${url}: ${error.message}`);
});

if (!response.ok) {
  throw new Error(`HTTP ${response.status} ${response.statusText}`);
}

const html = await response.text();

if (!html) {
  throw new Error("No response body received");
}

console.log("Parsing HTML...");
const $ = load(html);

const taplistEntries = $(".list-menu-item");
const taplist = Array.from(taplistEntries).map((el) => {
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

  const pricingTable = $(el).find(".list-menu-item__table tbody tr");
  const prices = Array.from(pricingTable).map((row) => {
    return {
      size: $(row).find("td").eq(0).text().trim(),
      price: $(row).find("td").eq(1).text().trim(),
    };
  });

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
  throw new Error("No taplist entries found in the response");
}

console.log(`Parsed ${taplist.length} entries`);

const timestamp = new Date(response.headers.get("date") || new Date());
const dirPath = `data`;
const fileName = `${dirPath}/${timestamp.toISOString()}.json`;

const outputData = {
  timestamp,
  url,
  response: {
    status: `${response.status} ${response.statusText}`,
    data: taplist,
  },
};

console.log(`Creating directory... ${dirPath}`);
await Deno.mkdir(dirPath, { recursive: true }).catch((error) => {
  throw new Error(`Failed to create directory ${dirPath}: ${error.message}`);
});

console.log(`Writing file... ${fileName}`);
await Deno.writeTextFile(fileName, JSON.stringify(outputData, null, 2)).catch(
  (error) => {
    throw new Error(`Failed to write file ${fileName}: ${error.message}`);
  }
);

console.log("Success!");
