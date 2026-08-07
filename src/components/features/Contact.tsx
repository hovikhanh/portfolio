"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/content/profile";
import type { ContactResponse } from "@/types/api";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = new FormData(event.currentTarget);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data: ContactResponse = await res.json();

      if (data.ok) {
        setStatus("sent");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email me directly instead.");
    }
  }

  return (
    <section id="contact" className="py-20">
      <p className="font-mono text-accent">./send-message.sh</p>
      <h2 className="mt-2 text-2xl font-semibold">Get in touch</h2>
      <p className="mt-4 max-w-xl text-foreground/70">
        Reach out at{" "}
        <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
          {profile.email}
        </a>{" "}
        or use the form below.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="font-mono text-xs text-foreground/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs text-foreground/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-mono text-xs text-foreground/60">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>

        {status === "sent" && (
          <p className="text-sm text-accent">Thanks — I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}
      </form>
    </section>
  );
}
