// pages/api/send-quiz-result.js or app/api/send-quiz-result/route.js (depending on your Next.js version)

// For Next.js 13+ (App Router)
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, result } = await request.json();

    if (!email || !result) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransporter({
      // Gmail configuration
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
      // Or use SMTP configuration
      // host: 'smtp.your-email-provider.com',
      // port: 587,
      // secure: false,
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASS,
      // },
    });

    const htmlContent = generateEmailHTML(result);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Your Quiz Results: ${result.description.title} is Your Invisible Force`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

// For Next.js 12 and earlier (Pages Router)
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { email, result } = req.body;

//     if (!email || !result) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Same email sending logic as above...
    
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// }

function generateEmailHTML(result) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Quiz Results</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                text-align: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 20px;
                border-radius: 10px;
                margin-bottom: 30px;
            }
            .result-card {
                background: #f8f9fa;
                border-left: 5px solid #007bff;
                padding: 20px;
                margin: 20px 0;
                border-radius: 5px;
            }
            .force-title {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 10px;
                color: #007bff;
            }
            .description {
                font-size: 16px;
                margin-bottom: 15px;
            }
            .full-description {
                background: white;
                padding: 20px;
                border-radius: 5px;
                border: 1px solid #e9ecef;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #e9ecef;
                color: #6c757d;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Your Quiz Results Are Here!</h1>
            <p>Discover the invisible force that's been leading your life</p>
        </div>

        <div class="result-card">
            <div class="force-title">${result.description.emoji} Your Invisible Force: ${result.description.title}</div>
            <div class="description">${result.description.shortDescription}</div>
        </div>

        <div class="full-description">
            <h2>Understanding Your Result</h2>
            <p>${result.description.fullDescription}</p>
        </div>

        <div style="background: #e3f2fd; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1976d2; margin-top: 0;">What This Means for You</h3>
            <p>Recognizing your invisible force is the first step to releasing it and stepping boldly into your truth, your power, and your next breakthrough.</p>
            <p>Now that you know ${result.description.title} is your dominant pattern, you can begin to:</p>
            <ul>
                <li>Notice when this force is influencing your decisions</li>
                <li>Challenge the limiting beliefs associated with it</li>
                <li>Take small, bold steps outside your comfort zone</li>
                <li>Practice self-compassion as you grow</li>
            </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
            <p style="font-size: 18px; font-weight: bold;">Your breakthrough begins now!</p>
        </div>

        <div class="footer">
            <p>Thank you for taking the "What Invisible Force Is Leading Your Life?" quiz.</p>
            <p>Remember: You have the power to transform these patterns and step into your full potential.</p>
        </div>
    </body>
    </html>
  `;
}