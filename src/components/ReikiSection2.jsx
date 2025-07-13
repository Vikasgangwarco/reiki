import Image from "next/image";
import { useMemo } from "react";

// CTA Button Component
const CTAButtonMediumWebsite = ({
  className = "",
  property1 = "Outline",
  cTAButtonMediumWebsiteAlignSelf,
  bookNow = "Explore",
}) => {
  const ctaStyle = useMemo(() => {
    return {
      alignSelf: cTAButtonMediumWebsiteAlignSelf,
    };
  }, [cTAButtonMediumWebsiteAlignSelf]);

  return (
    <button
      type="button"
      aria-label={bookNow}
      className={`rounded-md text-xl font-medium py-2.5 px-[50px] border transition-all duration-300 flex items-center justify-center
        ${property1 === "Outline"
          ? "bg-transparent border-[#8044af] text-[#8044af] hover:bg-[#f1e6fa]"
          : "bg-[#9657c9] border-[#9657c9] text-white hover:bg-[#8044af]"} 
        ${className}`}
      style={ctaStyle}
    >
      {bookNow}
    </button>
  );
};

// Reiki Section Component
const ReikiHealingSection = () => {
  return (
    <section className="relative w-full bg-[#d9c2ec] overflow-visible flex flex-col items-center px-4 pt-[260px] pb-16">
      {/* Floating Image */}
      <div className="absolute -top-[260px] right-0 z-10 w-full max-w-5xl">
        <Image
          src="/images/Rectangle116(1).png"
          alt="Healing Hands with Flower"
          width={1140}
          height={519}
          className="w-full h-auto rounded-tl-xl rounded-bl-xl object-cover"
          priority
        />
      </div>

      {/* Text and Button Side-by-Side */}
      {/* <div className="flex flex-col md:flex-row items-center justify-between gap-x-20 mt-2 max-w-5xl w-full px-">
        <p className="text-[#8044af] text-xl font-medium leading-snug text-left md:flex-1 mb-2 md:mb-0">
          Harmonize Mind, Body & Spirit Through Reiki. Restore Your Natural Balance with Reiki Healing. Transform Your Wellbeing with Reiki.
        </p>
        <div className="shrink-0">
          <CTAButtonMediumWebsite property1="Outline" bookNow="Explore" />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-20 mt-2  w-full px-10">
        <p className="text-[#8044af] text-xl font-medium leading-snug text-left md:flex-1 mb-2 md:mb-0">
          Harmonize Mind, Body & Spirit Through Reiki. Restore Your <br /> Natural Balance with Reiki Healing. Transform Your Wellbeing with Reiki.
        </p>
        <div className="shrink-0 mr-32">
          <CTAButtonMediumWebsite property1="Outline" bookNow="Explore" />
        </div>
      </div>
    </section>
  );
};

export default ReikiHealingSection;
