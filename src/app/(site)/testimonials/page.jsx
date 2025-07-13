import Image from 'next/image';
import { Poppins } from 'next/font/google';
import TestimonialCard from '../../../components/testimonial-card'; // make sure the path is correct

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function TestimonialsPage() {
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
          <h1 className="text-white text-6xl font-bold tracking-tight drop-shadow-md">
            Testimonials
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

      {/* Intro Text */}
      <div className="text-center mt-12 mb-8 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          What Our Client Say
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover how Reiki has transformed the lives of our clients. Read their experiences and see how Reiki can help you on your journey to wellness and balance.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {Array(4).fill(null).map((_, index) => (
          <TestimonialCard key={index} />
        ))}
      </div>

      {/* Bottom Image Section */}
      <div className="px-4 md:px-20 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <Image
          src="/images/Rectangle128(3).png"
          alt="Testimonial 1"
          width={400}
          height={400}
          className="rounded-md object-cover w-full"
        />
        <Image
          src="/images/Rectangle128(4).png"
          alt="Testimonial 2"
          width={400}
          height={400}
          className="rounded-md object-cover w-full"
        />
        <Image
          src="/images/Rectangle128(5).png"
          alt="Testimonial 3"
          width={400}
          height={400}
          className="rounded-md object-cover w-full"
        />
      </div>

      {/* Call to Action Section */}
      <div className="px-4 md:px-20 mb-20">
        <div className="bg-gradient-to-b from-[#dfd3fc] to-white rounded-xl shadow-md p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">
            Start Your Healing Journey
          </h3>
          <p className="text-gray-700 mb-5">
            Ready to experience the healing power of Reiki? Book a session today and start your journey toward balance and well-being.
          </p>
          <button className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-100 py-2 px-6 rounded-md transition duration-200 font-medium">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}
