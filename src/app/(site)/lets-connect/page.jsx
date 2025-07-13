import Image from 'next/image';
import { Poppins } from 'next/font/google';
import ContactCard from '../../../components/ContactCard';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function ContactUsPage() {
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
          <h1 className={`text-white text-6xl font-bold tracking-tight drop-shadow-md ${poppins.className} font-medium`}>
            Let's Connect
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

      {/* Main Contact Section */}
      <div className="px-4 md:px-10 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Card */}
        <div>
          <ContactCard />
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-purple-100 text-gray-800 p-3 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full bg-purple-100 text-gray-800 p-3 rounded-md outline-none"
          />
          <input
            type="tel"
            placeholder="Phone No."
            className="w-full bg-purple-100 text-gray-800 p-3 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Place"
            className="w-full bg-purple-100 text-gray-800 p-3 rounded-md outline-none"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-purple-100 text-gray-800 p-3 rounded-md outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#9657C9] text-white py-3 px-6 rounded-md hover:bg-purple-800 transition"
          >
            Start the Conversation
          </button>
        </form>
      </div>
    </div>
  );
}
