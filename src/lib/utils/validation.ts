import type { ContactRequest } from "@/types/api";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactRequest(
  body: Partial<ContactRequest>,
): string | null {
  if (!body.name || body.name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }
  if (!body.email || !EMAIL_RE.test(body.email)) {
    return "A valid email address is required.";
  }
  if (!body.message || body.message.trim().length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
}
