"use client"
import { motion } from "framer-motion";
import { Search, Lightbulb, Zap, Award } from "lucide-react";


  const steps = [
    {
      number: 1,
      title: "Uncover",
      description: "We identify your specific internal blocks using proprietary assessment methods that go beyond traditional coaching approaches to uncover what's been holding you back.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Person engaged in breakthrough discovery process",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Illuminate",
      description: "We bring awareness to the subconscious patterns driving your behavior and help you see the specific neural pathways keeping you stuck in self-sabotaging cycles.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Person experiencing mental clarity moment",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Rewire",
      description: "Using advanced neuroplasticity techniques, we help you release old patterns and create new neural pathways that support your desired outcomes and identity.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Person engaged in transformational process",
      icon: <Zap className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Embody",
      description: "We integrate your new patterns into daily life, ensuring they become your default state so you naturally operate from your new level of awareness and capability.",
      image: "https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Person celebrating breakthrough success",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const Process = () => {
    return (
      <section className="py-28 px-6 bg-[#F7F5F2] relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#417FE5] uppercase text-sm font-semibold tracking-widest">The Journey</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mt-3">The Breakthrough Process</h2>
            <p className="text-[#555] text-lg mt-4">
              Our neuroscience-informed method creates lasting transformation by rewiring your mind at the subconscious level.
            </p>
          </div>
  
          {/* Steps */}
          <div className="relative space-y-28">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                {/* Icon - floating dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-[#417FE5] flex items-center justify-center shadow-xl">
                    {step.icon}
                  </div>
                </div>
  
                {/* Text Card */}
                <div className="md:w-1/2 relative z-20">
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-[#50A7AD] uppercase tracking-wide">
                      <div className="w-8 h-8 rounded-full bg-[#417FE5] flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      Phase {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">{step.title}</h3>
                    <p className="text-[#555] text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
  
                {/* Image Block */}
                <div className="md:w-1/2 z-10">
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="mt-24 text-center">
            <motion.a
              href="#quiz"
              className="inline-block bg-[#417FE5] hover:bg-[#091683] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Breakthrough Journey
            </motion.a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Process;