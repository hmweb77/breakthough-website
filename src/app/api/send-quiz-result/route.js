// Updated route.js with dynamic email subject
import { NextResponse } from 'next/server';

// Add contact to Brevo list
async function addContactToBrevo(email, result) {
  const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      email: email,
      attributes: {
        QUIZ_RESULT: result.description.title,
        RESULT: result.description.title, 
        COMPLETED_DATE: new Date().toISOString(),
      },
      listIds: [parseInt(process.env.BREVO_LIST_ID)],
      updateEnabled: true,
    }),
  });

  if (!brevoResponse.ok && brevoResponse.status !== 400) {
    const errorData = await brevoResponse.json();
    console.error('Brevo contact creation error:', errorData);
  }
}

// Send notification to admin
async function sendAdminNotification(userEmail, result) {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set in environment variables');
    return;
  }

  const adminHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quiz Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #68A1A7; color: white; padding: 30px; text-align: center; border-radius: 10px;">
            <h1 style="margin: 0;">🎯 New Quiz Submission</h1>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 30px; margin-top: 20px; border-radius: 10px;">
            <h2 style="color: #68A1A7; margin-top: 0;">Submission Details</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0; font-size: 14px; color: #666;">Email Address:</p>
                <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #333;">${userEmail}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                <p style="margin: 0; font-size: 14px; color: #666;">Quiz Result:</p>
                <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #68A1A7;">${result.description.title}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #666;">Submission Date:</p>
                <p style="margin: 5px 0 0 0; font-size: 16px; color: #333;">${new Date().toLocaleString()}</p>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <h3 style="color: #68A1A7; margin-top: 0;">Result Summary</h3>
            <p style="color: #666; margin: 0;">${result.description.shortDescription}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px; margin: 0;">
                This is an automated notification from your Breakthrough Methods quiz.
            </p>
        </div>
    </body>
    </html>
  `;

  const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: 'Quiz Notification System',
        email: process.env.SENDER_EMAIL,
      },
      to: [
        {
          email: adminEmail,
          name: 'Admin',
        },
      ],
      subject: `New Quiz Submission: ${result.description.title} - ${userEmail}`,
      htmlContent: adminHtmlContent,
    }),
  });

  if (!brevoResponse.ok) {
    const errorData = await brevoResponse.json();
    console.error('Admin notification error:', errorData);
  }
}

export async function POST(request) {
  try {
    const { email, result } = await request.json();

    if (!email || !result) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Add contact to Brevo list
    await addContactToBrevo(email, result);

    // 2. Send quiz results to user
    const htmlContent = generateEmailHTML(result);
    const emailSubject = getEmailSubject(result);

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

    // 3. Send notification to admin
    await sendAdminNotification(email, result);

    return NextResponse.json(
      { message: 'Email sent successfully and contact added' },
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
    "People-Pleasing": "[Your Quiz Results]: It’s not kindness. It’s self-abandonment.",
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
      emailSubject: "[Your Quiz Results]: Fearless on the outside. Fearful on the inside.",
  
      mirror: `You’re the one people count on. Clear. Strategic. Relentless.
                But when it’s your own next move - the promotion, the keynote, launching the bold offer, or finally allowing yourself to be fully seen - something shifts.
                All of a sudden you tell yourself you’re “waiting for clarity” or “the right time”. 
                So you take one last course. You open one more research tab. You edit one more draft.
                Yet behind the busy, your days look more like this:
              -  **Weeks of exhausting overthinking** -  spiraling in mental loops until decision fatigue drains your energy and momentum grinds to a halt.
              -  **Over-preparing every presentation and post** - rewriting again and again until the moment slips away and someone else seizes the opportunity.
              -  **Over-controlling every detail** - believing nothing will work unless you control it all, leaving you overextended, overwhelmed, and blocking your team from growing into their potential.
              -  **Crowdsourcing clarity** - chasing advice and opinions until you’re paralyzed by contradictions and competing perspectives.
              -  **Holding back bold moves** - telling yourself you’re “not ready,” while less qualified people step forward and take the stage meant for you.
              **On the outside**: polished and in control.
              **On the inside**: anxious, depleted and frustrated that people with half your talent, skill and experience are succeeding more than you. `,
      reveal: `You might think you just need more clarity, more time, more skill or just one more credential.
      **But what’s really happening is fear, disguised as productivity.**
      At some point, your system decided that going after what you really want wasn’t safe. So it built a protective armor of control, research, and endless preparation - custom-built to keep you “safe”. But instead of protecting, it weighs you down. 
      It disguises delay as progress, keeping you stuck in motion without any real movement.
      What once felt like safety has become heavy armor - restricting your freedom, your momentum, your potential. 
      And the more successful you became, the more sophisticated the disguise: overthinking dressed up as strategy, over-planning masquerading as excellence, over-controlling posing as leadership.
      `,
      cost: `Here’s the truth: every time you stall, fear is leading - and the cost is mounting.
     - Weeks of exhausting overthinking spiral into decision fatigue - draining your energy and grinding your momentum to a halt while opportunities pass by.
 - Over-preparing every presentation and post means the moment slips away - and someone else seizes the opportunity that was meant for you.
- Over-controlling every detail leaves you overextended and overwhelmed - while your team’s growth stalls, their potential is blocked by your need for control.
- Crowdsourcing clarity tangles you in contradictions - paralyzed by competing perspectives instead of moving forward with conviction. 
- Holding back bold moves convinces you you’re “not ready” - while less qualified people step forward and take the stage in your place.    
If nothing changes, fear won’t just cost you valuable time and energy - it will cost you money, credibility, visibility, even more opportunities and the future you’ve already invested so much in creating. `,
      possibility: `Now imagine this: when it’s time to decide or act, fear steps aside - and your power, clarity, and potential take the lead.
     - Weeks of exhausting overthinking transforms into clarity - decisions that once took days or weeks now take only minutes.
     - Over-planning gives way to bold action - you trust yourself to course-correct as you go, instead of waiting for the perfect roadmap before making the first step. 
     - Over-preparing turns into a confident self-expression - you publish, present, and pitch your genius without second-guessing yourself.  
     - Over-researching becomes decisive leadership - you gather enough insight to start in the right direction, and trust in the progress of the journey to unfold the path ahead.
     - Over-controlling transforms into trust - you delegate, your team develops, and suddenly, more of what truly matters gets done. 
     **This is what freedom feels like: momentum without hesitation, leadership without doubt, self-expression in its full power - undiluted and undeniable.**`,
      reflection: `Pause for a moment and reflect: **where is fear taking the lead in your life right now?**
                        - Where are you spending weeks in exhausting overthinking - dragging out decisions that could be made in minutes while momentum slips away?
                        - Where are you getting lost in over-planning - waiting for the perfect roadmap before you allow yourself to take the first bold step?
                        - Where are you trapped in over-preparing - rewriting, refining, and second-guessing until the moment passes and someone else steps into the opportunity?
                        - Where are you buried in over-researching - chasing certainty in data instead of trusting progress to reveal the path?
                        - Where are you locked in over-controlling - carrying the weight alone, telling yourself it’s “faster” if you do it, while your team’s growth stalls and their potential stays untapped?
                        Feel it now, as you recognize yourself in these words: the knot in your stomach, the tightness in your chest, the restless spin in your mind.
                        That’s not you!
                        **That’s fear’s invisible force - leading in the place where your power and potential belong.**`,
      solution: `**The Freedom Method is your breakthrough.**
      It works at the deepest level - dissolving the invisible force of fear in the hidden wiring of your subconscious.
      ** Fear has tricked your system into believing that delay is protection - when in reality, it’s the very cost holding you back.**  That’s why you get caught in hesitation, spirals of overthinking, endless preparation, and the need to control it all - patterns that drain your power and delay your potential.
      Surface-level fixes like affirmations, productivity and time management systems, or ‘thinking positive’ won’t resolve this. If they did, you wouldn’t still be circling the same patterns. 
      The Freedom Method works where the patterns live - deep in your subconscious wiring. It unwinds the false link between control and safety, dissolving fear at its root so progress feels safe, action feels natural, and your true power leads.
      **The transformation: from circling in self-doubt to leading with unshakable self-trust.**
      Freedom means: moving with confidence, speaking with conviction, and leading boldly without second-guessing.
      **With the Freedom Method, you don’t just move forward - you reclaim the clarity, courage, and freedom that have always been yours.**
      `,
      yourmove: `Fear is not who you are - it’s the invisible force that has been leading your choices from the shadows.
      **Every moment you wait, fear wins.**
      **Every opportunity you stall on, fear steals.**
      ** Every time you silence yourself, fear tightens its grip.**
      You already know the cost of fear: the hesitation, the exhaustion, the chances that keep slipping away.
      The question isn’t whether you’re capable - you are.
      The real question is: **how much longer will you let fear lead you?**
      You can keep circling in overthinking and over-preparing - watching others with half your talent step into the roles, stages, and deals meant for you.
      Or you can breakthrough into clarity, courage, visibility, and freedom - the life that has always been yours to claim.
      `,
    },


    "People-Pleasing": {
      emailSubject: "[Your Quiz Results]: It’s not kindness. It’s self-abandonment.",
  
      mirror: `You’re the one people count on. Reliable. Generous. Steady.
      But when it comes to yourself, something shifts.
      You say yes when you want to say no.
      You take on commitments that drain you - then quietly resent the very people you were trying to please.
      You hold back your truth to “keep the peace” - leaving you feeling unheard, unseen and at war with yourself.
      You give so much to others that your own needs are continuously neglected. 
      **On the outside**: dependable, easy-going and kind.
      **On the inside**: stretched thin, resentful, irrelevant and disconnected from yourself. `,
      reveal: `You might think you’re just “being nice.”
      **But what’s really happening is self-protection, with self-abandonment as the cost.**
      Somewhere along the way, your system miswired approval from others to mean belonging. 
      You learned that love and safety came from accommodating and appeasing others. 
      So people-pleasing became a protection strategy.
      But what once kept you safe is now stealing your life.
      Every yes you don’t mean, every truth you swallow, every silence you keep to avoid conflict - erases a piece of you.
      `,
      cost: `Here’s the truth: every time you people-please, you silence your truth for temporary approval - and the cost is mounting.
      - Saying yes when you mean no drains your energy until exhaustion leaves you running on empty.
      - Holding back your voice to avoid conflict silences you when it matters most.
      - Swallowing your truth poisons your relationships - resentment grows, connection fades.
      - Over-giving leaves you depleted, while others never learn to stand on their own.
      - Carrying everyone else’s needs first pushes your own dreams to “someday” - a someday that never comes.
      - Depending on approval for belonging traps you in performance - chasing love instead of receiving it for who you really are.
      If nothing changes, people-pleasing doesn’t just keep you stuck - it erases you.
      Your voice unheard.
      Your needs unmet.
      Your life shaped around everyone but you.`,
      possibility: `Now imagine this: whenever it’s time to speak or choose, the need for approval steps aside - and your truth and authenticity take the lead.
      Saying yes when you want to say no transforms into honoring your boundaries - you say yes only when you mean it, and no without giving into the pressure or guilt. 
      Holding back your voice to avoid conflict transforms into speaking your truth with confidence - especially when it matters most.
      Keeping silent while resentment builds transforms into sharing openly - deepening connection through honesty instead of eroding it.
      Giving more than you have transforms into giving from fullness - your support uplifts others without draining you.
      Postponing your needs and dreams transforms into prioritizing them now - no longer waiting for “someday” to finally live your life.
      Chasing approval transforms into self-acceptance - belonging rooted in who you are, not in the performance of who others want you to be.
      This is what freedom feels like: authenticity without apology, connection without compromise, belonging without self-abandonment.
      `,
      reflection: `Pause and reflect for a moment. **Where is people-pleasing taking the lead in your life right now?**
      Where are you saying yes when you want to say no - pushing past your limits just to keep others happy?
      Where are you holding back your voice - swallowing your truth to avoid conflict, even when it matters most?
      Where are you keeping silent while resentment builds - watching connection fade instead of deepening through honesty?
      Where are you giving more than you have - supporting others at the expense of your own well-being?
      Where are you postponing your needs and dreams - telling yourself you’ll get to them “someday” that never comes?
      Where are you chasing approval - performing for acceptance instead of resting in who you really are?
      Feel it now as you recognize yourself in these words: the heaviness in your chest, the tightness in your throat, the quiet exhaustion in your body.
      That’s not you.
      **That’s the invisible force of people-pleasing, still leading where your truth and authenticity are meant to.**`,
      solution: `The **Parts Integration Method** is your breakthrough.
      It works at the deepest level - dissolving the invisible force of people-pleasing in the hidden wiring of your subconscious.   
      People-pleasing has tricked your system into believing that approval equals belonging - when in reality, every yes you don’t mean, every silence you keep, every self-abandonment is the very cost stealing your freedom.
      Surface-level fixes like boundary scripts, self-care routines, affirmations or “just be more confident” won’t resolve this. If they did, you wouldn’t still be caught in the same cycle.
      The Parts Integration Method works where the patterns live - deep in your subconscious wiring. It transforms the false link between approval and safety, dissolving self-abandonment at its root so authenticity feels safe, boundaries feel natural, and your truth leads.
      **The transformation: from abandoning yourself for others to honoring yourself in alignment.**
      Freedom means: saying no without guilt, speaking your truth with confidence, giving from fullness without resentment, and belonging without performance.
      **With the Parts Integration Method, you don’t just set boundaries - you reclaim your voice, your energy, and yourself.**
      `,
      yourmove: `People-pleasing is not who you are -  it’s the invisible force that has been leading your choices from the shadows.
      **Every yes you don’t mean, people-pleasing wins.**
      **Every silence you keep, people-pleasing steals.**
      **Every moment you abandon yourself, people-pleasing tightens its grip.**
      You already know the cost of people-pleasing: the exhaustion, the resentment, the voice you’ve swallowed, the dreams you’ve delayed.
      The question isn’t whether you’re worthy - you are.
      The real question is: **how much longer will you let people-pleasing lead you?**
      You can keep saying yes when you mean no - watching your truth, your needs, and your dreams slip further away. 
      Or you can breakthrough into authenticity, alignment, self-respect, and true belonging - the life that has always been yours to claim.
      `,

    },
    "Perfectionism": {
      emailSubject: "[Your Quiz Results]: Authenticity sets you free. Perfection keeps you stuck.",
      mirror: `From the outside, you’re a reliable achiever. High standards. Impeccable delivery. Excellence is your norm. 
      But behind the image, perfectionism is in charge. 
      You delay starting because you never feel “ready.”
      You over-deliver, over-prepare, and push past your limits - burning out instead of ever really finishing.
      You rewrite and refine endlessly, yet nothing ever feels good enough.
      No matter what you achieve, you never feel like you - or your work - are truly enough.
      **On the outside**: disciplined and a high achiever. 
      **On the inside**: restless, drained, and trapped in an endless cycle of perfecting and proving yourself.`,
      reveal: `You believe you’re simply diligent, ambitious, and detail-oriented - with very high standards.
      **But what’s really happening is perfectionism - with self-sabotage as the cost.**
      Somewhere along the way, your system equated “getting it right” with safety.
      Perfectionism whispers: “If I get it flawless, I’ll finally be worthy. I’ll finally be safe.”
      Yet no outward achievement or ever moving milestone ever quiets that nagging voice within.
      What starts as excellence, ends as self-sabotage - the endless chase that robs you of ease, rest, fulfillment and satisfaction. 
      `,
      cost: `Here’s the truth: every time you chase “perfect,” you let the need to prove yourself lead - and your authenticity and self-expression pay the price.
     - Delaying until you feel “ready” keeps your best ideas stuck in draft mode - meanwhile others with half the talent and experience as you are winning.  
     - Over-delivering feels generous in the moment, but it drains your energy, erodes your profits, and leaves you burned out with little to show for it.
     - Endless refining steals your time and momentum - while opportunities slip by as you’re busy ‘perfecting’.
     - Achievements feel hollow because the concept of enoughness slips away the second you touch anything. 
     - Rest and relaxation never feels like rest and relaxation because the work is never done. Your mind keeps running and the unfinished work hums in the background even when your body stops.
     - Measuring yourself against impossible standards guarantees you’ll never feel enough -  no matter how much you do or achieve.
     If nothing changes, perfectionism doesn’t just slow you down - it costs you money, visibility, credibility, and impact. It burns you out while the fulfillment you long for stays out of reach.
      `,
      possibility: `Now imagine this: whenever it’s time to create, share, or decide, perfectionism steps aside - and your authenticity and self-expression take the lead.
- Delaying until you feel “ready” transforms into starting - your best ideas finally move from draft mode into the world, creating real traction and results.
- Over-delivering past your limits transforms into delivering with excellence and boundaries - protecting your energy, sustaining your profits, and multiplying your impact.
- Endless refining transforms into finishing, sharing, and moving forward - momentum builds and opportunities open up because your work is out there, not hidden.
- Hollow achievements transform into meaningful milestones - because “enough” is no longer slipping away, it’s anchored within you.
- Restless downtime transforms into true rest and relaxation - your body and mind fully recharge, fueling creativity and clarity.
- Measuring yourself against impossible standards transforms into alignment - ease, fulfillment, and confidence become your new baseline.
      This is what freedom feels like: ease instead of exhaustion, visibility instead of hiding, impact without burning yourself out.
      `,
      reflection: `Pause for a moment and reflect. **Where is perfectionism taking the lead in your life right now?**
      - Where are you delaying projects, launches, or pitches because you don’t feel “ready”?
      - Where are you pushing past your limits and boundaries just to prove yourself?
      - Where are you stuck in endless drafts - chasing “perfect” that never arrives?
      - Where are you brushing off wins because you only see the flaws?
      - Where are you running yourself into the ground because you won’t allow rest?
      - Where are you chasing success against moving goalposts - always achieving, never arriving?
      Feel it now as you recognize yourself in these words: the pressure in your chest, the restless loop in your mind, the weight of working so hard yet never feeling enough.
      That’s not you.
      That’s perfectionism - taking the lead where your authenticity and freedom are meant to.`,
      solution: `The **Freedom Method** is your breakthrough.
      It works at the deepest level - dissolving the invisible force of perfectionism in the hidden wiring of your subconscious.
      Perfectionism has tricked your system into believing that flawless equals safe - when in reality, it’s the very trap stealing your momentum, your energy, and your impact.
      Surface-level fixes like productivity hacks, time management tools, affirmations or “just lower your standards” won’t resolve this. If they did, you wouldn’t still be caught in the same cycle.
      The Freedom Method works where the patterns live -  deep in your subconscious wiring. It dissolves the false link between flawlessness and safety, dissolving perfectionism at its root so action feels natural, progress feels safe, and authenticity leads.
      **The transformation: from self-criticism to self-acceptance.**
      Freedom means: starting before you feel ready, finishing without endless refinement, delivering with excellence not exhaustion, resting without guilt, and finally experiencing “enough” as your baseline.
      **With the Freedom Method, you don’t just move forward - you reclaim your energy, your authenticity and the full impact you’re here to create.** 
      `,
      yourmove: `Perfectionism is not who you are - it’s the invisible force that has been leading your choices from the shadows.
      **Every delay, perfectionism wins.**
      **Every hour of over-delivering, perfectionism steals your time.**
      **Every endless draft and revision, perfectionism tightens its grip.**
      You already know the cost: the burnout, the lost time, the missed opportunities, the fulfillment you’ve postponed.
      The question isn’t whether you’re capable - you are.
      The real question is: **how much longer will you let perfectionism lead you?**
      You can keep running on the treadmill of “not enough” - burning out while your best work stays hidden.
      Or you can breakthrough - into authenticity, ease, visibility, and lasting impact.
      .`,

    },
    "Inner Conflict": {
      emailSubject: "[Your Quiz Results]: It’s not confusion. It's inner conflict.",
      mirror: `On the outside, you look capable and decisive. People admire how well you juggle responsibilities and commitments. 
      But inside, you feel fragmented - like parts of you are being pulled in two opposing directions.
      One part of you commits - another second-guesses the decision. 
      One part of you starts strong - another slams the brakes.
      One part of you longs for change - another clings to the familiar. 
      **On the outside**: responsible and steady.
      **On the inside**: stuck in limbo, conflicted and riddled with self-doubt. `,
      reveal: `You might think you just need more clarity, more time, or more information to move forward. 
      **But what’s really happening is inner conflict - with self-fragmentation as the cost.**
      Different parts of you are working against each other, each convinced it knows what is best for you. 
      Until they come into alignment, they pull in opposite directions - creating an inner tug-of-war that drains your energy, erodes your confidence, and stalls your progress.
      What looks like confusion is really conflict - an invisible force keeping you divided inside, instead of aligned and whole, and moving in one aligned direction. 
      `,
      cost: `Here’s the truth: every time you work against yourself - instead of with yourself - you create confusion, fuel frustration, and hold yourself back.
     - Endless stop-start cycles waste valuable time and energy.
     - Decisions drag out, leaving you stuck in limbo.
     - Opportunities pass you by while you wrestle with yourself.
     - Projects stall, no matter how much effort you put in.
     - The harder you push, the more resistance builds inside.
     - Frustration grows heavier over time, eroding your trust in yourself.
      If nothing changes, inner conflict doesn’t just keep you stuck - it costs you clarity, momentum, opportunities, and the trust you need to move forward with confidence.
      `,
      possibility: `Now imagine this: whenever it’s time to decide or act, inner conflict dissolves - and clarity and alignment take the lead.
- Endless stop-start cycles transform into steady progress - your energy fuels forward motion instead of stalling.
- Dragging out decisions transforms into clarity - choices feel light, clear, and aligned.
- Missed opportunities transform into momentum - you act on them with confidence instead of hesitation.
- Stalled projects transform into completion - all parts of you moving in the same direction.
- Internal resistance transforms into trust - you stop battling yourself and begin backing yourself fully.
- Frustration transforms into inner peace - your energy is free for creating, leading, and living.
This is what freedom feels like: clarity without confusion, momentum without resistance, and progress without fragmentation.
`,
      reflection: `Pause for a moment and reflect. **Where is inner conflict taking the lead in your life right now?** 
      - Where are you avoiding a decision because different parts of you want opposite outcomes?
      - Where are you starting strong, only to stall halfway through?
      - Where are you chasing a goal while hesitating on the very steps that would get you there?
      - Where are you saying you want change, but clinging to the familiar?
      - Where are you wasting time and energy endlessly debating with yourself instead of moving forward?
      Feel it now as you recognize yourself in these words: the pressure in your chest, the mental tug-of-war, the fatigue of wrestling with yourself.  
      That’s not you.
      **That’s inner conflict - taking the lead where your clarity and alignment are meant to.**
      `,
      solution: `The **Parts Integration Method** is your breakthrough.
      It works at the deepest level - dissolving the invisible force of inner conflict in the hidden wiring of your subconscious.
      Inner conflict has tricked your system into believing that division is protection - when in reality, it’s the very trap keeping you stuck. That’s why you keep stalling, second-guessing, and circling the same decisions.
      Surface-level fixes like pro/con lists, waiting for “more clarity,” affirmations or pushing harder won’t resolve this. If they did, you wouldn’t still feel pulled in two directions.
      The Parts Integration Method works where the conflict lives -  deep in your subconscious wiring. It unites the parts of you that pull in opposite directions, dissolving fragmentation at its root so decisions feel natural, momentum builds, and progress flows.
      **The transformation: from self-division to self-alignment.**
      Freedom means: energy fueling progress, decisions made with clarity, momentum building naturally, and full self-trust guiding your actions.
      **With the Parts Integration Method, you don’t just move forward - you reclaim your clarity, your confidence, and your inner peace.**
      `,
      yourmove: `Inner conflict is not who you are - it’s the invisible force that has been leading your choices from the shadows.
      **Every stalled decision, inner conflict wins.**
      **Every start-and-stop cycle, inner conflict steals.**
      **Every opportunity you hesitate on, inner conflict tightens its grip.**
      You already know the cost: the wasted time, the missed chances, the constant frustration, the trust in yourself that’s slipping away.
      The question isn’t whether you’re capable - you are.
      The real question is: **how much longer will you let inner conflict lead you?**
      You can keep wrestling with yourself - stuck in limbo while your energy, clarity, and opportunities drain away.
      Or you can breakthrough - into clarity, alignment, momentum, and self-trust that lasts.
      `,

    },
    "Guilt & Shame": {
      emailSubject: "[Your Quiz Results]: Freedom begins where guilt and shame end.",
      mirror: `You’ve always been the strong one. Responsible. Dependable. Carrying more than your share. 
      But underneath that strength lives a weight you can’t seem to put down.
      You downplay your ambitions so you don’t stand out or “make others uncomfortable.”
      You hide your achievements at work to avoid judgment, jealousy, or being seen as “too much.”
      You over-give and over-commit, yet carving out time or energy for yourself feels selfish and wrong. 
      You hesitate to put yourself forward for opportunities - concerned that others will think you’re being greedy or undeserving.
      The idea of freedom feels almost indulgent - even though it’s what you long for the most.
      **On the outside**: respected, reliable, considerate.
      **On the inside**: weighed down, resentful, and holding yourself back to avoid judgement. `,
      reveal: `You might think you’re just being humble, helpful, or modest. 
      But what’s really happening is guilt and shame - leading your choices and dimming your potential.
      Somewhere along the way - through family, culture, or religion - your system was wired to equate success, desire, and accomplishment with danger.
      So playing smaller than you’re capable of became your protection strategy.
      What begins as humility or generosity ends as self-neglect - the quiet abandonment of your own growth, leadership, and fulfillment.
      `,
      cost: `Here’s the truth: every time guilt and shame take the lead, you shut down your desires, dim your achievements, and hold yourself back before growth can even truly begin.
      - Your ambitions are suppressed before they ever take form.
      - You hide your success, keeping yourself unseen, underpriced and undervalued.
      - You give and do for others until you’re drained - always putting yourself last. 
      - You hold back your voice, worried about judgment or disapproval.
      - You stay in the supporting role while others step forward into leadership  opportunities you’re equally - or more - qualified for.
      The longer this cycle continues, the heavier the resentment grows, eroding your self-trust and self-worth.
      If nothing changes, guilt and shame don’t just weigh you down - they cost you visibility, opportunities, and the full expression of the life you’re meant to live.
      `,
      possibility: `Now imagine this: whenever guilt and shame step aside, freedom and expansion take the lead.
     - Downplaying your ambitions transforms into pursuing them boldly - without apology.
     - Hiding your success transforms into celebrating it openly - with pride, not fear of judgment.
     - Over-giving out of obligation transforms into giving by choice - allowing you to support others without depleting yourself.
     - Hesitating to step forward transforms into confidently claiming the roles, stages, and opportunities that are yours.
     - Postponing your own needs transforms into prioritizing them fully - because choosing yourself is no longer selfish, it’s essential. 
      This is what freedom feels like: self-expression without guilt, success without shame, and life expanded without limits.
      `,
      reflection: `Pause for a moment and reflect.  **Where is guilt & shame taking the lead in your life right now?**
     - Where are you downplaying an ambition before it even takes form?
     - Where are you hiding achievements to avoid judgment or envy?
     - Where are you afraid to take up space at work or in your relationships?
     - Where are you giving endlessly while your own needs stay at the bottom of the list?
     - Where are you postponing something you love because choosing yourself feels selfish?
      Feel it now as you recognize yourself in these words: the heaviness in your body, the knot of resentment, the dimming of your own voice, the shrinking of your being.
      That’s not you.
      That’s the invisible force of guilt and shame - still leading where your freedom is meant to.`,
      solution: `The **Freedom Method** is your breakthrough.
      It works at the deepest level - dissolving the invisible force of guilt and shame in the hidden wiring of your subconscious.
      Guilt and shame have tricked your system into believing that choosing yourself is selfish - when in reality, it’s the very cost that keeps you small, unseen, and unfulfilled. 
      Surface-level fixes like affirmations, practicing boundary scripts, or “just be proud of yourself” won’t resolve this. If they did, you wouldn’t still be stuck in the same cycle.
      The Freedom Method works where the patterns live - deep in your subconscious wiring. It dissolves the false link between desire and danger, success and shame, so self-prioritization feels safe, natural, and true.
      **The transformation: from self-neglect to self-prioritization.**
      Freedom means: claiming your desires openly, celebrating your success proudly, giving from choice not obligation, and taking up space unapologetically.
      **With the Freedom Method, you don’t just move forward - you reclaim your freedom, your voice, and the full expansion of who you are.**
      `,
      yourmove: `Guilt and shame are not who you are - they’re the invisible forces that have been leading your choices from the shadows.
      **Every ambition you suppress, guilt and shame win.**
      **Every success you hide, guilt and shame steal.**
      **Every opportunity you hold back from, guilt and shame tighten their grip.**
      You already know the cost: the exhaustion, the resentment, the invisibility, the life you’ve postponed.
      The question isn’t whether you’re worthy - you are.
      The real question is: **how much longer will you let guilt and shame lead you?**
      You can keep dimming your light - shaping your life around everyone but you. 
      Or you can breakthrough - into freedom, expansion, self-expression, and the life that has always been yours to claim.
      `,
    },
    "Conditioning": {
      emailSubject: "[Your Quiz Results]: Free on the outside. Conditioned on the inside.",
      mirror: `You’ve done everything “right.”
      The career path. The achievements. The reputation.
      But when it comes to what you really want - the bold move, the authentic choice, the life or business fully aligned with you - something shifts.
      You tell yourself you’re being “practical,” “realistic,” or “responsible.”
      You choose what you should do instead of what you want to do.
      You silence your truth to keep the peace, to maintain stability, to stay accepted.
      Security has turned into stagnation.
      Yet behind the appearance of success, your days look more like this:
     - Following the path handed to you, even though it doesn’t light you up.
     - Saying yes when you want to say no, just to avoid conflict or judgment.
     - Staying in roles, relationships, or routines because they’re “safe,” even when they feel lifeless.
     - Choosing security over fulfillment - telling yourself you’ll make the leap “later.”
     - Achieving goals that look impressive, yet leave you strangely empty.
     - Measuring yourself by external approval while ignoring the quiet voice inside.
      **On the outside**: accomplished and reliable.
      **On the inside**: restless, disconnected, and unfulfilled.`,
      reveal: `You might think you’re being steady, grounded, or smart.
      But what’s really happening is **conditioning - dressed up as safety.**
      At some point, you were handed a script for how to live, lead, and succeed: follow the rules, do what’s expected, stay inside the lines.
      It kept you safe. It helped you belong.
      Now the very script that once protected you has become a cage.
      Conditioning disguises compliance as stability - even as it disconnects you from yourself.
      `,
      cost: `Here’s the truth: every time conditioning leads, you trade your freedom for compliance - and your authenticity pays the price.
     - You live for expectations, not desires.
     - You achieve what looks good, but feels hollow.
     - You silence your voice until it’s barely a whisper.
     - You follow the map society gave you while your own path goes unexplored.
     - You run life on autopilot, mistaking survival and safety for success. 
      If nothing changes, the cost compounds:
      The more you achieve, the emptier it feels.
      The longer you comply, the further you drift from yourself.
      Stability turns into stagnation. Security turns into numbness.`,
      possibility: `Now imagine this: whenever it’s time to choose or act, conditioning steps aside - and your authenticity and sovereignty take the lead.
     - Living for expectations transforms into living from desire - your choices reflect what’s true for you.
     - Achievements that feel hollow transform into meaningful success - aligned, energizing, alive.
     - Silenced truth transforms into clear expression - your voice is steady, honest, and heard.
     - Following someone else’s map transforms into creating your own path - direction that fits you.
     - Autopilot survival transforms into sovereign freedom - presence, purpose, and joy in motion.
      This is what freedom feels like: expression without suppression, fulfillment without compromise, leadership without masks.
      `,
      reflection: `Pause for a moment and reflect.  **Where is conditioning taking the lead in your life right now?**
    -  Where are you saying yes when you want to say no - just to keep the peace?
    -  Where are you following rules or roles that feel expected, not true?
    -  Where are you choosing “safe” options that leave you empty instead of alive?
    -  Where are you living for approval - chasing validation instead of following desire?
    -  Where are you hitting goals that look impressive outside but feel hollow inside?
      Feel it now as you recognize yourself in these words: the heaviness in your chest, the knot in your stomach, the shallow breath.
      That’s not you.
      **That’s conditioning’s invisible force - leading where your freedom was meant to.**`,
      solution: `The **Freedom Method** is your breakthrough.
      It works at the deepest level - dissolving the invisible force of conditioning in the hidden wiring of your subconscious.
      Conditioning has tricked your system into believing that compliance equals safety - when in reality, it’s the very trap keeping you small, numb, and misaligned.
      Surface-level fixes like pep talks, productivity tweaks, affirmations, or “just be yourself” mantras won’t resolve this. If they did, you wouldn’t still feel bound to the script.
      The Freedom Method works where the patterns live - deep in your subconscious wiring.
      It unwinds the false link between approval and safety, dissolving conditioning at its root so choosing yourself feels safe, alignment feels natural, and your truth leads.
      **The transformation: from self-protection to self-leadership.**
      **Freedom means**: saying yes when you mean yes and no when you mean no; creating your path instead of following someone else’s; making steady, clear decisions that reflect your truth.
      With the Freedom Method, you don’t just move forward - you reclaim your sovereignty, your aliveness, and the life that is truly yours
      `,
      yourmove: `Conditioning is not who you are - it’s the invisible force that has been leading your choices from the shadows.
      Every time you choose the script over yourself, conditioning wins.
      Every truth you silence, conditioning steals.
      Every “later” you promise yourself, conditioning tightens its grip.
      You already know the cost: the emptiness, the numbness, the disconnect from who you really are.
      The question isn’t whether you’re capable - you are.
      The real question is: **how much longer will you let conditioning lead you?**
      You can keep complying- living a life that looks right and feels wrong.
      **Or you can breakthrough - into authenticity, sovereignty, and freedom.**
      .`,

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
        
          .logo-placeholder {
              width: 700px;
              height: 300px;
              margin: 10px auto;
              display: flex;
              align-items: center;
              justify-content: center;
              background: transparent;
          }
          
          .logo-placeholder img {
              max-width: 100%;
              height: auto;
              display: block;
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
              top: 0;
              font-size: 18px;
              line-height: 1.6;
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
              background: #68A1A7;
              color: white;
              padding: 40px 30px;
              text-align: center;
           
          }
          .cta-button {
              display: inline-block;
              background: #ffffff;
              color: #8b1c2d!important;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
              font-size: 18px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.2);
              transition: all 0.3s ease;
              margin: 0;
          }
          .footer {
              text-align: center;
              padding: 30px;
              background: #68A1A7;
              color: white;
          }
          .footer p {
             
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
                  padding: 10px;
              }
              .result-title {
                  font-size: 24px;
              }
              .section-content {
                  padding: 15px;
              }
              .logo-placeholder {
                  width: 80%;
                  max-width: 300px;
                  height: auto;
                  min-height: 80px;
              
                  background: transparent;
                
              }
              .logo-placeholder img {
                  max-width: 100%;
                  height: auto;
                  min-height: 60px;
                  object-fit: contain;
              }
              .cta-button {
                  padding: 18px 25px;
                  color:#8b1c2d;
                  font-size: 16px;
                  display: block;
                  margin: 20px auto 0 auto;
                  max-width: 90%;
                  text-align: center;
              }
              .cta-section h3 {
                  font-size: 22px !important;
                  line-height: 1.3;
                  margin-bottom: 25px !important;
              }
          }
      </style>
  </head>
  <body>
      <div class="email-container">
   <!-- Logo Placeholder -->
              <div class="logo-placeholder">
                <img src="https://breakthough-website.vercel.app/logoV1.png" alt="Logo" />
              </div>
          <!-- Result Card -->
          <div class="result-card">
              <h2 class="result-title">Your Invisible Force: ${description.title}</h2>          
          </div>
          <!-- Mirror Section -->
          <div class="content-section">
              <h3 class="section-title">The Double Life You're Living </h3>
              <div class="section-content">
                  ${formatContent(content.mirror)}
              </div>
          </div>
          <!-- Reveal Section -->
          <div class="content-section">
              <h3 class="section-title">The Invisible Force Behind It All</h3>
              <div class="section-content">
                  ${formatContent(content.reveal)}
              </div>
          </div>
          <!-- Cost Section -->
          <div class="content-section">
              <h3 class="section-title">The Real Price You're Already Paying</h3>
              <div class="section-content">
                  ${formatContent(content.cost)}
              </div>
          </div>
          <!-- Possibility Section -->
          <div class="content-section">
              <h3 class="section-title">The Freedom Waiting for You on the Other Side </h3>
              <div class="section-content">
                  ${formatContent(content.possibility)}
              </div>
          </div>

          <!-- Reflection Section -->
          <div class="content-section">
              <h3 class="section-title">The Grip It has on You Right Now</h3>
              <div class="section-content">
                  ${formatContent(content.reflection)}
              </div>
          </div>

        

          <!-- Solution Section -->
          <div class="content-section">
              <h3 class="section-title">The Breakthrough Method that Sets You Free</h3>
              <div class="section-content">
                  ${formatContent(content.solution)}
              </div>
          </div>

          <!-- Your Move Section -->
          <div class="content-section">
              <h3 class="section-title">The Choice in Front of You</h3>
              <div class="section-content">
                  ${formatContent(content.yourmove)}
              </div>
          </div>

          <!-- CTA Section -->
          <div class="cta-section">
              <h3 style="font-size: 28px; margin-bottom: 15px;">What has ${description.title.toLowerCase()} already taken from you?
              <br/>When is now a good time to claim it all back?</h3>
              
              <a href="https://tidycal.com/breakthroughmethods/breakthrough-session" class="cta-button">Book Your Breakthrough Session to begin your reclamation</a>
          </div>

          <!-- Footer -->
          <div class="footer">
              <p style=" opacity: 0.6;">
                  © 2025 Breakthrough Methods. All rights reserved.<br>
                  <a href="#" style="color: #000000;">Unsubscribe</a> | 
                  <a href="#" style="color: #000000;">Privacy Policy</a>
              </p>
          </div>
      </div>
  </body>
  </html>
  `;
}