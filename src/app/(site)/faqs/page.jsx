"use client";

import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const faqs = [
  {
    question: "How many sessions will  need?",
    answer:
      "The number of sessions depends on your individual needs and goals. Most clients feel a difference after a few sessions.",
  },
  {
    question: "Can Reiki replace medical treatment?",
    answer:
      "Reiki complements medical treatments but does not replace them. Always consult your healthcare provider.",
  },
  {
    question: "What happens during a Spirit release session?",
    answer:
      "During a Spirit Release session, we identify and gently release unwanted energies with spiritual guidance.",
  },
  {
    question: "Is Sound therapy safe for everyone?",
    answer:
      "Yes, sound therapy is generally safe and beneficial for all age groups, but it's best to consult if you have medical devices like pacemakers.",
  },
  {
    question: "How long does Reiki take for healing?",
    answer:
      "Healing time varies from person to person. Some notice immediate relief, while others need several sessions.",
  },
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`font-sans text-gray-800 ${poppins.className}`}>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="FAQs Banner"
          fill
          className="object-cover w-full"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold drop-shadow-md">FAQs</h1>
        </div>

        <div className="absolute top-2 right-4">
          <div className="flex items-center rounded-md px-4 py-1.5 bg-black/25 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-white w-32 md:w-40 outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">Frequently Ask Questions</h2>
        <p className="text-gray-500 mb-8">Have questions? We’re here to help! Explore our FAQs to learn more about Reiki healing and other services.</p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="flex items-center text-lg font-medium text-black">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <p className="text-gray-600 pb-4 pl-6 pr-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-purple-600 text-white font-medium py-3 px-6 rounded-md hover:bg-purple-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
