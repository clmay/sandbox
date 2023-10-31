// routes/countdown.tsx

import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 10);
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}
