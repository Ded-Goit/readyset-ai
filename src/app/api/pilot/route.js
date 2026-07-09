import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    console.log("Received email:", email);

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "readysetai.4.0@gmail.com",
      subject: "New ReadySet AI Pilot Request",
      html: `
        <h2>New pilot request</h2>
        <p>Email: ${email}</p>
      `,
    });

    console.log("Resend result:", result);

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
