'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, DollarSign, TrendingUp, Star, Quote, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const WhyItWorksPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const caseStudies = [
    {
      name: "Simon",
      title: "Tech Entrepreneur",
      category: "Professional Results",
      icon: TrendingUp,
      challenge: "Despite building a successful company, Simon felt trapped by perfectionism and fear of failure. He was working 80-hour weeks but seeing diminishing returns.",
      transformation: "Through Breakthrough Methods, Simon identified his core limiting belief: 'I am only valuable when I'm producing.' He processed the emotional charge around failure and recalibrated his internal drivers.",
      results: [
        "Increased company revenue by 150% in 6 months",
        "Reduced working hours from 80 to 45 per week",
        "Built a high-performing team that operates independently",
        "Launched 2 new product lines with confidence"
      ],
      quote: "I finally understand the difference between being busy and being effective. The internal shift created external results I never thought possible.",
      timeframe: "6 months",
      color: "bg-blue-500"
    },
    {
      name: "Ania",
      title: "Executive Coach",
      category: "Emotional Transformation",
      icon: Heart,
      challenge: "Ania was highly successful professionally but struggled with anxiety and relationship patterns. She felt disconnected from herself and others despite helping clients daily.",
      transformation: "Using the Timeline Method, Ania processed unresolved emotional patterns from her childhood. She cleared feelings of 'not being enough' and integrated conflicting parts of herself.",
      results: [
        "Eliminated chronic anxiety and stress responses",
        "Attracted and maintained her first healthy long-term relationship",
        "Increased emotional intelligence and empathy",
        "Developed authentic confidence without external validation"
      ],
      quote: "For the first time in my life, I feel at peace with who I am. The emotional freedom has transformed not just my relationships, but my entire life experience.",
      timeframe: "4 months",
      color: "bg-pink-500"
    },
    {
      name: "Rui",
      title: "Investment Banker",
      category: "Financial Breakthrough",
      icon: DollarSign,
      challenge: "Rui had a pattern of self-sabotage around money. Despite earning well, he couldn't build wealth and made poor financial decisions that kept him stressed about security.",
      transformation: "Through the Success Method, Rui uncovered his unconscious belief that 'money makes people bad.' He processed inherited family patterns around wealth and aligned his values with financial success.",
      results: [
        "Increased income by 250% through strategic career moves",
        "Built an investment portfolio worth $500K in 18 months",
        "Eliminated financial anxiety and scarcity mindset",
        "Started mentoring others in wealth building"
      ],
      quote: "I realized I was unconsciously sabotaging my financial success. Once I cleared those patterns, money started flowing in ways that felt aligned and sustainable.",
      timeframe: "8 months",
      color: "bg-green-500"
    },
    {
      name: "Joao",
      title: "Creative Director",
      category: "Identity & Purpose",
      icon: Brain,
      challenge: "Joao felt stuck between his creative passion and practical responsibilities. He was successful but unfulfilled, questioning his purpose and feeling like he was living someone else's life.",
      transformation: "The Recalibration Method helped Joao identify his authentic context and realign his identity with his true values. He processed the fear of disappointing others and stepped into his creative power.",
      results: [
        "Left corporate job to start creative agency",
        "Tripled income while following his passion",
        "Developed clear sense of purpose and direction",
        "Built a business aligned with his values and creativity"
      ],
      quote: "I stopped living according to others' expectations and started creating from my authentic self. The clarity and confidence I gained changed everything.",
      timeframe: "5 months",
      color: "bg-purple-500"
    }
  ];

  const scienceBehind = [
    {
      icon: Brain,
      title: "Neuroplasticity in Action",
      description: "Breakthrough Methods leverage the brain's ability to rewire neural pathways by engaging the unconscious mind in real-time, creating immediate cognitive and physiological shifts."
    },
    {
      icon: Zap,
      title: "Subconscious Reprogramming",
      description: "By working with the unconscious mind where 95% of our behaviors originate, we create lasting change at the source rather than just managing symptoms."
    },
    {
      icon: Heart,
      title: "Emotional Resolution",
      description: "Processing completes emotional experiences that were previously stuck, freeing up life force energy and removing internal resistance to desired outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-[#50A7AC] text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
          >
            Why It Works
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Real people, real transformations, real results. See how Breakthrough Methods create lasting change from the inside out.
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">The Science of Transformation</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Breakthrough Methods aren't about adding more tools — they're about removing what no longer serves you, so your clarity, confidence, and momentum can flow without friction.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {scienceBehind.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-16 h-16 bg-[#50A7AC] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Transformation Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't testimonials — they're documented case studies showing measurable results across emotional, professional, and financial domains.
            </p>
          </motion.div>

          <motion.div className="space-y-16" variants={staggerContainer}>
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`${study.color} h-2`}></div>
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Client Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 ${study.color} rounded-lg flex items-center justify-center mr-4`}>
                          <study.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{study.name}</h3>
                          <p className="text-gray-600">{study.title}</p>
                          <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mt-2">
                            {study.category}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Transformation Timeline</p>
                        <p className="font-semibold text-gray-900">{study.timeframe}</p>
                      </div>
                    </div>

                    {/* Story & Results */}
                    <div className="md:col-span-2">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">The Breakthrough Process</h4>
                          <p className="text-gray-700 leading-relaxed">{study.transformation}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Measurable Results</h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {study.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <Quote className="w-8 h-8 text-[#50A7AC] mb-4" />
                          <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                            "{study.quote}"
                          </blockquote>
                          <cite className="text-gray-500 not-italic">— {study.name}</cite>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Results Summary */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Consistent Results Across All Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While every breakthrough is unique, our clients consistently experience transformation across these key domains.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Growth</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Average income increase: 180%</p>
                <p>• Reduced working hours by 30-50%</p>
                <p>• Improved leadership effectiveness</p>
                <p>• Greater strategic clarity</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Mastery</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Eliminated anxiety and stress</p>
                <p>• Improved relationship quality</p>
                <p>• Enhanced emotional intelligence</p>
                <p>• Authentic self-confidence</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Freedom</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Cleared money blocks and patterns</p>
                <p>• Sustainable wealth building</p>
                <p>• Aligned financial decisions</p>
                <p>• Eliminated scarcity mindset</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It's Different */}
      <motion.section 
        className="py-20 bg-[#447087]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-8">Why Traditional Methods Fall Short</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Traditional Approaches</h3>
                <ul className="space-y-2 text-white opacity-90">
                  <li>• Focus on symptoms, not root causes</li>
                  <li>• Work only with conscious mind</li>
                  <li>• Require months or years of sessions</li>
                  <li>• Often create dependency on external validation</li>
                  <li>• Limited integration of mind-body connection</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Breakthrough Methods</h3>
                <ul className="space-y-2 text-white opacity-90">
                  <li>• Address root causes at subconscious level</li>
                  <li>• Work with unconscious mind directly</li>
                  <li>• Create shifts in single sessions</li>
                  <li>• Build internal authority and self-trust</li>
                  <li>• Integrate mind, body, and energy systems</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience Your Own Breakthrough?</h2>
            <p className="text-xl text-gray-600 mb-8">
              These results aren't outliers — they're what happens when you remove the invisible barriers holding you back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-[#50A7AC] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#447087] transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Breakthrough Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button 
                className="border-2 border-[#50A7AC] text-[#50A7AC] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#50A7AC] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Case Study Report
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WhyItWorksPage;