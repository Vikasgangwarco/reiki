import Image from 'next/image';
import { Poppins } from 'next/font/google';
import TrainingCard from '../../../components/TrainingCard';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const trainingCourses = [
  {
    title: "Reiki Healing",
    description: "Through intention and energy flow, distant Reiki healing supports emotional, physical, and spiritual well-being.",
    image: "/images/courses/reiki-healing.jpg",
    options: [
      { label: "Level - 1, 2 & 3", price: "Rs 12,000" },
      { label: "Mastership", price: "Rs 5,000" },
      { label: "Grand mastership", price: "Rs 5,000" }
    ]
  },
  {
    title: "Karuna Reiki Healing",
    description: "Learn advanced healing techniques in Karuna Reiki to release deep-seated blockages and enhance inner peace.",
    image: "/images/courses/karuna-reiki.jpg",
    options: [
      { label: "Level - 1 & 2", price: "Rs 12,000" },
      { label: "Mastership", price: "Rs 30,000" }
    ]
  },
  {
    title: "Lama Fera Healing",
    description: "Lama Fera is a powerful Tibetan healing technique that removes negative energies and promotes deep spiritual and emotional healing.",
    image: "/images/courses/lama-fera.jpg",
    options: [
      { label: "Level - 1 & 2", price: "Rs 15,000" },
      { label: "Advanced", price: "Rs 15,000" }
    ]
  },
  // Add other courses similarly...
];

export default function TrainingCoursesPage() {
  return (
    <div className={`font-sans text-gray-800 ${poppins.className}`}>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Training Banner"
          fill
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-white text-6xl font-bold  tracking-tight drop-shadow-md ${poppins.className} font-medium`}>
          Training & Courses
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

      {/* Courses List */}
      <div className="flex flex-col items-center gap-10 px-4 md:px-10 lg:px-20 py-16">
        {trainingCourses.map((course, idx) => (
          <TrainingCard
            key={idx}
            image={course.image}
            title={course.title}
            description={course.description}
            options={course.options}
          />
        ))}
      </div>
    </div>
  );
}
