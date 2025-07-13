import Image from "next/image";

const ReikiSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-black">
            The Essence of Reiki Mastery
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-[#555] leading-relaxed max-w-xl">
            I’m Dr. Surabhi Sharma, a certified Reiki Grand Master, two-time
            winner of the prestigious International Reiki awards, dedicated to
            fostering healing and balance through energy work. My journey with
            Reiki began after experiencing its transformative effects firsthand,
            inspiring me to master this healing art and share it with others.
          </p>
          <button className="mt-6 bg-[#9657c9] hover:bg-purple-700 text-white text-[16px] md:text-[18px] font-medium px-6 py-3 rounded-lg transition duration-300">
            Heal with Reiki
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-sm mx-auto">
          <div className="row-span-2">
            <Image
              src="/images/Rectangle127.png"
              alt="Main"
              width={300}
              height={400}
              className="rounded-tl-[30px] object-cover w-full h-full"
            />
          </div>
          <div>
            <Image
              src="/images/Rectangle125.png"
              alt="Image 1"
              width={140}
              height={140}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <Image
              src="/images/Rectangle126.png"
              alt="Image 2"
              width={140}
              height={140}
              className="rounded-br-[30px] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReikiSection;
