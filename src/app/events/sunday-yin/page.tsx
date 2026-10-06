import type { Metadata } from "next";
import Image from "next/image";
import YinRsvpForm from "@/components/YinRsvpForm";

export const metadata: Metadata = {
  title: "In for some yin? Free yin class with Studio13 | Oslo Girl Social",
  description:
    "Free yin class with Studio13 on Sunday 11 October. Meet 12:15 at Kuro, Grünerløkka. Limited spots.",
};

const details = [
  { label: "When", value: "Sunday, 11 October · Meet at 12:15" },
  { label: "Meet", value: "Kuro, Rathkes gate 9C, Grünerløkka" },
  { label: "Price", value: "Free, gifted by Studio13" },
  { label: "Spots", value: "Limited" },
];

const plan = [
  {
    time: "12:15",
    title: "Meet at Kuro, Grünerløkka",
    body: "Rathkes gate 9C, 0558 Oslo. Grab a coffee and say hi.",
    href: "https://maps.google.com/?q=Kuro,+Rathkes+gate+9C,+0558+Oslo",
  },
  {
    time: "25 min",
    title: "Walk to the studio together",
    body: "We'll stroll over to Studio13 as a group, the perfect time to get to know each other.",
  },
  {
    time: "13:00",
    title: "Free yin class starts",
    body: "Studio13, Trondheimsveien 135, 0570 Oslo. Stretch, breathe and unwind.",
    href: "https://maps.google.com/?q=Studio+13,+Trondheimsveien+135,+0570+Oslo",
  },
];

export default function SundayYinEventPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <h1 className="font-serif text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
            In for some yin?
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            This Sunday, we&apos;re getting together with{" "}
            <a
              href="https://www.instagram.com/studio13oslo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 hover:text-accent"
            >
              Studio13
            </a>{" "}
            for a free yin class, generously gifted to Oslo Girl Social by their
            female-founded, female-run gym 💘
          </p>
          <p className="mt-4 max-w-2xl text-muted">
            Come meet some new gals, get in some movement and have a chill
            Sunday moment together. No experience needed. Spots are limited, so
            reserve yours below 💘
          </p>
          <a
            href="#reserve"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-dark"
          >
            Reserve my spot
          </a>
        </div>
        <Image
          src="/events/sunday-yin/downward-dog.webp"
          alt="Black and white photo of a woman in downward dog on a yoga mat"
          width={1740}
          height={1160}
          className="w-full rounded-2xl object-cover"
          priority
        />
      </div>

      <dl className="mt-10 grid gap-6 border-y border-border py-8 sm:grid-cols-4">
        {details.map((item) => (
          <div key={item.label}>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            The plan
          </h2>
          <ol className="mt-4 flex flex-col gap-5 text-sm">
            {plan.map((step) => (
              <li key={step.time} className="flex gap-4">
                <span className="w-14 shrink-0 font-serif font-black text-accent">
                  {step.time}
                </span>
                <div>
                  <p className="font-medium">{step.title}</p>
                  <p className="mt-1 text-muted">
                    {step.href ? (
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 hover:text-accent"
                      >
                        {step.body}
                      </a>
                    ) : (
                      step.body
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What to bring
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li>• Something warm to wear for the relaxation part of the class</li>
            <li>• Comfy clothes you can move in</li>
            <li>• Mats and blankets are provided 💘</li>
          </ul>
        </div>
        <div id="reserve">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reserve your spot
          </h2>
          <p className="mt-4 text-sm text-muted">
            Just pop in your email and we&apos;ll save you a mat.
          </p>
          <div className="mt-4">
            <YinRsvpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
