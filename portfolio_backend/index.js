import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

// POST route to handle form submission
app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure your mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      //   from: email,
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Message from ${name}`,
      replyTo: email,
      //   text: message,
      text: `
You received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
  `,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
