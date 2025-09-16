// pages/api/send-quiz-result.js or app/api/send-quiz-result/route.js (depending on your Next.js version)

// For Next.js 13+ (App Router)
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, result } = await request.json();

    if (!email || !result) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const htmlContent = generateEmailHTML(result);

    // Brevo API call
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: process.env.SENDER_NAME || 'Breakthrough Methods',
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: email,
            name: 'Quiz Participant',
          },
        ],
        subject: `Your Report Is Here: ${result.description.title} is Your Invisible Force`,
        htmlContent: htmlContent,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API error:', errorData);
      throw new Error(`Brevo API error: ${brevoResponse.status}`);
    }

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

function generateEmailHTML(result) {
  const { description } = result;
  
  // Content variations based on the invisible force
  const contentMap = {
    "Fear": {
      subtitle: "Unstoppable on the outside. Running in circles on the inside.",
      mirror: `You're the one people count on. Clear. Strategic. Relentless.
              But when it's your own next move - the bigger role, the bold offer, the freedom to step out fully - something shifts.
              You tell yourself you're "waiting for clarity," "timing it right," "doing due diligence."`,
      reveal: `You might think you just need more clarity, more time, or one more skill.
               But what's really happening is fear - cleverly disguised as preparation and planning.`,
      method: "Freedom Method"
    },
    "People-Pleasing": {
      subtitle: "Always there for others. Never quite there for yourself.",
      mirror: `You're the one everyone turns to. Caring. Reliable. Present.
              But when it comes to your own needs, desires, and boundaries - something shifts.
              You tell yourself you're being "supportive," "helpful," "a good person."`,
      reveal: `You might think you just need to be more assertive or set better boundaries.
               But what's really happening is people-pleasing - a pattern that puts everyone else's comfort before your own truth.`,
      method: "Boundary Method"
    },
    "Perfectionism": {
      subtitle: "High achieving on the outside. Never quite enough on the inside.",
      mirror: `You're the one who delivers excellence. Precise. Thorough. Dedicated.
              But when it comes to feeling satisfied with your achievements - something shifts.
              You tell yourself you're "maintaining standards," "doing it right," "being thorough."`,
      reveal: `You might think you just need to work harder or get better systems.
               But what's really happening is perfectionism - a pattern that keeps moving the goalpost so you never truly arrive.`,
      method: "Excellence Method"
    },
    "Inner Conflict": {
      subtitle: "Moving forward on the outside. Battling yourself on the inside.",
      mirror: `You're someone with vision and ambition. Capable. Driven. Intelligent.
              But when it comes to consistent momentum and clear decisions - something shifts.
              You tell yourself you're "weighing options," "being thorough," "considering all angles."`,
      reveal: `You might think you just need more information or better decision-making frameworks.
               But what's really happening is inner conflict - competing parts of yourself that can't agree on the direction.`,
      method: "Integration Method"
    },
    "Guilt & Shame": {
      subtitle: "Giving on the outside. Guilty and resentful on the inside.",
      mirror: `You're the one who puts others first. Generous. Caring. Self-sacrificing.
              But when it comes to prioritizing your own needs and desires - something shifts.
              You tell yourself you're being "selfless," "responsible," "a good person."`,
      reveal: `You might think you just need to be less selfish or more grateful.
               But what's really happening is guilt and shame - patterns that convince you that wanting more for yourself is wrong.`,
      method: "Self-Worth Method"
    },
    "Conditioning": {
      subtitle: "Successful on the outside. Living someone else's script on the inside.",
      mirror: `You're following the path laid out for success. Responsible. Practical. Reliable.
              But when it comes to feeling authentic and fulfilled - something shifts.
              You tell yourself you're being "realistic," "responsible," "practical."`,
      reveal: `You might think you just need to find the right strategy or opportunity.
               But what's really happening is conditioning - living according to scripts written by others instead of your own truth.`,
      method: "Authenticity Method"
    }
  };

  const content = contentMap[description.title] || contentMap["Fear"];

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Report Is Here: ${description.title} is Your Invisible Force</title>
        <style>
            body {
                font-family: 'Georgia', serif;
                line-height: 1.6;
                color: #2C2C2C;
                max-width: 600px;
                margin: 0 auto;
                padding: 0;
                background-color: #f8f9fa;
            }
            .email-container {
                background-color: #ffffff;
                margin: 20px auto;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .header {
                background: #447087;
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0 0 10px 0;
                font-size: 28px;
                font-weight: bold;
            }
            .header p {
                margin: 0;
                font-size: 16px;
                opacity: 0.9;
            }
            .result-card {
                background: #68A1A7;
                color: white;
                padding: 30px;
                margin: 0;
                text-align: center;
            }
            .result-title {
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 15px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            .result-subtitle {
                font-size: 18px;
                margin-bottom: 0;
                opacity: 0.95;
                font-style: italic;
            }
            .content-section {
                padding: 10px;
            }
            .section-title {
                font-size: 24px;
                font-weight: bold;
                color: #2C2C2C;
                margin-bottom: 8px;
                border-bottom: 3px solid #50A7AC;
                padding-bottom: 10px;
            }
            .section-content {
                padding: 15px;
                border-radius: 10px;
                margin: 10px 0;
                line-height: 1.3;
                background: #f8f9fa !important;
            }
            .cta-section {
                background: #447087;
                color: white;
                padding: 40px 30px;
                text-align: center;
                margin: 30px 0 0 0;
            }
            .cta-button {
                display: inline-block;
                background: #ffffff;
                color: #447087;
                padding: 15px 30px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                font-size: 18px;
                margin: 10px 0;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
            }
            .footer {
                text-align: center;
                padding: 30px;
                background: #2C2C2C;
                color: white;
            }
            .footer p {
                margin: 5px 0;
                font-size: 14px;
                opacity: 0.8;
            }
            .footer a {
                color: #50A7AC;
                text-decoration: none;
            }
            p {
                margin: 0;
            }
            strong {
                color: #2C2C2C;
            }
            em {
                color: #555;
                font-style: italic;
            }
            @media only screen and (max-width: 600px) {
                .email-container {
                    margin: 10px;
                    border-radius: 8px;
                }
                .header, .content-section, .cta-section {
                    padding: 8px;
                }
                .result-title {
                    font-size: 24px;
                }
                .section-content {
                    padding: 8px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <h1>Your Report Is Here</h1>
                <p>Discover the invisible force that's been leading your life</p>
            </div>

            <!-- Result Card -->
            <div class="result-card">
                <h2 class="result-title">Your Invisible Force: ${description.title}</h2>
                <p class="result-subtitle">${content.subtitle}</p>
            </div>

            <!-- Mirror Section -->
            <div class="content-section">
                <h3 class="section-title">Mirror: What Life Looks Like Right Now</h3>
                <div class="section-content">
                    <p>${content.mirror}</p>
                    <p><strong>Yet behind the overpreparation, it looks more like this:</strong></p>
                    <p>Weeks debating whether to greenlight a key hire - until the best candidates walk away.</p>
                    <p>Rewriting a keynote outline again and again, until the stage goes to someone else.</p>
                    <p>Holding back on a promotion because of one bullet point you don't meet - then watching a less qualified person get the role.</p>
                    <p>Not delegating tasks to your team because "it's faster and better if I do it myself."</p>
                    <p><em>On the outside: polished and in control.<br>
                    On the inside: anxious, depleted, and quietly wondering why you're still holding back while others with less skill move ahead.</em></p>
                </div>
            </div>

            <!-- Reveal Section -->
            <div class="content-section">
                <h3 class="section-title">Reveal: What's Really Happening</h3>
                <div class="section-content">
                    <p>${content.reveal}</p>
                    <p>Somewhere along the way, your system learned that going after what you truly want could feel too risky, too costly. So you hide behind planning and preparation - because at least it looks and feels like progress but it's not truly moving the needle.</p>
                    <p>But the more you grow, the more sophisticated the disguise becomes: perfectionism, overpreparation, overthinking. <em>Underneath it all, it's still the same invisible force of ${description.title.toLowerCase()} calling the shots.</em></p>
                </div>
            </div>

            <!-- Understanding Section -->
            <div class="content-section">
                <h3 class="section-title">Understanding Your Result</h3>
                <div class="section-content">
                    <p>${description.fullDescription}</p>
                </div>
            </div>

            <!-- Solution Section -->
            <div class="content-section">
                <h3 class="section-title">Solution: How You Can Breakfree</h3>
                <div class="section-content">
                    <p><strong>The ${content.method} is designed to dissolve ${description.title.toLowerCase()} at its root.</strong></p>
                    <p>It rewires the pattern that keeps hesitation in charge — so you can move differently.</p>
                    <p>Instead of stopping and starting, momentum becomes the norm.</p>
                    <p>Instead of holding back, you trust yourself and your decisions.</p>
                    <p><strong>Instead of ${description.title.toLowerCase()} leading you, freedom does.</strong></p>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="cta-section">
                <h3 style="font-size: 28px; margin-bottom: 15px;">What has ${description.title.toLowerCase()} already taken from you - and when is now a good time to claim it all back?</h3>
                
                <a href="https://tidycal.com/breakthroughmethods/breakthrough-session" class="cta-button">Book Your Breakthrough Session</a>
            </div>

            <!-- Footer -->
            <div class="footer">
                <p><strong>Thank you for taking the "What Invisible Force Is Leading Your Life?" quiz.</strong></p>
                <p style="margin-top: 20px; opacity: 0.6;">
                    © 2025 Breakthrough Methods. All rights reserved.<br>
                    You're receiving this because you completed our quiz. 
                    <a href="#" style="color: #50A7AC;">Unsubscribe</a> | 
                    <a href="#" style="color: #50A7AC;">Privacy Policy</a>
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}