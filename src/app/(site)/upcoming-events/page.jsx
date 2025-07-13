'use client';

import Image from 'next/image';
import { Poppins } from 'next/font/google';
import OngoingEventCardWebsite from '../../../components/ongoing-event-card';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function EventsPage() {
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

        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold drop-shadow-md">
            Ongoing & Upcoming Events
          </h1>
        </div>

        {/* Search Bar */}
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

      {/* Ongoing Events */}
      <section className="py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-2xl font-semibold text-center text-[#663090] mb-6">Ongoing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          <OngoingEventCardWebsite />
          <OngoingEventCardWebsite />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-4 md:px-10 lg:px-20 bg-[#e7e2fa]">
        <h2 className="text-2xl font-semibold text-center text-[#663090] mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          <OngoingEventCardWebsite isUpcoming />
          <OngoingEventCardWebsite isUpcoming />
        </div>
      </section>

    </div>
  );
}
