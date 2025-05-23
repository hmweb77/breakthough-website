"use client";

import { useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "Breakthrough",
    subtitle: "Targeted Inner Shifts: One Powerful Session at a Time",
    bestFor: "Clearing a specific block, gaining instant clarity and activating fast-forward momentum",
    commitment: "Book one session or a few",
    expect:
      "A powerful breakthrough on a focused issue – deep insight, emotional release, and clear next steps, all in a single session",
    linkText: "Back",
    linkText1: "more about the method",
    popular: false,
  },
  {
    title: "Breakfree",
    subtitle: "Total Reset: A 3-Month Inner Journey to Reclaim Your Power and Truth",
    bestFor:
      "Clearing deep-rooted emotional baggage, breaking long-standing patterns, and upgrading your inner operating system",
    commitment: "10 transformational sessions + a 2.5-day immersive Recalibration Intensive",
    expect:
      "Rewired emotional patterns, a renewed self-identity, and noticeable shifts in your confidence, choices, and outcomes",
    linkText: "Back",
    linkText1: "more about the method",
    popular: true,
  },
  {
    title: "Transform",
    subtitle: "Full Realignment: A 6-Month Deep Dive Into Identity, Power & Purpose",
    bestFor:
      "Visionaries, leaders, and founders ready for total internal realignment, embodied leadership, and full-spectrum integration across life and work",
    commitment:
      "26 transformational sessions, a 2.5-day immersive Recalibration Intensive, and high-touch support throughout",
    expect:
      "Deep structural shifts, sustainable personal power, and unshakable clarity that fuels aligned results in every domain of your life and business",
    linkText: "Back",
    linkText1: "more about the method",
    popular: false,
  },
];

const ServicesCards = () => {
  return (
    <section className="py-20 px-4 bg-[#212E38] text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-[#50A7AD] font-semibold uppercase tracking-widest">Work with me</span>
        <h2 className="mt-2 text-4xl font-bold">Choose Your Breakthrough Journey</h2>
        <p className="mt-4 text-white/80 text-lg">
          Select the transformational experience that aligns with your vision and commitment level.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <FlipCard key={i} service={service} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[360px] w-full cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={clsx(
          "transition-transform duration-700 relative w-full h-full rounded-xl shadow-lg",
          flipped && "rotate-y-180"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute h-full w-full bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          {service.popular && (
            <div className="absolute top-0 right-0 bg-[#50A7AD] text-white text-xs font-bold px-3 py-1 rounded-bl-md">
              Most Popular
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-[#212E38]">{service.title}</h3>
            <p className="text-sm mt-2 text-[#5C6B70]">{service.subtitle}</p>
            <p className="text-sm mt-2 text-[#5C6B70]">
              <strong>Best for:</strong> {service.bestFor}
            </p>
          </div>
          <button className="mt-4 w-full bg-[#417FE5] hover:bg-[#50A7AD] text-white py-2 px-4 rounded-full text-sm font-semibold transition">
            Learn More
          </button>
        </div>

        {/* BACK */}
        <div
          className="absolute h-full w-full bg-[#EAF2FE] border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#5C6B70] mb-1">Commitment</h4>
            <p className="text-sm text-[#212E38] mb-4">{service.commitment}</p>
            <h4 className="text-sm font-semibold uppercase text-[#5C6B70] mb-1">What you can expect</h4>
            <p className="text-sm text-[#212E38]">{service.expect}</p>
          </div>
          <div className="flex justify-around">

          <a
            href="#methods"
            className="mt-4 text-sm font-medium text-[#417FE5] hover:text-[#50A7AD] underline transition"
          >
            {service.linkText}
          </a>
          <a
            href="#methods"
            className="mt-4 text-sm font-medium text-[#417FE5] hover:text-[#50A7AD] underline transition"
          >
            {service.linkText1}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
