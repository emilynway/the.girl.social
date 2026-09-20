"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function PartnerForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <p className="text-accent-dark font-medium">
        Thanks for reaching out! We&apos;ll be in touch soon.
      </p>
    );
  }

  const inputClasses =
    "w-full rounded-lg border-2 border-foreground bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
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
      <div>
        <label className="mb-1 block text-sm font-medium">Business / organization</label>
        <input
          required
          value={form.company}
          onChange={update("company")}
          className={inputClasses}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Tell us about your business and partnership idea</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="pop self-start rounded-full border-2 border-foreground bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>
      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
    </form>
  );
}
