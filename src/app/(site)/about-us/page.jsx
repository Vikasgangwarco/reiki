// app/about/page.tsx
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import ContactCard from '../../../components/AboutUsContactCard';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function AboutUsPage() {
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
            About Us
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

      {/* Essence Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-[26px] md:text-[28px] font-medium text-black leading-snug">
            The Essence of Reiki Mastery
          </h2>
          <p className="text-[20px] md:text-[24px] lg:text-[26px] text-[#757575] leading-relaxed">
            I'm Dr. Surabhi Sharma, a certified Reiki Grand Master, two-time winner of the prestigious International Reiki awards, dedicated to fostering healing and balance through energy work. My journey with Reiki began after experiencing its transformative effects firsthand, inspiring me to master this healing art and share it with others.
          </p>
          <button className="bg-[#9657c9] text-white px-8 py-3 rounded-lg text-[20px] md:text-[22px] lg:text-[26px] font-medium hover:bg-purple-700 transition-colors duration-300">
            Heal with Reiki
          </button>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 max-w-[500px] w-full">
          <div className="col-span-1 row-span-2">
            <Image
              src="/images/Rectangle127.png"
              alt="Main"
              width={255}
              height={409}
              className="rounded-tl-[40px] w-full h-full object-cover"
            />
          </div>
          <Image
            src="/images/Rectangle125.png"
            alt="Image 1"
            width={255}
            height={198}
            className="w-full h-full object-cover"
          />
          <Image
            src="/images/Rectangle126.png"
            alt="Image 2"
            width={255}
            height={198}
            className="rounded-br-[40px] w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Transformation Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        <Image
          src="/images/Rectangle128(1).png"
          alt="Workshop"
          width={550}
          height={400}
          className="rounded-[20px] w-full h-auto object-cover"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Empowering Transformation Through Reiki
          </h3>
          <p className="text-gray-600 text-lg md:text-xl">
            I’m committed to supporting your wellness journey, whether you’re seeking relief from specific conditions or enhancing your overall wellbeing.
          </p>
        </div>
      </section>

      {/* Release Fear Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        <div className="text-center md:text-left order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Release Fear, Embrace Healing
          </h3>
          <p className="text-gray-600 text-lg md:text-xl">
            Let go of fear and embrace healing. Through the ancient wisdom of Reiki, I help you restore balance, peace, and inner strength, guiding you toward transformation and well-being.
          </p>
        </div>
        <Image
          src="/images/Rectangle128(2).png"
          alt="Healing Session"
          width={550}
          height={400}
          className="rounded-[20px] w-full h-auto object-cover order-1 md:order-2"
        />
      </section>

      {/* Profile Section */}
      {/* <section className="bg-[#eee0f6] py-10 px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/Ellipse30.png"
            alt="Dr. Surabhi Sharma"
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <h4 className="text-xl font-semibold mb-1">
              Dr. Surabhi Sharma <span className="font-normal">(President Awardee)</span>
            </h4>
            <ul className="text-gray-700 text-base list-disc list-inside space-y-1">
              <li>Reiki Grandmaster</li>
              <li>International Awardee (UK & Canada)</li>
              <li>Clinical Hypnotist</li>
              <li>Psychic Power Practitioner</li>
              <li>Expressive Art Therapist</li>
              <li>Professional Vastu & Astrologer</li>
            </ul>
          </div>
        </div>
      </section> */}
      <div className="bg-[#ede1f5] p-6 md:p-10 rounded-xl shadow-md mt-12 flex flex-col md:flex-row items-center gap-6">
        <ContactCard />
      </div>

    </div>
  );
}
