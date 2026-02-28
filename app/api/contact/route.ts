import { Resend } from "resend";

export const POST = async (request: Request) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, message, subject, budget } = await request.json();
  const res: any = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.EMAIL_ADDRESS as string,
    replyTo: email,
    subject: `New Inquiry: ${subject} (${budget})`,
    html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f4f7;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background-color:#f4f4f7;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#111827;color:#ffffff;padding:20px 30px;font-size:20px;font-weight:bold;">
                New Project Inquiry
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;color:#333333;font-size:14px;line-height:1.6;">
                
                <p style="margin:0 0 12px;">
                  <strong>Name:</strong><br/>${name}
                </p>

                <p style="margin:0 0 12px;">
                  <strong>Email:</strong><br/>
                  <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                    ${email}
                  </a>
                </p>

                <p style="margin:0 0 12px;">
                  <strong>Subject:</strong><br/>${subject}
                </p>

                <p style="margin:0 0 12px;">
                  <strong>Budget Range:</strong><br/>${budget}
                </p>

                <p style="margin:0 0 8px;"><strong>Message:</strong></p>
                <div style="padding:15px;background:#f9fafb;border-radius:6px;border:1px solid #e5e7eb;">
                  ${message}
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb;padding:15px 30px;font-size:12px;color:#6b7280;text-align:center;">
                Portfolio Contact Form Submission
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
  });

  if (!res?.data) {
    return Response.json({ success: false }, { status: 400 });
  }

  return Response.json({ success: true });
};
