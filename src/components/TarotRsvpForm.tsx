"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function TarotRsvpForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/tarot-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <p className="text-accent-dark font-medium">
        You&apos;re on the list. The exact location will be sent to your
        email closer to the date.
      </p>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <div>
        <label className="mb-1 block text-sm font-medium">Your name</label>
        <input
          required
          value={form.name}
          onChange={update("name")}
          className={inputClasses}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "loading" ? "Reserving..." : "Reserve my spot"}
      </button>
      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
    </form>
  );
}
