// components/quizData.js

export const quizData = {
    questions: [
      {
        id: 1,
        question: "When you're about to take a bold step forward, what usually happens?",
        answers: [
          { text: "I freeze and imagine worst-case scenarios.", force: "Fear" },
          { text: "I worry about what others will think.", force: "People-Pleasing" },
          { text: "I push myself to do it perfectly before I begin.", force: "Perfectionism" },
          { text: "Part of me wants it, another part holds back.", force: "Inner Conflict" },
          { text: "I feel guilty for even wanting it.", force: "Guilt & Shame" },
          { text: "I default to what's expected, even if it doesn't feel right.", force: "Conditioning" }
        ]
      },
      {
        id: 2,
        question: "Which statement feels most true for you?",
        answers: [
          { text: "I play small because it feels safer.", force: "Fear" },
          { text: "I bend over backwards to keep others happy.", force: "People-Pleasing" },
          { text: "I work hard but never feel \"enough.\"", force: "Perfectionism" },
          { text: "I keep sabotaging myself with indecision.", force: "Inner Conflict" },
          { text: "I sacrifice myself and then feel resentful.", force: "Guilt & Shame" },
          { text: "I follow the rules even when they don't fit me.", force: "Conditioning" }
        ]
      },
      {
        id: 3,
        question: "What frustrates you the most right now?",
        answers: [
          { text: "Fear of failing.", force: "Fear" },
          { text: "Carrying the weight of others' expectations.", force: "People-Pleasing" },
          { text: "Burnout from proving myself.", force: "Perfectionism" },
          { text: "Starting and stopping without momentum.", force: "Inner Conflict" },
          { text: "Feeling guilty for wanting more.", force: "Guilt & Shame" },
          { text: "Living a life that doesn't even feel like mine.", force: "Conditioning" }
        ]
      },
      {
        id: 4,
        question: "How do you usually handle success or recognition?",
        answers: [
          { text: "I downplay it and think it won't last.", force: "Fear" },
          { text: "I wonder if I've disappointed someone else in the process.", force: "People-Pleasing" },
          { text: "I move the goalpost and aim for the next thing.", force: "Perfectionism" },
          { text: "I argue with myself about whether I really earned it.", force: "Inner Conflict" },
          { text: "I feel selfish enjoying it.", force: "Guilt & Shame" },
          { text: "I tell myself \"don't get too excited, stay practical.\"", force: "Conditioning" }
        ]
      },
      {
        id: 5,
        question: "When making an important decision, what drives you most?",
        answers: [
          { text: "Safety and avoiding mistakes.", force: "Fear" },
          { text: "Keeping others comfortable.", force: "People-Pleasing" },
          { text: "Doing it the \"right\" way.", force: "Perfectionism" },
          { text: "Battling between competing inner voices.", force: "Inner Conflict" },
          { text: "Avoiding guilt or criticism.", force: "Guilt & Shame" },
          { text: "Following the path others expect of me.", force: "Conditioning" }
        ]
      },
      {
        id: 6,
        question: "Which of these feels most familiar in your daily life?",
        answers: [
          { text: "Overthinking and second-guessing myself.", force: "Fear" },
          { text: "Saying yes when I want to say no.", force: "People-Pleasing" },
          { text: "Pushing myself until I'm exhausted.", force: "Perfectionism" },
          { text: "Stalling even though I know what I want.", force: "Inner Conflict" },
          { text: "Putting others' needs first, then feeling drained.", force: "Guilt & Shame" },
          { text: "Going through the motions on autopilot.", force: "Conditioning" }
        ]
      },
      {
        id: 7,
        question: "How do you tend to talk to yourself in hard moments?",
        answers: [
          { text: "\"Be careful - this could go wrong.\"", force: "Fear" },
          { text: "\"Don't upset anyone.\"", force: "People-Pleasing" },
          { text: "\"Do better, it's not enough yet.\"", force: "Perfectionism" },
          { text: "\"Why can't I just stick to a decision?\"", force: "Inner Conflict" },
          { text: "\"I shouldn't want this - it's selfish.\"", force: "Guilt & Shame" },
          { text: "\"Just do what you're supposed to do.\"", force: "Conditioning" }
        ]
      },
      {
        id: 8,
        question: "What's the biggest cost you feel from the way things are right now?",
        answers: [
          { text: "Opportunities slip through my fingers.", force: "Fear" },
          { text: "I keep putting others first and losing myself.", force: "People-Pleasing" },
          { text: "I burn out and still don't feel good enough.", force: "Perfectionism" },
          { text: "I waste time stuck in cycles of indecision.", force: "Inner Conflict" },
          { text: "I live with guilt instead of joy.", force: "Guilt & Shame" },
          { text: "I keep living a script that isn't mine.", force: "Conditioning" }
        ]
      },
      {
        id: 9,
        question: "Right now, what kind of freedom would make the biggest difference in your life?",
        answers: [
          { text: "Freedom to take risks without fear.", force: "Fear" },
          { text: "Freedom to be authentic without judgment.", force: "People-Pleasing" },
          { text: "Freedom to feel enough without overworking.", force: "Perfectionism" },
          { text: "Freedom to move forward with clarity.", force: "Inner Conflict" },
          { text: "Freedom to choose myself without guilt.", force: "Guilt & Shame" },
          { text: "Freedom to live life by my own rules.", force: "Conditioning" }
        ]
      },
      {
        id: 10,
        question: "When it comes to living your truth, what feels most challenging right now?",
        answers: [
          { text: "I hold back out of fear of judgment.", force: "Fear" },
          { text: "I change myself to keep others comfortable.", force: "People-Pleasing" },
          { text: "I hide behind achievement instead of honesty.", force: "Perfectionism" },
          { text: "I silence parts of me that don't \"fit.\"", force: "Inner Conflict" },
          { text: "I feel guilty putting my truth before others.", force: "Guilt & Shame" },
          { text: "I follow the truth I was taught, not the one I feel.", force: "Conditioning" }
        ]
      },
      {
        id: 11,
        question: "Which best describes your relationship with your personal power?",
        answers: [
          { text: "I give it away to fear.", force: "Fear" },
          { text: "I give it away to others' expectations.", force: "People-Pleasing" },
          { text: "I try to prove it through achievement.", force: "Perfectionism" },
          { text: "I fight with myself instead of owning it.", force: "Inner Conflict" },
          { text: "I suppress it because it feels selfish.", force: "Guilt & Shame" },
          { text: "I trade it for stability and acceptance.", force: "Conditioning" }
        ]
      }
    ]
  };
  
  export const forceDescriptions = {
    "Fear": {
      title: "Fear",
      shortDescription: "You're being held back by fear of failure, judgment, and uncertainty.",
      fullDescription: "Fear is your dominant invisible force. You often find yourself paralyzed by 'what if' scenarios, playing it safe instead of taking bold steps toward your dreams. This protective mechanism, while keeping you from potential harm, also keeps you from potential breakthroughs and authentic self-expression.",
      color: "from-red-500 to-orange-500",
      emoji: "😰"
    },
    "People-Pleasing": {
      title: "People-Pleasing",
      shortDescription: "You prioritize others' comfort and approval over your own needs and desires.",
      fullDescription: "People-Pleasing is your strongest pattern. You consistently bend over backwards to keep others happy, often at the expense of your own well-being and authentic expression. While your caring nature is beautiful, this pattern can lead to resentment and a loss of your true self.",
      color: "from-pink-500 to-rose-500",
      emoji: "🤗"
    },
    "Perfectionism": {
      title: "Perfectionism",
      shortDescription: "You're driven by impossible standards and never feeling 'enough'.",
      fullDescription: "Perfectionism is your primary invisible force. You set impossibly high standards for yourself and constantly move the goalpost, never allowing yourself to truly celebrate achievements. This relentless pursuit of flawlessness often leads to burnout and a chronic sense of inadequacy.",
      color: "from-purple-500 to-indigo-500",
      emoji: "🎯"
    },
    "Inner Conflict": {
      title: "Inner Conflict",
      shortDescription: "You're caught between competing desires and can't move forward decisively.",
      fullDescription: "Inner Conflict is your dominant pattern. You experience constant internal battles between different parts of yourself, leading to indecision and self-sabotage. This internal war keeps you stuck in cycles of starting and stopping, preventing you from building real momentum in your life.",
      color: "from-yellow-500 to-amber-500",
      emoji: "⚡"
    },
    "Guilt & Shame": {
      title: "Guilt & Shame",
      shortDescription: "You feel guilty for wanting more and selfish for prioritizing yourself.",
      fullDescription: "Guilt & Shame is your strongest invisible force. You consistently sacrifice your own needs and desires, then feel resentful about it. This pattern convinces you that wanting more for yourself is selfish, keeping you trapped in cycles of self-denial and emotional exhaustion.",
      color: "from-green-500 to-teal-500",
      emoji: "💔"
    },
    "Conditioning": {
      title: "Conditioning",
      shortDescription: "You follow the rules and expectations others set, even when they don't fit you.",
      fullDescription: "Conditioning is your primary invisible force. You're living according to scripts written by others - family, society, culture - rather than discovering and following your own truth. This autopilot existence feels safe but ultimately unfulfilling, as you're not living as your authentic self.",
      color: "from-blue-500 to-cyan-500",
      emoji: "🔗"
    }
  };
  
  export const calculateResult = (answers) => {
    const forces = {
      "Fear": 0,
      "People-Pleasing": 0,
      "Perfectionism": 0,
      "Inner Conflict": 0,
      "Guilt & Shame": 0,
      "Conditioning": 0
    };
  
    // Count points for each force
    answers.forEach((answerIndex, questionIndex) => {
      const question = quizData.questions[questionIndex];
      const selectedAnswer = question.answers[answerIndex];
      forces[selectedAnswer.force]++;
    });
  
    // Find the highest scoring force(s)
    const maxScore = Math.max(...Object.values(forces));
    const topForces = Object.entries(forces).filter(([force, score]) => score === maxScore);
  
    // If there's a tie, use the priority order from the PDF
    const priorityOrder = ["Fear", "Perfectionism", "People-Pleasing", "Guilt & Shame", "Inner Conflict", "Conditioning"];
    
    let dominantForce;
    if (topForces.length === 1) {
      dominantForce = topForces[0][0];
    } else {
      // Find the highest priority force among the tied forces
      for (const force of priorityOrder) {
        if (topForces.some(([f, score]) => f === force)) {
          dominantForce = force;
          break;
        }
      }
    }
  
    return {
      force: dominantForce,
      scores: forces,
      description: forceDescriptions[dominantForce]
    };
  };