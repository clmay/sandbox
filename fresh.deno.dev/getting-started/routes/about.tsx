// routes/about.tsx
import { PageProps } from "$fresh/server.ts";

export default function AboutPage(props: PageProps) {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>Page URL: {props.url}</p>
      <p>Page route: {props.route}</p>
      <p>Page props: {JSON.stringify(props)}</p>
    </main>
  );
}
