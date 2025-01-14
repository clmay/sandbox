# 🤖 steinblick

A Deno-based web scraper that fetches and parses the current tap list from [The Bier Stein](https://thebierstein.com/draft-bottles/) in Eugene, Oregon. The scraper outputs timestamped JSON data containing detailed information about each beer on tap.

## Features

- 🍺 Scrapes real-time tap list data
- 📊 Includes tap number, brewery, beer name, location, ABV, and more
- 💰 Captures pricing information for different serving sizes
- 🔋 Shows remaining keg percentage
- ⏰ Includes timestamp of when data was fetched

## Prerequisites

- [Deno](https://deno.land/) installed on your system

## Installation

1. Clone this repository:
```bash
git clone https://github.com/clmay/sandbox.git
cd sandbox/steinblick
```

## Usage

Run the scraper using the Deno task:

```bash
deno task dev
```

The scraper will fetch the current tap list and output JSON data to stdout.

## Example Output

```json
{
  "timestamp": "2024-01-23T21:56:43.000Z",
  "url": "https://thebierstein.com/draft-bottles/",
  "response": {
    "status": "200 OK",
    "data": [
      {
        "tapNumber": 1,
        "brewery": "Sunriver",
        "name": "Ripple Effect IPA",
        "location": "Sunriver, OR",
        "description": "West Coast IPA brewed with Strata, Mosaic & Citra hops",
        "abv": 6.8,
        "prices": [
          {
            "size": "16oz",
            "price": "$7.00"
          },
          {
            "size": "10oz",
            "price": "$5.00"
          }
        ],
        "percentRemaining": 75
      }
    ]
  }
}
```

## Error Handling

The scraper includes robust error handling for:
- Network request failures
- Invalid HTML responses
- Missing or malformed data

If an error occurs, it will be logged to stderr and the process will exit with code 1.

## Dependencies

- [cheerio](https://www.npmjs.com/package/cheerio) - For HTML parsing
