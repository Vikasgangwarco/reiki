import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="w-full max-w-md md:max-w-lg bg-gradient-to-b from-[#dfd3fc] to-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {/* Name */}
      <h3 className="text-xl font-semibold text-black">Aayushi Gour</h3>
      {/* Title */}
      <p className="text-sm text-[#757575] mb-4">Spirit Release</p>

      {/* Quotation Mark */}
      <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
        <Image
          src="/elquotes.svg"
          alt="Quote Icon"
          width={36}
          height={36}
          className="object-contain"
        />
      </div>

      {/* Testimonial Text */}
      <p className="text-base text-[#626262] leading-relaxed">
        My experience with Reiki has been incredibly healing and transformative. I felt a deep sense of peace, clarity, and balance after each session. The energy work helped me release stress and fear, leaving me more grounded and positive.
      </p>
    </div>
  );
};

export default TestimonialCard;
