import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/services/emailService";
import { validateContactRequest } from "@/lib/utils/validation";
import type { ContactRequest, ContactResponse } from "@/types/api";

export async function POST(request: Request): Promise<NextResponse<ContactResponse>> {
  const body = (await request.json().catch(() => null)) as Partial<ContactRequest> | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validateContactRequest(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  try {
    await sendContactEmail(body as ContactRequest);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact] Failed to send email:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
