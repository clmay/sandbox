defmodule Steindruck.Repo do
  use Ecto.Repo,
    otp_app: :steindruck,
    adapter: Ecto.Adapters.SQLite3
end
