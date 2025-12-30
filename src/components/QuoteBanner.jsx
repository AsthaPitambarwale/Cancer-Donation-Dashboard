import { useEffect, useState } from "react";

export default function QuoteBanner() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then(res => res.json())
      .then(data => {
        setQuote(`${data[0].q} — ${data[0].a}`);
      })
      .catch(() => setQuote("Hope is stronger than fear."));
  }, []);

  return (
    <div className="quote">
      💗 {quote}
    </div>
  );
}
