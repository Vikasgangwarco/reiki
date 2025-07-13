import Image from 'next/image';
import { Poppins } from 'next/font/google';
import CourseCardWebsite from '../../../components/course-card-website'; // adjust path as needed

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const courses = [
  {
    title: "Reiki Healing",
    description: "Through intention and energy flow, distant Reiki healing supports emotional, physical, and spiritual well-being.",
    image: "/images/courses/reiki.jpg",
    options: [
      { label: "Level – 1, 2 & 3", price: "Rs 12,000" },
      { label: "Mastership", price: "Rs 5,000" },
      { label: "Grand Mastership", price: "Rs 5,000" },
    ],
  },
  {
    title: "Karuna Reiki Healing",
    description: "Learn advanced healing techniques in Karuna Reiki to release deep-seated blockages and enhance inner peace.",
    image: "/images/courses/karuna-reiki.jpg",
    options: [
      { label: "Level – 1 & 2", price: "Rs 12,000" },
      { label: "Mastership", price: "Rs 30,000" },
    ],
  },
  {
    title: "Lama Fera Healing",
    description: "Lama Fera is a powerful Tibetan healing technique that removes negative energies and promotes deep spiritual and emotional healing.",
    image: "/images/courses/lama-fera.jpg",
    options: [
      { label: "Level – 1 & 2", price: "Rs 15,000" },
      { label: "Advanced", price: "Rs 15,000" },
    ],
  },
  {
    title: "Dowsing - Basic & Advanced Attunement",
    description: "From foundational techniques to advanced mastery, dowsing attunement empowers you to access deeper insights and energy healing.",
    image: "/images/courses/dowsing.jpg",
    options: [{ label: "Full Course", price: "Rs 10,000" }],
  },
  {
    title: "Numerology",
    description: "Learn the art of numerology to interpret numbers and their influence on personality, destiny, and life decisions.",
    image: "/images/courses/numerology.jpg",
    options: [{ label: "Complete Course", price: "Rs 17,000" }],
  },
  {
    title: "Third Eye Activation",
    description: "Through intention and energy flow, distant Reiki healing supports emotional, physical, and spiritual well-being.",
    image: "/images/courses/thirdeye.jpg",
    options: [{ label: "Full Course", price: "Rs 21,000" }],
  },
  {
    title: "Past Life",
    description: "Learn to explore subconscious memories of previous lifetimes, helping to heal unresolved emotions and gain deeper self-awareness.",
    image: "/images/courses/pastlife.jpg",
    options: [{ label: "Session", price: "Rs 21,000" }],
  },
  {
    title: "Life Between Lives",
    description: "Learn to access the space between lifetimes to understand soul purpose, past connections, and higher wisdom for transformation.",
    image: "/images/courses/life-between.jpg",
    options: [{ label: "Session", price: "Rs 21,000" }],
  },
  {
    title: "Sound Therapy",
    description: "Learn how sound frequencies promote physical healing, reduce stress, and elevate spiritual consciousness through guided training.",
    image: "/images/courses/sound-therapy.jpg",
    options: [{ label: "Full Training", price: "Rs 15,000" }],
  },
  {
    title: "Chakra Activation with Kundalini Awakening",
    description: "Learn powerful techniques to awaken Kundalini, activate chakras, and harness divine energy for transformation and self-realization.",
    image: "/images/courses/chakra-activation.jpg",
    options: [{ label: "Course", price: "Rs 27,000" }],
  },
  {
    title: "Vastu with Remedies",
    description: "Learn the science of Vastu to design homes and workplaces that attract positivity, prosperity, and well-being.",
    image: "/images/courses/vastu.jpg",
    options: [{ label: "Full Course", price: "Rs 15,000" }],
  },
  {
    title: "Living in Abundance",
    description: "Living in Abundance training teaches the spiritual laws of wealth, helping you attract financial growth with aligned energy and mindset.",
    image: "/images/courses/abundance.jpg",
    options: [{ label: "Full Course", price: "Rs 15,000" }],
  },
  {
    title: "Meditation",
    description: "Learn the art of meditation to reduce stress, enhance focus, and connect with your higher self.",
    image: "/images/courses/meditation.jpg",
    options: [{ label: "Course", price: "Rs 15,000" }],
  },
];

export default function TrainingCoursesPage() {
  return (
    <div className={`font-sans text-gray-800 ${poppins.className}`}>
      {/* Banner */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Courses Banner"
          fill
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold tracking-tight drop-shadow-md">Training & Courses</h1>
        </div>
        <div className="absolute top-2 right-4">
          <div className="flex items-center rounded-md px-4 py-1.5 bg-black/25 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-white w-32 md:w-40 outline-none"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="px-4 md:px-10 lg:px-20 space-y-8 py-16">
        {courses.map((course, idx) => (
          <CourseCardWebsite key={idx} {...course} />
        ))}
      </div>
    </div>
  );
}
