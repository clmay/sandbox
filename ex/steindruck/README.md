# 🍺 Steindruck

Archives and displays the tap list history from [The Bier Stein](https://thebierstein.com/draft-bottles/) in Eugene, Oregon, allowing you to explore past offerings.

Can't remember what you had last time? Steindruck can help!

## Prerequisites

- [Elixir](https://elixir-lang.org/install.html) 1.14 or later
- [Phoenix Framework](https://hexdocs.pm/phoenix/installation.html) 1.7 or later
- [PostgreSQL](https://www.postgresql.org/download/) 12 or later
- [Node.js](https://nodejs.org/) 18 or later (for asset compilation)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/clmay/sandbox.git
cd sandbox/ex/steindruck
```

2. Install dependencies:

```bash
mix deps.get
mix deps.compile
```

3. Setup the database:

```bash
mix ecto.setup
```

4. Install Node.js dependencies:

```bash
cd assets && npm install
```

## Development

To start the Phoenix server:

```bash
mix phx.server
```

Then visit [`localhost:4000`](http://localhost:4000).
