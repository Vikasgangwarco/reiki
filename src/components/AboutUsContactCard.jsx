import Image from "next/image";

const ContactCard = () => {
  return (
    <div className="max-w-[800px] mx-auto rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-lg">
      {/* Top Purple Bar */}
      <div className="h-[26px] bg-[#8044af]" />

      {/* Main Card */}
      <section className="bg-[#ede1f5] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-6 gap-6">
        {/* Left Side: Profile + Icons */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Image
            src="/images/Ellipse30.png"
            alt="Dr. Surabhi Sharma"
            width={192}
            height={192}
            className="rounded-full object-cover"           AboutUs-contact-card
          />
          <div className="flex gap-4">
            {/* <Image
              src="/ioncall.svg"
              alt="Call icon"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
            {/* <Image
              src="/mdiemail.svg"
              alt="Email icon"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
          </div>
        </div>

        {/* Right Side: Text Info */}
        <div className="text-center md:text-left space-y-2 text-[#000] max-w-md">
          <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
            Dr. Surabhi Sharma
          </h3>
          <p className="text-lg text-[#555]">(President Awardee)</p>
          <div className="text-base md:text-lg text-[#757575] space-y-1">
            <p>Reiki Grandmaster</p>
            <p>International Awardee (UK & Canada)</p>
            <p>Clinical Hypnotist</p>
            <p>Psychic Power Practitioner</p>
            <p>Expressive Art Therapist</p>
            <p>Professional Vastu & Astrologer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCard;
