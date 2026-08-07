import type { ContactRequest } from "@/types/api";

/**
 * Sends the contact form submission via the Resend API.
 * No-ops (logs only) when RESEND_API_KEY / CONTACT_TO_EMAIL aren't configured,
 * so the form works locally without provider credentials.
 */
export async function sendContactEmail(request: ContactRequest): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.info("[emailService] Contact form submission (email not configured):", request);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to,
      reply_to: request.email,
      subject: `New message from ${request.name}`,
      text: request.message,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to send contact email: ${res.status} ${await res.text()}`);
  }
}
