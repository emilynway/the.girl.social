"use client";

import { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";

type PersonaId = "newcomer" | "connector" | "deep-diver" | "local-legend";

type Question = {
  prompt: string;
  options: { label: string; persona: PersonaId }[];
};

const questions: Question[] = [
  {
    prompt: "What brings you to The Girl Social?",
    options: [
      { label: "I just moved to Oslo and want to meet people fast", persona: "newcomer" },
      { label: "I have a life here, but I want to expand my circle", persona: "connector" },
      { label: "I want fewer acquaintances and more real friends", persona: "deep-diver" },
      { label: "I've been around a while and want to help it grow", persona: "local-legend" },
    ],
  },
  {
    prompt: "Your ideal way to spend a Tuesday evening?",
    options: [
      { label: "Exploring somewhere new in the city, maybe with one new friend", persona: "newcomer" },
      { label: "Trying a workshop or class with a small group", persona: "connector" },
      { label: "A long dinner with two or three close friends", persona: "deep-diver" },
      { label: "Organizing or hosting something for the group", persona: "local-legend" },
    ],
  },
  {
    prompt: "What gets you to show up, even on a day you don't feel like it?",
    options: [
      { label: "Knowing other women who are also new to the city will be there", persona: "newcomer" },
      { label: "A fun new activity you haven't tried before", persona: "connector" },
      { label: "The chance at real one-on-one time with someone", persona: "deep-diver" },
      { label: "Being able to help welcome newer members", persona: "local-legend" },
    ],
  },
];

const personas: Record<PersonaId, { name: string; description: string }> = {
  newcomer: {
    name: "The Newcomer",
    description:
      "Oslo is still revealing itself to you, and that's part of the fun. Start with our monthly meetups — low-pressure ways to meet other women building a life here.",
  },
  connector: {
    name: "The Connector",
    description:
      "You've got a life here, but you're always up for expanding it. Our workshops and socials are built for people who want more of that.",
  },
  "deep-diver": {
    name: "The Deep-Diver",
    description:
      "You'd rather have three real friends than thirty acquaintances. Our smaller meetups are where those tend to start.",
  },
  "local-legend": {
    name: "The Local Legend",
    description:
      "You know the ropes and you're ready to help others find their footing. Founding membership is built with people like you in mind.",
  },
};

export default function VibeQuiz() {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<PersonaId, number>>({
    newcomer: 0,
    connector: 0,
    "deep-diver": 0,
    "local-legend": 0,
  });

  const isDone = step >= questions.length;

  function handleAnswer(persona: PersonaId) {
    setTally((prev) => ({ ...prev, [persona]: prev[persona] + 1 }));
    setStep((s) => s + 1);
  }

  function handleRestart() {
    setStep(0);
    setTally({ newcomer: 0, connector: 0, "deep-diver": 0, "local-legend": 0 });
  }

  if (isDone) {
    const winner = (Object.keys(tally) as PersonaId[]).reduce((best, id) =>
      tally[id] > tally[best] ? id : best
    );
    const result = personas[winner];

    return (
      <div className="rounded-2xl border border-accent bg-card p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Your result
        </p>
        <h3 className="mt-2 font-serif text-2xl font-black uppercase tracking-[-0.025em] sm:text-3xl">
          {result.name}
        </h3>
        <p className="mt-3 max-w-xl text-muted">{result.description}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <NewsletterForm />
          <button
            onClick={handleRestart}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted underline underline-offset-4 hover:text-accent"
          >
            Retake quiz
          </button>
        </div>
      </div>
    );
  }

  const question = questions[step];

  return (
    <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Question {step + 1} of {questions.length}
      </p>
      <h3 className="mt-2 font-serif text-xl font-black uppercase tracking-[-0.025em] sm:text-2xl">
        {question.prompt}
      </h3>
      <div className="mt-6 flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleAnswer(option.persona)}
            className="rounded-xl border border-border bg-background px-5 py-3 text-left text-sm transition hover:border-accent hover:text-accent"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
