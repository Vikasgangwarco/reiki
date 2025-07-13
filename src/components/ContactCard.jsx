// components/ContactCard.jsx
import Image from "next/image";

const ContactItem = ({ icon, title, subtitle }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
      {/* <Image src={icon} alt={title} width={24} height={24} /> */}
    </div>
    <div>
      <p className="text-white text-lg font-medium">{title}</p>
      <p className="text-white text-sm">{subtitle}</p>
    </div>
  </div>
);

const ContactCard = () => {
  return (
    <div className="relative w-full max-w-md mx-auto rounded-3xl bg-[#663090] p-6 sm:p-8 text-white overflow-hidden">
      {/* Contact Info */}
      <ContactItem
        icon="/ioncall.svg"
        title="(+91) 2325641232"
        subtitle="Have questions or need guidance? Feel free to reach out! Call us"
      />
      <ContactItem
        icon="/mdiemail.svg"
        title="drsurabhi.reiki@gmail.com"
        subtitle="Reach out to us anytime! Email us"
      />
      <ContactItem
        icon="/famiconslocationsharp.svg"
        title="Rishikesh"
        subtitle="Flat# 209 Block-C Deecon Valley"
      />
      <ContactItem
        icon="/famiconslocationsharp-1.svg"
        title="Bareilly"
        subtitle="72-D Sun-City, Vistar"
      />

      {/* Decorative circle image in bottom-right */}
      <Image
        src="/gradient-circle.png" // Rename the image to this in your public folder
        alt="decorative-circle"
        width={228}
        height={228}
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 pointer-events-none"
      />
    </div>
  );
};

export default ContactCard;
