'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ConsultationCardWebsite({ title, description, price, image, className = '' }) {
  return (
    <div className={`h-full rounded-lg bg-white shadow-md overflow-hidden flex flex-col p-4 ${className}`}>
      {/* Image with inner padding and rounded corners */}
      {/* <div className="w-full relative rounded-md overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="object-cover rounded-md w-full h-auto"
        />
      </div> */}
      <div className="w-full relative rounded-md overflow-hidden mb-4">
        <Image
          src= "/images/Rectangle122.png"
          alt={title}
          width={500}
          height={300}
          className="object-cover rounded-md w-full h-auto"
        />
      </div>
      {/* <div className="w-full aspect-[4/2.3] relative">
        <Image
          src="/images/Rectangle122.png"
          alt={title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div> */}
      {/* "/images/Rectangle122.png" */}

      {/* Card content */}
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-semibold text-center text-black mb-4">
          {title}
        </h3>

        <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed border-b pb-5">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-gray-800">{price}</span>
          <button className="text-[#8044af] border border-[#8044af] px-6 py-2 rounded-md font-medium hover:bg-[#f2e7fc] transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

ConsultationCardWebsite.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};
