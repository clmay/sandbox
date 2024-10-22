defmodule PhoenixSandboxTest do
  use ExUnit.Case
  doctest PhoenixSandbox

  test "greets the world" do
    assert PhoenixSandbox.hello() == :world
  end
end
