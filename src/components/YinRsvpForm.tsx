"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function YinRsvpForm({ waitlist = false }: { waitlist?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/yin-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <p className="text-accent-dark font-medium">
        {waitlist
          ? "You're on the waitlist! We'll email you if a spot opens up 💘"
          : "You're on the list! We'll email you to confirm your spot 💘"}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <div>
        <label htmlFor="yin-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="yin-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/80 disabled:opacity-60"
      >
        {status === "loading"
          ? "Sending..."
          : waitlist
            ? "Join the waitlist"
            : "Reserve my spot"}
      </button>
      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
    </form>
  );
}
