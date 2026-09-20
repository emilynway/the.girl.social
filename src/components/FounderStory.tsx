// PLACEHOLDER CONTENT — swap in the real photo and bio before shipping.
// Photo: drop a file at public/founder.jpg and update the src below.
// Bio: replace the copy in the <p> tags with the real story.

export default function FounderStory() {
  return (
    <div className="grid gap-10 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center">
      <div className="tilt-left pop w-full max-w-[240px] rounded-sm border-2 border-foreground bg-background p-3">
        <div className="aspect-[4/5] w-full rounded-sm border border-dashed border-border bg-card flex items-center justify-center text-center text-xs uppercase tracking-[0.15em] text-muted p-4">
          Founder photo goes here
        </div>
      </div>
      <div>
        <span className="sticker tilt-right">Meet the founder</span>
        <h2 className="mt-4 font-serif text-2xl font-black uppercase tracking-[-0.025em] sm:text-3xl">
          [Founder name]
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          [Placeholder — replace with the real story: why you started The
          Girl Social, what building a life in Oslo was like before it
          existed, and what you want members to feel when they show up to
          their first event.]
        </p>
      </div>
    </div>
  );
}
