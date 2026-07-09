import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, role, message } = await request.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "readysetai.4.0@gmail.com",
      subject: "New ReadySet AI Pilot Request",
      html: `
        <h2>New Pilot Request</h2>

        <table style="border-collapse: collapse;">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${name || "-"}</td>
          </tr>

          <tr>
            <td><strong>Email:</strong></td>
            <td>${email || "-"}</td>
          </tr>

          <tr>
            <td><strong>Phone:</strong></td>
            <td>${phone || "-"}</td>
          </tr>

          <tr>
            <td><strong>Role:</strong></td>
            <td>${role || "-"}</td>
          </tr>

          <tr>
            <td><strong>Message:</strong></td>
            <td>${message || "-"}</td>
          </tr>
        </table>
      `,
    });

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

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
