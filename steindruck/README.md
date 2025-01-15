# 🍺 steindruck

Archives and displays the tap list history from [The Bier Stein](https://thebierstein.com/draft-bottles/) in Eugene,
Oregon, allowing you to explore past offerings.

Can't remember what you had last time? Steindruck can help!

## Prerequisites

- [Elixir](https://elixir-lang.org/install.html) 1.14 or later
- [Phoenix Framework](https://hexdocs.pm/phoenix/installation.html) 1.7 or later
- [Node.js](https://nodejs.org/) 18 or later (for asset compilation)

## Installation

1. Clone this repository:

```sh
git clone https://github.com/clmay/sandbox.git
cd sandbox/ex/steindruck
```

2. Install dependencies:

```sh
mix deps.get
mix deps.compile
```

3. Setup the database:

```sh
mix ecto.setup
```

4. Install Node.js dependencies:

```sh
cd assets && npm install
```

## Development

To start the Phoenix server:

```sh
mix phx.server
```

Then visit [`localhost:4000`](http://localhost:4000).
