//about page
'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Target, Shield, Compass, Zap, RotateCcw, Crown, Sparkles, Users } from 'lucide-react';

const AboutPage = () => {
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

  const values = [
    {
      icon: Shield,
      title: "Radical Integrity",
      description: "We lead with truth. Integrity means living in alignment - honoring our word, doing our inner work, and standing in congruence. We embody what we teach."
    },
    {
      icon: Zap,
      title: "Deep Empowerment",
      description: "We don't fix - we transform. Our clients are already powerful, whole, and capable. We support them in reclaiming their inner authority and learning to access and trust their wisdom within."
    },
    {
      icon: Target,
      title: "Lasting Transformation",
      description: "We go deep. By targeting root causes and rewiring the subconscious, we create sustainable, embodied change - not surface-level shifts and temporary fixes."
    },
    {
      icon: Compass,
      title: "Strategic Alignment",
      description: "Integration of inner and outer alignment. Inner transformation fuels purposeful, grounded action. We align the internal world with practical doing."
    },
    {
      icon: Star,
      title: "Authentic Expression",
      description: "Power comes from truth. We support clients in reconnecting with who they truly are - so they can lead, create, and express themselves unapologetically."
    },
    {
      icon: Crown,
      title: "Fearless Expansion",
      description: "Growth isn't optional - it's essential as it is the gateway to who you're truly here to become. We create safe spaces for leaders to face discomfort and rise with clarity."
    },
    {
      icon: RotateCcw,
      title: "Breaking the Cycles",
      description: "We break the loops and cycles of internalized limitations. By challenging generational narratives and unconscious beliefs, we support clients to reclaim agency."
    },
    {
      icon: Heart,
      title: "Embodied Success",
      description: "Success starts within. It's not about chasing someone else's version - it's living in alignment with your values, truth, and vision, every day."
    },
    {
      icon: Users,
      title: "Unconditional Presence",
      description: "We meet our clients where they are - with grounded, judgment-free presence. This emotional safety unlocks deep healing and lasting transformation."
    },
    {
      icon: Sparkles,
      title: "Commitment to Mastery",
      description: "We are devoted to lifelong growth. Our pursuit of mastery is fueled by curiosity, continuous refinement, and a deep commitment to excellence."
    }
  ];

  return (
    <div id='about' className="min-h-screen bg-white">
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
            About Breakthrough Methods
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            A revolutionary system for inner transformation that creates lasting change from the inside out
          </motion.p>
        </div>
      </motion.section>

      {/* About the Founder */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="w-80 h-80 mx-auto bg-gray-200 rounded-2xl flex items-center justify-content mb-8">
                <span className="text-gray-500 text-center w-full">Founder Photo Placeholder</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Founder</h2>
              <h3 className="text-2xl font-semibold text-[#50A7AC] mb-4">Kasia Szczesniak</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Known by her clients as the "Breakthrough Architect," Kasia has dedicated her career to helping high-performing individuals unlock their full potential through revolutionary transformational methods.
                </p>
                <p>
                  Drawing from extensive training in Neuro-Linguistic Programming (NLP), neuroscience studies, and insights from leading experts in human behavior and transformation, Kasia has developed a unique approach that goes beyond traditional coaching and therapy.
                </p>
                <p>
                  Her mission is simple yet profound: to support you in becoming your most authentic, liberated self - free to be, do, and have all that you truly desire.
                </p>
              </div>
              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-[#50A7AC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#447087] transition-colors">
                  Start Your Breakthrough Journey
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About the Methods */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Methods</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Breakthrough Methods is a proven transformational system that clears the internal resistance blocking you from becoming who you're meant to be
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">What Makes It Different</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#50A7AC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Rooted in principles from NLP, cognitive and behavioral science, and neuroplasticity</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#50A7AC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Works consciously with the unconscious mind where over 95% of our default beliefs are stored</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#50A7AC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Triggers immediate cognitive and physiological shifts for lasting change</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#50A7AC] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Activates transformation from within rather than forcing change from outside</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">How It Works</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#50A7AC] mb-2">Processing, Not Therapy</h4>
                  <p className="text-gray-700">We go straight to the root of what's unresolved without analyzing or rehashing your story.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#50A7AC] mb-2">Resolution Over Insight</h4>
                  <p className="text-gray-700">Complete unresolved emotions so they no longer take up space or energy in your system.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#50A7AC] mb-2">Fast and Deep</h4>
                  <p className="text-gray-700">Real shifts often happen in one session by working with the brain's emotional coding system.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Values */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we support your transformation journey
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#50A7AC] rounded-lg flex items-center justify-center mr-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section 
        className="py-20 bg-[#447087]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <blockquote className="text-2xl text-white leading-relaxed font-light italic">
              "At Breakthrough Methods, our mission is to empower high-performing individuals to permanently shift the subconscious patterns holding them back, so they can lead with clarity, integrity, and purpose. We exist to help our clients break free from inherited limitations and step fully into who they are here to become."
            </blockquote>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with our breakthrough assessment and discover exactly where you are on this journey.
            </p>
            <motion.button 
              className="bg-[#50A7AC] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#447087] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take the Assessment
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;