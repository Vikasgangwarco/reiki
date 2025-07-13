import Image from 'next/image';
import { Poppins } from 'next/font/google';
import PropTypes from "prop-types";
import ProductCardWebsite from '../../../components/our-services-card';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const services = [
  {
    title: "Animal Healing",
    price: "Rs 1000/session",
    description: "Healing animals restores their balance, bringing comfort and well-being through care and energy.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Reiki Distant Healing",
    price: "Rs 1000/session",
    description: "Through intention and energy flow, distant Reiki supports emotional, physical, and spiritual well-being.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Spirit Release",
    price: "Rs 11,000/session",
    description: "Clears negative or unwanted spiritual energies from a person, place, or object.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Chakra Balancing",
    price: "Rs 7,100/session",
    description: "Aligning and restoring the flow of energy within the body’s seven main chakras.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Animal Healing",
    price: "Rs 1000/session",
    description: "Healing animals restores their balance, bringing comfort and well-being through care and energy.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Reiki Distant Healing",
    price: "Rs 1000/session",
    description: "Through intention and energy flow, distant Reiki supports emotional, physical, and spiritual well-being.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Spirit Release",
    price: "Rs 11,000/session",
    description: "Clears negative or unwanted spiritual energies from a person, place, or object.",
    image: "/images/services/Rectangle120.png",
  },
  {
    title: "Chakra Balancing",
    price: "Rs 7,100/session",
    description: "Aligning and restoring the flow of energy within the body’s seven main chakras.",
    image: "/images/services/Rectangle120.png",
  },
  // Add more services here...
];

export default function ServicesPage() {
  return (
    <div className={`font-sans text-gray-800 ${poppins.className}`}>
      {/* Banner Section */}
      {/* Banner Section */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Healing Banner"
          fill
          className="object-cover w-full"
        />

        {/* Centered "SERVICES" Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-white text-6xl font-bold  tracking-tight drop-shadow-md ${poppins.className} font-medium`}>
            Services
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


      {/* Heading */}
      <div className="text-center my-12">
        {/* <h2 className="text-4xl font-semibold text-[#663090]">Services</h2> */}
      </div>

      {/* Grid Section */}
      {/* <div className="px-4 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.price}</p>
                <p className="mt-2 text-sm text-gray-500">{service.description}</p>
              </div>
              <button className="mt-4 bg-white border border-purple-600 text-purple-600 hover:bg-purple-100 py-2 px-4 rounded-md transition duration-200">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div> */}
      <div className="px-4 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 pb-16">
  {services.map((service, index) => (
    <ProductCardWebsite
      key={index}
      title={service.title}
      price={service.price}
      description={service.description}
      image={service.image}
    />
  ))}
</div>

    </div>
  );
}
