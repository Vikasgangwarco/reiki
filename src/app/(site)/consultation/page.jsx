import Image from 'next/image';
import { Poppins } from 'next/font/google';
import ConsultationCardWebsite from '../../../components/ConsultationCardWebsite';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const services = [
  {
    title: "Marriage Prediction",
    price: "Rs 1,000",
    description:
      "Unlock insights into your future with a Marriage Prediction Consultation, offering guidance on compatibility, timing, and relationship harmony.",
    image: "/images/services/marriage.png",
  },
  {
    title: "Astrological Prediction",
    price: "Rs 1,000",
    description:
      "Gain clarity about your future with an Astrological Prediction, offering insights into career, relationships, health, and life decisions.",
    image: "/images/services/astro.png",
  },
  {
    title: "Dowsing Prediction",
    price: "Rs 500",
    description:
      "Unlock hidden answers with a Dowsing Prediction, using energy vibrations to gain insights into health, career, relationships, and life decisions.",
    image: "/images/services/dowsing.png",
  },
  {
    title: "Astro-Vastu Prediction",
    price: "Rs 1,000",
    description:
      "Align your home and life with cosmic energies through an Astro Vastu Prediction. Get personalized guidance on harmonizing spaces for prosperity, health, and success.",
    image: "/images/services/astro-vastu.png",
  },
  {
    title: "Vastu - House & Shops",
    price: "As per request",
    description:
      "Enhance harmony and prosperity with a Vastu Consultation for Houses & Shops, ensuring optimal energy flow for success, well-being, and growth.",
    image: "/images/services/vastu-house.png",
  },
  {
    title: "Vastu - Personal issues with remedies",
    price: "As per request",
    description:
      "Resolve personal challenges with a Vastu Consultation for Personal Issues, offering tailored remedies to restore balance, positivity, and well-being in your life.",
    image: "/images/services/vastu-remedy.png",
  },
  {
    title: "Tarot Card reading",
    price: "As per request",
    description:
      "Gain clarity and guidance with a Tarot Card Reading, offering deep insights into your past, present, and future. Unlock answers to life’s questions.",
    image: "/images/services/tarot.png",
  },
];

export default function ConsultationPage() {
  return (
    <div className={`font-sans text-gray-800 ${poppins.className}`}>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Healing Banner"
          fill
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-tight drop-shadow-md font-medium">
            Consultation
          </h1>
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

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4">
        {services.map((service, index) => (
          <ConsultationCardWebsite
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
}
