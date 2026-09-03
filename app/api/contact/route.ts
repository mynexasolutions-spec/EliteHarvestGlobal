import { NextRequest, NextResponse } from 'next/server';

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
};

function valueFromRequest(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactRequest;
    const name = valueFromRequest(body.name);
    const email = valueFromRequest(body.email);
    const phone = valueFromRequest(body.phone);
    const subject = valueFromRequest(body.subject);
    const message = valueFromRequest(body.message);

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL_TO || process.env.NEXT_PUBLIC_COMPANY_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPassword || !contactEmail) {
      return NextResponse.json(
        { error: 'Email delivery is not configured yet. Please call or WhatsApp us directly.' },
        { status: 503 },
      );
    }

    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.default.createTransport({
      host: smtpHost,
      port: Number.parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_PORT === '465',
      auth: { user: smtpUser, pass: smtpPassword },
    });

    const text = [
      'New Elite Harvest Global website enquiry',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL_FROM || smtpUser,
      replyTo: email,
      to: contactEmail,
      subject: `Website enquiry: ${subject}`,
      text,
    });

    return NextResponse.json({ success: true, message: 'Thank you. Your enquiry has been sent successfully.' });
  } catch (error) {
    console.error('Contact form delivery failed', { message: error instanceof Error ? error.message : 'Unknown error' });
    return NextResponse.json(
      { error: 'We could not send your enquiry. Please call or WhatsApp us directly.' },
      { status: 502 },
    );
  }
}
