import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <>
      <div>Greetings to you, {props.params.name}!</div>
    </>
  );
}
