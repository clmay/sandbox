# Stack

Should be über-pragmatic (hopefully):

## Extension

Should be cross-browser, if possible.

## Data

The data layer.

- Data: static JSON
- Schema: [JSON Schema](https://json-schema.org)
- Validation:  `ajv` ([website](https://ajv.js.org) / [GitHub](https://github.com/ajv-validator/ajv))

## Frontend:

UI for filtering and rendering data.

- Data validation: ???
- UI library: React? Svelte?
- Styles: Tailwind ([website](https://tailwindcss.com/) / [GitHub](https://github.com/tailwindlabs/tailwindcss))

## "Backend"

The business logic powering exports/publishing.

Export formats to support:

- Plain text
- JSON
- HTML? Markdown? Astro? Components?

Publish to:

- GitHub Gists
- Google Docs
- ???
