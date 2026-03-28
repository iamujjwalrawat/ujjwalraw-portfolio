import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Configure the SMTP transporter.
    // Replace standard variables with exact SMTP credentials from Netlify Env.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    const standardHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
        <h2 style="color: #d92525;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
        <h3 style="margin-bottom: 5px;">Message:</h3>
        <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
      </div>
    `;

    // Send Mail Options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, 
      to: process.env.SMTP_USER, // The target is your own email to receive
      replyTo: email,
      subject: `[Portfolio Meeting Request] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: standardHtmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ error: "Failed to send email. Ensure SMTP variables are set in Netlify." }, { status: 500 });
  }
}
