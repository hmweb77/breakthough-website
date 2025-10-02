'use client';

import { motion } from 'framer-motion';
import { Zap, RefreshCw, Sparkles, Crown, Check, ArrowRight, Clock, Users, Calendar, Star } from 'lucide-react';

const WorkWithMePage = () => {
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

  const packages = [
    {
      name: "Breakthrough",
      subtitle: "Targeted Inner Shifts",
      tagline: "One Powerful Session at a Time",
      icon: Zap,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
      price: "€350",
      originalPrice: "€250",
      isLaunchOffer: true,
      duration: "Single sessions",
      bestFor: "Clearing a specific block, gaining instant clarity and activating fast-forward momentum",
      commitment: "Book one session or a few",
      includes: [
        "Choose from 5 targeted methods",
        "Human Architecture Method (€350)",
        "Parts Integration Method (€350)", 
        "Freedom Method (€350)",
        "Success Method (€350)",
        "Timeline Method (6 sessions - €1,950)"
      ],
      outcomes: [
        "Powerful breakthrough on focused issue",
        "Deep insight and emotional release",
        "Clear next steps and momentum",
        "Immediate shifts in perspective"
      ],
      cta: "Book Single Session",
      popular: false
    },
    {
      name: "Breakfree",
      subtitle: "Total Reset",
      tagline: "3-Month Inner Journey to Reclaim Your Power",
      icon: RefreshCw,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
      price: "€5,500",
      originalPrice: "€4,000",
      isLaunchOffer: true,
      duration: "3 months",
      bestFor: "Clearing deep-rooted emotional baggage, breaking long-standing patterns, and upgrading your inner operating system",
      commitment: "10 transformational sessions + 2.5-day immersive Recalibration Intensive",
      includes: [
        "All breakthrough methods included",
        "10 transformational sessions",
        "2.5-day Recalibration Intensive",
        "Complete emotional timeline clearing",
        "Parts integration and freedom work",
        "Success pattern recoding"
      ],
      outcomes: [
        "Rewired emotional patterns",
        "Renewed self-identity",
        "Noticeable shifts in confidence",
        "Improved choices and outcomes",
        "Sustainable inner transformation"
      ],
      cta: "Start Breakfree Journey",
      popular: true,
      savings: "Save €350"
    },
    {
      name: "Transform",
      subtitle: "Full Realignment",
      tagline: "6-Month Deep Dive Into Identity, Power & Purpose",
      icon: Sparkles,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200",
      price: "€12,222",
      originalPrice: "€8,888",
      isLaunchOffer: true,
      duration: "6 months",
      bestFor: "Visionaries, leaders, and founders ready for total internal realignment, embodied leadership, and full-spectrum integration",
      commitment: "26 transformational sessions + 2.5-day intensive + high-touch support",
      includes: [
        "26 breakthrough sessions",
        "2.5-day Recalibration Intensive",
        "Direct access between sessions",
        "Complete timeline clearing",
        "Leadership development integration",
        "Ongoing support and guidance"
      ],
      outcomes: [
        "Deep structural shifts",
        "Sustainable personal power", 
        "Unshakable clarity and confidence",
        "Aligned results across all life domains",
        "Embodied leadership presence"
      ],
      cta: "Begin Transformation",
      popular: false
    },
    {
      name: "Transcend",
      subtitle: "Next-Level Ascension",
      tagline: "Individually Custom Tailored Evolution",
      icon: Crown,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50", 
      borderColor: "border-indigo-200",
      price: "Application Only",
      originalPrice: null,
      isLaunchOffer: false,
      duration: "Custom timeline",
      bestFor: "Those who aren't just seeking freedom - but liberation. For the few who are truly ready.",
      commitment: "Application-only | Fully customized, high-touch container with direct support",
      includes: [
        "Custom designed transformation path",
        "Unlimited breakthrough sessions",
        "Direct access and support",
        "Exclusive methods and approaches",
        "Personal breakthrough architecture",
        "White-glove transformation experience"
      ],
      outcomes: [
        "Dismantling of final internal limits",
        "Quantum shift in consciousness",
        "Complete energetic realignment",
        "Leadership from essence, not fear",
        "Full liberation and authentic power"
      ],
      cta: "Apply for Transcend",
      popular: false,
      exclusive: true
    }
  ];

  return (
    <div id='services' className="min-h-screen bg-white">
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
            Work With Me
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Your evolution knows the way - choose the breakthrough journey that honors it
          </motion.p>
          <motion.div 
            className="flex items-center justify-center space-x-6 text-lg"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Personalized roadmap</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Science-backed methods</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Lasting results</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Grid */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Transformation Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From targeted breakthroughs to complete life transformation - find the perfect level of support for your journey
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white rounded-2xl shadow-xl border-2 ${pkg.borderColor} overflow-hidden relative ${pkg.popular ? 'ring-4 ring-green-200' : ''}`}
                whileHover={{ y: -8 }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-b-lg text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                {pkg.exclusive && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-b-lg text-sm font-semibold">
                    EXCLUSIVE
                  </div>
                )}

                <div className={`${pkg.color} h-2`}></div>
                
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <pkg.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-xl font-semibold text-[#50A7AC] mb-2">{pkg.subtitle}</p>
                    <p className="text-gray-600">{pkg.tagline}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    {pkg.price === "Application Only" ? (
                      <div className="text-3xl font-bold text-gray-900">Application Only</div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        {pkg.isLaunchOffer && (
                          <span className="text-2xl text-gray-400 line-through">{pkg.price}</span>
                        )}
                        <span className="text-4xl font-bold text-gray-900">
                          {pkg.originalPrice || pkg.price}
                        </span>
                      </div>
                    )}
                    {pkg.isLaunchOffer && (
                      <div className="text-sm text-green-600 font-semibold mt-2">🔥 Launch Offer</div>
                    )}
                    {pkg.savings && (
                      <div className="text-sm text-green-600 font-semibold mt-1">{pkg.savings}</div>
                    )}
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                    <p className="text-gray-600 leading-relaxed">{pkg.bestFor}</p>
                  </div>

                  {/* Commitment */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Commitment:</h4>
                    <p className="text-gray-600">{pkg.commitment}</p>
                  </div>

                  {/* What's Included */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Outcomes */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What You Can Expect:</h4>
                    <ul className="space-y-2">
                      {pkg.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start space-x-3">
                          <ArrowRight className="w-4 h-4 text-[#50A7AC] flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button 
                    className={`w-full ${pkg.color} text-white py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pkg.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Support Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Not Sure Which Path Is Right?</h2>
            <p className="text-xl text-gray-600 mb-8">
              I offer a range of packages and session bundles to support you at the level and pace that feels right for you. Whether you're looking for a deep, focused reset or ongoing support over time, there are flexible options available.
            </p>
            <motion.button 
              className="bg-[#50A7AC] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#447087] transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Discovery Call
            </motion.button>
            <p className="text-gray-500 mt-4">
              Let's make sure you're supported in a way that feels both powerful and sustainable.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Session Logistics */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Session Information</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working together
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <Clock className="w-12 h-12 text-[#50A7AC] mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Format & Duration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Sessions conducted via Zoom</li>
                <li>• 60-90 minutes per session</li>
                <li>• All sessions are recorded</li>
                <li>• No note-taking required</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <Users className="w-12 h-12 text-[#50A7AC] mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Arrive well-rested and nourished</li>
                <li>• No alcohol 24hrs before/after</li>
                <li>• Private, quiet space required</li>
                <li>• Bring water and tissues</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <RefreshCw className="w-12 h-12 text-[#50A7AC] mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scheduling</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Weekly sessions recommended</li>
                <li>• Flexible pace for your system</li>
                <li>• Pre-payment required</li>
                <li>• Release form before booking</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 bg-[#447087]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Transformation?</h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Your breakthrough is waiting. The only question is: which path will you choose?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-[#447087] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take the Assessment
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#447087] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Discovery Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WorkWithMePage;