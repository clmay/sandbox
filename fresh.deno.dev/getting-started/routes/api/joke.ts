import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const resp = await fetch("https://icanhazdadjoke.com", {
    headers: {
      "Accept": "application/json",
    },
  });
  if (resp.status === 404) {
    return new Response(resp.body);
  }
  return new Response(resp.body);
};
