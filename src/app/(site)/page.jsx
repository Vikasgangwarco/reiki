import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import ReikiSection from "../../components/ReikiSection";
import ReikiSection2 from "../../components/ReikiSection2";
import LatestVideosSection from "../../components/ReikiYoutube";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],

});

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      {/* <div className="bg-[#D9C2EC] py-6 px- w- grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-16 text-center align ">
          <h1 className={`text-5xl text-[#663090] ${poppins.className} font-medium`}>Reiki Healing Heaven</h1>
          <p className={`text-2xl text-[#8044AF] ${poppins.className} font-medium`}>Harmonize mind, body & spirit through reiki. <br /> Restore your natural balance with reiki healing. <br /> Transform your wellbeing with Reiki.</p>
          <button className={`bg-[#9657C9] hover:bg-purple-800 ${poppins.className} font-medium text-white px-8 py-2.5 text-2xl rounded-md`}>Book Now</button>
        </div>
        <div className=" md:mt-0  relative w-full  h-[340px]">
          <Image src="/images/lina-trochez-ktPKyUs3Qjs-unsplash1.png" alt="Healing Image"  fill className="object-cover rounded-" />
        </div>
      </div> */}
      <div className="bg-[#D9C2EC] py-6 w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="space-y-14 text-center px-6">
          <h1 className={`text-5xl text-[#663090] ${poppins.className} font-medium`}>
            Reiki Healing Heaven
          </h1>
          <p className={`text-2xl text-[#8044AF] tracking-normal ${poppins.className} font-medium`}>
            Harmonize mind, body & spirit through reiki. <br />
            Restore your natural balance with reiki healing. <br />
            Transform your wellbeing with Reiki.
          </p>
          <button className={`bg-[#9657C9] hover:bg-purple-800 ${poppins.className} font-medium text-white px-8 py-2.5 text-2xl rounded-md`}>
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[340px] md:mt-0 overflow-hidden">
          <Image
            src="/images/lina-trochez-ktPKyUs3Qjs-unsplash1.png"
            alt="Healing Image"
            fill
            className="object-cover rounded-none"
          />

          {/* Floating Search Bar */}
          {/* <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md flex items-center px-4 py-2 rounded-md shadow-md">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-32 md:w-48"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div> */}

          {/* <div className="absolute top-4 right-4">
            <div className="flex items-center bg-gradient-to-l from-[#bfbfbf99] to-[#ffffff1a] backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none placeholder-white text-white w-32 md:w-48 text-sm"
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
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div> */}

          {/* Floating Search Bar */}
          <div className="absolute top-2 right-2">
            <div className={`flex items-center ${poppins.className} bg-[#AFAFAF] backdrop-blur-[10px] opacity-60 rounded-md px-5 py-2`}>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-white text-base w-24 md:w-40 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[17px] w-[17px] text-white ml-2"
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
      </div>



      {/* Offer Section */}
      <section className="text-center py-8 px-8">
        <h2 className={`text-3xl text-black font-semibold my- ${poppins.className}`}  >What we offer?</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-10 ">
          {['Maternal\nNurturing', 'Reiki \n Healing', 'Future \n Prediction', 'Vastu \n Map', 'Lama \n Fera', 'Spirit \n Release', 'Marriage \n Prediction', 'Animal \n Healing', 'Chakra \n Balancing', 'Dowsing \n Prediction', 'Tarot \n Cards', 'Past Life \n Regression'].map((service, index) => (
            <div key={index} className="bg-white  shadow-md hover:shadow-lg border-[1px] border-gray-50  rounded-lg py-2 px-4 space-x-3  text-sm flex flex-row">
              {/* <Image src={`/icons/${index + 1}.png`} alt={service} width={40} height={40} className="mx-auto mb-2" /> */}
              <Image src={`/images/Ellipse24_4.png`} alt={service} width={60} height={60} className="" />
              <div className=''>
                <p className={`whitespace-pre-line text-[#8044AF] text-start text-lg  `}>{service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-base mt-10 text-blue-500 underline  space-x-20  text-end">
          <Link className='hover:text-blue-700' href="/our-services">Services</Link>
          <Link className='hover:text-blue-700' href="/training-courses">Training/Courses</Link>
          <Link className='hover:text-blue-700' href="/consultation">Consultant</Link>
        </div>
      </section>

      <div className='mt-72'>
        <ReikiSection />
      </div>

      <div className='mt-72'>
        <ReikiSection2 />
      </div>

      {/* Banner Sections */}
      {/* {[1, 2].map((i) => (
        <div key={i} className="bg-purple-200 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src={`/banner${i}.jpg`} alt={`Banner ${i}`} width={400} height={300} className="rounded-md" />
          <div className="text-center md:text-left space-y-3">
            <p className="text-sm text-purple-800">Harmonize Mind, Body & Spirit Through Reiki Restore Your Natural Balance with Reiki Healing Transform Your Wellbeing with Reiki</p>
            <button className="bg-white border border-purple-700 text-purple-700 px-6 py-2 rounded hover:bg-purple-100">Explore</button>
          </div>
        </div>
      ))} */}



      {/* Testimonials */}
      {/* <section className="text-center py-12 bg-white">
        <h2 className={`text-3xl text-black font-semibold my- ${poppins.className}`}  >What Our Client Say?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-purple-100 p-6 rounded-md shadow">
              <p className="text-sm text-gray-700">The Reiki experience with Maa (Dr. Surabhi Sharma) was profound. During my first session, I felt waves of relaxation washing over areas where I’d been holding tension.</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="text-center py-12 bg-white">
        <h2 className={`text-3xl text-black font-semibold my- ${poppins.className}`}>
          What Our Client Say?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto px-10 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-md shadow"
              style={{
                background: "linear-gradient(to bottom, #DFD3FC 0%, #FFFFFF 100%)",
              }}
            >
              <p className={`text-lg text-[#757575] ${poppins.className} font-normal`}>
                The Reiki experience with Maa (Dr. Surabhi Sharma) was profound. During my first session, I felt waves of relaxation washing over areas where I’d been holding tension.
              </p>
            </div>
          ))}
        </div>

        <div className="text-base mt-10 text-blue-500 underline  space-x-20  text-end px-10">
          <Link className='hover:text-blue-700' href="/testimonials">Testimonials</Link>
        </div>
      </section>



      {/* Latest Videos */}
      {/* <section className="py-12 text-center">
        <h2 className={`text-3xl text-black font-semibold my- ${poppins.className}`}>
          Latest Videos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="relative">
              <Image src="/video-thumb.jpg" alt="Video" width={200} height={150} className="rounded-md" />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
                ▶️
              </button>
            </div>
          ))}
        </div>
        <div className="text-base mt-10 text-blue-500 underline  space-x-20  text-end px-10">
          <a className='hover:text-blue-700' href="#">Youtube Channel</a>
        </div>
      </section> */}

      <LatestVideosSection/>

    </div>
  );
}
