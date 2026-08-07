export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export type ContactResponse =
  | { ok: true }
  | { ok: false; error: string };
