// Updated route.js with dynamic email subject
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
    
    // Get the dynamic email subject based on the result
    const emailSubject = getEmailSubject(result);

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
        subject: emailSubject,
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

// Function to get dynamic email subject based on result
function getEmailSubject(result) {
  const { description } = result;
  
  const subjectMap = {
    "Fear": "[Your Quiz Results]: Fearless on the outside. Fearful on the inside.",
    "People-Pleasing": "[[Your Quiz Results]: It’s not kindness. It’s self-abandonment.",
    "Perfectionism": "[Your Quiz Results]: Your power is authenticity. Perfection is the trap.",
    "Inner Conflict": "[Your Quiz Results]: It’s not confusion. It's inner conflict.",
    "Guilt & Shame": "[Your Quiz Results]: Freedom begins where guilt and shame end.",
    "Conditioning": "[Your Quiz Results]: It’s not your life. It’s conditioning."
  };
  
  return subjectMap[description.title] || "[Your Quiz Results]: Discover Your Invisible Force";
}

function generateEmailHTML(result) {
  const { description } = result;
  
  // Content variations based on the invisible force with dynamic email subjects
  const contentMap = {
    "Fear": {
      emailSubject: "[Your Quiz Results]: Unstoppable on the outside. Running in circles on the inside.",
      subtitle: "Unstoppable on the outside. Running in circles on the inside.",
      mirror: `You're the one people count on. Clear. Strategic. Relentless.
But when it's your own next move - the bigger role, the bold offer, the freedom to step out fully - something shifts.
You tell yourself you're "waiting for clarity," "timing it right," "doing due diligence."
Yet behind the overpreparation, it looks more like this:
• **Weeks debating whether to greenlight a key hire** - until the best candidates walk away.
• **Rewriting a keynote outline again and again** until the stage goes to someone else.
• **Holding back on a promotion** because of one bullet point you don't meet—then watching a less qualified person get the role.
• **Not delegating tasks to your team** because "it's faster and better if I do it myself."
On the outside: polished and in control.
On the inside: anxious, depleted, and quietly wondering why you're still holding back while others with less skill move ahead.`,
      reveal: `You might think you just need more clarity, more time, or one more skill.
But what's really happening is **fear – cleverly disguised as preparation and planning**.
Somewhere along the way, your system learned that going after what you truly want could feel too risky, too costly. So you hide behind planning and preparation – because at least it looks and feels like progress, but it's not truly moving the needle. 
But the more you grow, the more sophisticated the disguise becomes: **perfectionism, overpreparation, overthinking**. Underneath it all, it's still the same invisible force of fear calling the shots.`,
      cost: `Here's the truth: every time you stall, you compromise real progress for comfort. 
• **Market opportunities slip away** while you're still perfecting and refining the plan.
• **You stay busy and professional**, slowly edging toward burnout – while regret quietly grows in the background.
• **Promotions go to colleagues** who raise their hand before they feel ready.
• **Your team remains dependent** because you hold back from trusting them to lead.`,
      possibility: `But imagine this:
• **Decisions that once took 30 days now take 30 minutes.**
• **You finally launch the offer, the book, and the keynote** that is an authentic expression of you. 
• **You apply, negotiate, and pitch** without rewriting it 100 times first.
• **You trust your team to lead** and stop controlling everything.
• **Freedom stops being a vision on the horizon.** It becomes the way you live and lead.`,
      reflection: `Pause for a moment. Where is this showing up for you right now?
• **Is there a decision sitting on your desk** that you've been "researching" for weeks instead of making?
• **What idea, offer, or project** are you still polishing and planning but haven't yet presented to the world?
• **What promotion, partnership, or opportunity** have you held back from because you didn't feel "ready"?
• **Where are you keeping people at arm's length** in your leadership – telling yourself it's "faster" to do it alone, but really it's about not trusting in your leadership?
Notice what comes up as you read these. The tightness. The looping thoughts. The growing frustration.
**That's the invisible force of fear, running behind the scenes.**`,
      solution: `The Freedom Method is designed to dissolve fear at its root.
• **It dissolves the wiring** that keeps pause and doubt in control - so action feels safe again.
• **Instead of stopping and starting**, momentum becomes the norm.
• **Instead of holding back**, you trust yourself and your decisions.
• **Instead of fear leading you**, freedom does.`,
      yourmove: `Fear is not who you are. It's just the invisible force that's been steering you.
The question is, **how much longer will you let it?**
You can keep spinning your wheels while opportunities slip by.
Or you can break through - into the **leadership, impact, and freedom** you already know you're capable of.
**What has fear already taken from you? When is now a good time to take it all back?**`,
      method: "Freedom Method"
    },
    "People-Pleasing": {
      emailSubject: "[Your Quiz Results]: It's not kindness. It's self-abandonment disguised as care.",
      subtitle: "It's not kindness. It's self-abandonment disguised as care.",
      mirror: `You're the one people count on. Reliable. Generous. Steady.
But when it comes to yourself, something shifts.
• **You say yes when you want to say no.**
• **You take on commitments that drain you** - then quietly resent the very people you were trying to please.
• **You hold back your truth to "keep the peace"** – leaving you feeling unheard, unseen and at war with yourself.
• **You give so much to others** that your own needs are continuously neglected. 
On the outside: dependable, easy-going and kind.
On the inside: feeling stretched thin, resentful, irrelevant and disconnected from self.`,
      reveal: `You might think you're just "being nice."
But what's really happening is **self-protection - with self-abandonment as the price**.
Somewhere along the way, your system miswired 'approval from others' to mean belonging. You learned that **love and safety came from accommodating and appeasing others**. People-pleasing became a protection strategy.
What begins as care and kindness slowly turns into **self-suppression**. 
Every yes you don't truly mean, every truth you bury, every silence you keep to avoid conflict - **costs you yourself**.`,
      cost: `Here's the truth: every time you abandon yourself to keep the peace, you trade authenticity for outward approval.
• **You keep over-committing** until your energy runs out and you face exhaustion.
• **You hold back your voice**, even when it matters most.
• **You swallow your truth**, even when the moment calls for it.
• **Resentment grows in the background**, while real connection slips away.`,
      possibility: `But imagine this:
• **You say yes when you mean it** - and no without guilt.
• **You speak your truth with confidence**, even when the stakes are high.
• **You trust your voice** to be heard and respected.
• **You experience real connection** - built on authenticity, not self-compromise.`,
      reflection: `Pause for a moment. Where is this showing up for you right now?
• **What was the last thing you agreed to**, even though you wanted to say no?
• **Where are you holding back your real opinion** to avoid conflict?
• **Who gets the "pleasing" version of you** instead of the authentic one?
• **How much energy is going into keeping everyone else happy** while your needs wait at the bottom of the list?
Notice the tightness, the growing resentment, the weight in your chest.
**That's the invisible force of people-pleasing, running behind the scenes.**`,
      solution: `The Parts Integration Method is designed to dissolve this tug-of-war.

• **It aligns the part that craves authenticity** with the part that clings to approval.
• **When they integrate**, you no longer have to choose between truth and belonging.
• **Instead of silencing yourself**, your truth flows naturally.
• **Instead of resentment**, you create mutual respect.
• **Instead of pleasing**, you connect.`,
      yourmove: `People-pleasing is not who you are. It's the survival pattern that once protected you - that now causes you to abandon yourself and your truth. 
The question is: **how much longer will you let it?**
You can keep saying yes when you mean no - quietly abandoning yourself.
Or you can breakthrough - into **authenticity, alignment, self-respect and true belonging**.
**What has people pleasing already cost you? When is now a good time to take it all back?**`,
      method: "Parts Integration Method"
    },
    "Perfectionism": {
      emailSubject: "[Your Quiz Results]: Your power is your authenticity, not perfection.",
      subtitle: "Your power is your authenticity, not perfection.",
      mirror: `From the outside, you're a reliable achiever. High standards. Impeccable delivery.
But behind that image, something else is running the show.
• **You delay starting** because you don't feel "ready" yet.
• **You over-deliver, over-prepare, and push past your limits** – then crash.
• **You rewrite and refine** yet nothing feels finished or good enough.
• **You never feel like you – or your work – are ever enough.**
On the outside: disciplined and impressive.
On the inside: restless, drained, and trapped in a loop of proving yourself.`,
      reveal: `You might think you're just being diligent, ambitious, or detail-oriented.
But what's really happening is **survival - with self-sabotage as the cost**.
Somewhere along the way, your system equated **achievement and "getting it right" with safety**. Perfectionism whispers: "If I get it flawless, I'll finally be worthy. I'll finally be safe."
Yet no outward achievement or ever moving milestone ever quiets that voice within.
What starts as high standards ends as **self-sabotage** - the endless chase that robs you of ease, rest, and fulfillment.`,
      cost: `Here's the truth: every time you chase "perfect", you trade authenticity for needing to prove yourself. 
• **You keep pushing harder** — chasing a finish line that keeps moving the moment you get close.
• **Every achievement feels hollow** — because enoughness slips through your fingers the second you touch it.
• **No matter how much time or work you pour in**, nothing ever feels good enough.
• **Rest isn't truly rest** – it feels like guilt, because stopping means you're not being productive.`,
      possibility: `But imagine this:
• **You create, lead, and deliver effectively**, without needing everything to be perfect.
• **Success flows from authenticity** instead of exhaustion.
• **Every achievement feels meaningful** because you already know and feel enough.
• **You rest without guilt** experiencing true rejuvenation because your worth isn't on trial.`,
      reflection: `Pause for a moment. Where is this showing up for you right now?
• **What project are you delaying** because you don't feel "ready"?
• **Where are you pushing past your limits** to prove yourself?
• **What draft, pitch, or post is still unsent** because you're waiting for it to be perfect?
• **How often do you collapse into exhaustion** because you won't allow yourself to stop?
That pressure isn't you. **That's the invisible force of perfectionism, running behind the scenes.**`,
      solution: `The Freedom Method is designed to dissolve the wiring that ties safety to perfection.
• **It clears the pattern** that makes proving feel necessary – so that achievement becomes a natural expression of who you are, instead of a survival strategy destined only for a burnout.
• **Instead of delaying**, you take action.
• **Instead of overworking**, you trust your process.
• **Instead of proving**, you create from a place of enoughness.`,
      yourmove: `Perfectionism is not who you are. It's just the invisible force steering you.
The question is: **how much longer will you let it?**
You can keep burning out on the treadmill of "not enough."
Or you can break through - into **authenticity, ease, and real measurable impact**.
**What has perfectionism already cost you? When is now a good time to take it all back?**`,
      method: "Freedom Method"
    },
    "Inner Conflict": {
      emailSubject: "[Your Quiz Results]: It's not a lack of clarity – it's a lack of inner alignment.",
      subtitle: "It's not a lack of clarity – it's a lack of inner alignment.",
      mirror: `On the outside, you look capable and decisive. People admire how well you juggle your responsibilities and commitments. 
But inside, you feel fragmented - like parts of you are being pulled in opposing directions.
• **One part of you commits** – another part second-guesses the decision. 
• **One part of you starts strong** – another part slams the brakes.
• **One part of you longs for change** - another part clings to the familiar. 
On the outside: responsible and steady.
On the inside: stuck in limbo, conflicted and riddled with self-doubt.`,
      reveal: `You might think you just need more information, more clarity, or more time to figure things out. 
But what's really happening is **survival - with fragmentation as the cost**.
Different parts of you are trying to protect you - **each trying to keep you safe in its own way**. Until they come into alignment, they create a tug-of-war that drains your energy, limits your potential and stalls your progress.`,
      cost: `Here's the truth: every time you fight yourself, you lose momentum.
• **You waste valuable time and energy** on endless stop-start cycles.
• **Opportunities pass by** while you wrestle with yourself.
• **Progress stalls**, no matter how much you want something or how much effort you put in.
• **The longer this goes on**, the heavier the frustration grows.`,
      possibility: `But imagine this:
• **Decisions feel aligned, clear and light.**
• **Your energy fuels real progress** instead of being drained by inner conflict.
• **You gain mental clarity, inner peace and confidence.**
• **All parts of you move forward** in the same direction.
• **Momentum builds** because you're no longer stopping to negotiate and argue with yourself.`,
      reflection: `Pause for a moment. Where is this showing up for you right now?
• **What decision are you circling** because different parts of you want opposite outcomes?
• **Where have you started something** – only to stall and sabotage it halfway through?
• **What goal have you been chasing and hesitating about** for months?
That's not confusion. **That's inner conflict.**
**The invisible force of fragmentation running behind the scenes.**`,
      solution: `The Parts Integration Method is designed to resolve this inner battle.
• **It brings protective parts into alignment** – so that you stop fighting yourself and start moving forward as one whole.
• **Instead of draining your energy in conflict**, you channel it into progress.
• **Instead of stalling**, momentum becomes natural.
• **Instead of resisting yourself**, you trust yourself.`,
      yourmove: `Inner conflict is not who you are. It's just the invisible force steering you.
The question is: **how much longer will you let it?**
You can keep circling in stop-start cycles, drained by indecision.
Or you can breakthrough - into **clarity, alignment, and sustainable momentum**.
**What has inner conflict already cost you? When is now a good time to take it all back?**`,
      method: "Parts Integration Method"
    },
    "Guilt & Shame": {
      emailSubject: "[Your Quiz Results]: Freedom begins the moment you release the burdens of guilt and shame.",
      subtitle: "Freedom begins the moment you release the burdens of guilt and shame.",
      mirror: `You've always been the strong one. Responsible. Dependable. Carrying more than your share.
But underneath that strength lives a weight you can't seem to shake.
• **You downplay your ambitions** so you don't look "selfish."
• **You hide your success** to avoid judgment.
• **Every time you think about choosing yourself**, guilt creeps in.
• **The word freedom feels almost indulgent** - even though it's what you long for most.
On the outside: respected and generous.
On the inside: weighed down, resentful, and shrinking to feel safe.`,
      reveal: `You might think you're just being humble, generous, or responsible.
But what's really happening is **survival - with self-neglect as the cost**.
Somewhere along the way, **guilt and shame** - often inherited from family, culture, or religion - wired your system to equate success and ambition with danger. So **playing smaller than you are capable of, became your protection strategy**.
What starts as a calling, ends as **self-neglect** - abandoning your own evolution and potential to keep others comfortable.`,
      cost: `Here's the truth: every time guilt and shame take the lead, they create limitation. 
• **You crush your dreams and desires** before they ever take form. 
• **You give and do until you're drained dry**, with nothing left for yourself. 
• **You dim your achievements and success** to hide from judgment.
• **You stay on the sidelines** as life passes by.`,
      possibility: `But imagine this:
• **You choose yourself without guilt** - owning your right to come first.
• **You pursue what you desire freely** - without apologies, without explanations.
• **You share your success openly**, without the fear of judgment.
• **You rise into your full potential** - boldly and unapologetically.`,
      reflection: `Pause for a moment. Where is this showing up for you right now?
• **What ambition are you downplaying** before it even takes form? 
• **Where are you hiding your achievements and success** to avoid judgement? 
• **What decision are you postponing** because choosing yourself feels "selfish"?
Hiding and playing small isn't you. **It's the invisible force of guilt and shame, running behind the scenes.**`,
      solution: `The Freedom Method is designed to dissolve the imprints of guilt and shame at the root.
• **It rewires your system** so self-prioritization feels safe, natural, and true.
• **Instead of silencing your desires**, you claim them.
• **Instead of shrinking**, you expand and take up space. 
• **Instead of hiding your success**, you share it proudly.`,
      yourmove: `Guilt and shame are not who you are. They're the invisible forces that once protected you - but now keep you small.
The question is: **how much longer will you let them?**
You can keep dimming your light to avoid guilt.
Or you can breakthrough - into **freedom, expansion, and unapologetic self-expression**.
**What has guilt and shame already cost you? When is now a good time to claim it all back?**`,
      method: "Freedom Method"
    },
    "Conditioning": {
      emailSubject: "[Your Quiz Results]: It's not your path. It's conditioning.",
      subtitle: "It's not your path. It's conditioning.",
      mirror: `On the surface, your life looks steady. Boxes ticked. Expectations met. The path followed.
But beneath the appearance, something feels off.
• **You've built a life that looks "right"** but doesn't feel like yours.
• **You make choices based on "shoulds"** instead of desire.
• **You silence what you really want**, just to keep the peace. 
• **Stability and security has turned into numbness** and a lack of fulfillment. 
On the outside: responsible and dependable.
On the inside: restless, disconnected, and empty.`,
      reveal: `You might think this is just being practical, steady, or realistic.
But what's really happening is **survival - with self-disconnection as the cost**.
Conditioning wires you to **confuse compliance with safety**.
You were handed a script - and told it was the only way to belong, succeed, or stay safe and secure. 
What starts as a need for stability and security ends as **self-disconnection** - following rules that keep you safe, but never fulfilled and satisfied.`,
      cost: `Here's the truth: every time you follow conditioning over authenticity, you trade your freedom for approval.
• **You live to meet everyone else's expectations** - while your own get suppressed. 
• **You build a life that looks good on the outside** but feels empty within.
• **You run on autopilot**, instead of leading your own direction.
• **You sacrifice real fulfillment** for the comfort of fitting in.`,
      possibility: `But imagine this:
• **You make choices from desire** - not from "have to's", "need to's" or "shoulds".
• **You create a life that is yours**, not one scripted by the society's expectations. 
• **You reclaim sovereignty and independence** over your life's path and direction.
• **Freedom becomes your natural state** - not an act of rebellion.`,
      reflection: `Pause for a moment. Where is this showing up for you right now?
• **What choices are you making** because you think you "have to", "need to" or should?
• **Where are you following rules** that don't feel true for you?
• **What part of your life looks good on the outside** but feels empty on the inside?
The unfulfillment isn't who you are. 
**It's the invisible force of conditioning, running behind the scenes.**`,
      solution: `The Freedom Method is designed to clear conditioning at the root.
• **It dissolves the programming you inherited** - so that your choices reflect who you really are instead of who you are expected to be.
• **Instead of complying**, you create.
• **Instead of disconnecting**, you align.
• **Instead of following the script**, you write your own.`,
      yourmove: `Conditioning is not who you are. It's just the invisible force steering you.
The question is: **how much longer will you let it?**
You can keep living by the conditioning - safe and secure, but disconnected.
Or you can breakthrough - into **authenticity, sovereignty, and freedom**.
**What has conditioning already cost you - and when is now a good time to claim it all back?**`,
      method: "Freedom Method"
    }
  };

  const content = contentMap[description.title] || contentMap["Fear"];

  // Helper function to format content with preserved line breaks and bullet points
  const formatContent = (text) => {
    return text
      .split('\n')
      .map(line => {
        line = line.trim();
        if (!line) return '<br>';
        
        // Handle bullet points with bold text
        if (line.startsWith('•')) {
          const bulletContent = line.substring(1).trim();
          // Replace **text** with <strong>text</strong>
          const formattedContent = bulletContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return `<li style="margin: 8px 0; line-height: 1.6;">${formattedContent}</li>`;
        }
        
        // Handle regular paragraphs with bold text
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return `<p style="margin: 16px 0; line-height: 1.6;">${formattedLine}</p>`;
      })
      .join('');
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${content.emailSubject}</title>
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
                padding: 40px 30px 30px 30px;
                text-align: center;
            }
            .logo-placeholder {
                width: 120px;
                height: 60px;
                background-color: rgba(255,255,255,0.2);
                border: 2px dashed rgba(255,255,255,0.5);
                border-radius: 8px;
                margin: 0 auto 20px auto;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: rgba(255,255,255,0.8);
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
                padding: 30px;
            }
            .section-title {
                font-size: 24px;
                font-weight: bold;
                color: #2C2C2C;
                margin-bottom: 15px;
                border-bottom: 3px solid #50A7AC;
                padding-bottom: 10px;
            }
            .section-content {
                padding: 20px;
                border-radius: 10px;
                margin: 15px 0;
                line-height: 1.6;
                background: #f8f9fa !important;
            }
            .section-content ul {
                margin: 0;
                padding-left: 0;
                list-style: none;
            }
            .section-content li {
                margin: 8px 0;
                line-height: 1.6;
                padding-left: 20px;
                position: relative;
            }
            .section-content li:before {
                content: "•";
                color: #50A7AC;
                font-weight: bold;
                position: absolute;
                left: 0;
                font-size: 18px;
            }
            .section-content p {
                margin: 16px 0;
                line-height: 1.6;
            }
            .section-content p:first-child {
                margin-top: 0;
            }
            .section-content p:last-child {
                margin-bottom: 0;
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
            strong {
                color: #2C2C2C;
                font-weight: bold;
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
                    padding: 20px;
                }
                .result-title {
                    font-size: 24px;
                }
                .section-content {
                    padding: 15px;
                }
                .logo-placeholder {
                    width: 100px;
                    height: 50px;
                    font-size: 12px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
           
                <!-- Logo Placeholder -->
                <div class="logo-placeholder">
                  <img src="https://breakthough-website.vercel.app/logoEmail.png" />
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
                    ${formatContent(content.mirror)}
                </div>
            </div>

            <!-- Reveal Section -->
            <div class="content-section">
                <h3 class="section-title">Reveal: What's Really Happening</h3>
                <div class="section-content">
                    ${formatContent(content.reveal)}
                </div>
            </div>

            <!-- Cost Section -->
            <div class="content-section">
                <h3 class="section-title">Cost: What This Is Already Taking From You</h3>
                <div class="section-content">
                    ${formatContent(content.cost)}
                </div>
            </div>

            <!-- Possibility Section -->
            <div class="content-section">
                <h3 class="section-title">Possibility: What Life Could Look Like</h3>
                <div class="section-content">
                    ${formatContent(content.possibility)}
                </div>
            </div>

            <!-- Reflection Section -->
            <div class="content-section">
                <h3 class="section-title">Reflection: Where Is This Showing Up For You?</h3>
                <div class="section-content">
                    ${formatContent(content.reflection)}
                </div>
            </div>

            <!-- Understanding Section -->
            <div class="content-section">
                <h3 class="section-title">Understanding Your Result</h3>
                <div class="section-content">
                    ${formatContent(description.fullDescription)}
                </div>
            </div>

            <!-- Solution Section -->
            <div class="content-section">
                <h3 class="section-title">Solution: How You Can Breakfree</h3>
                <div class="section-content">
                    ${formatContent(content.solution)}
                </div>
            </div>

            <!-- Your Move Section -->
            <div class="content-section">
                <h3 class="section-title">Your Move: What's Next</h3>
                <div class="section-content">
                    ${formatContent(content.yourmove)}
                </div>
            </div>

            <!-- CTA Section -->
            <div class="cta-section">
                <h3 style="font-size: 28px; margin-bottom: 15px;">What has ${description.title.toLowerCase()} already taken from you 
                <br/> when is now a good time to claim it all back?</h3>
                
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