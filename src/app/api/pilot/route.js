import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mgm.agro04@gmail.com",
      subject: "New ReadySet AI Pilot Request",
      html: `
        <h2>New pilot request</h2>
        <p>Email: ${email}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
