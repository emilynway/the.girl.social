const phrases = [
  "Hot girls say hi first",
  "Come alone, most people do",
  "See you Sunday x",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {phrases.map((phrase) => (
        <li
          key={phrase}
          className="flex items-center whitespace-nowrap px-6 text-xs font-medium uppercase tracking-[0.2em]"
        >
          {phrase}
          <span className="ml-12 text-accent">✦</span>
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-foreground py-3 text-background">
      <div className="ticker-track">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </div>
  );
}
