// islands/Countdown.tsx

import { useEffect, useState } from "preact/hooks";

export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  // If the target date has passed, we stop counting down.
  if (now > target) {
    return <span>🎉</span>;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) {
          clearInterval(timer);
        }
        return new Date();
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  // Otherwise, we format the remaining time using `Intl.RelativeTimeFormat` and
  // render it.
  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
  const timeFmt = new Intl.RelativeTimeFormat("en-US");
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}
