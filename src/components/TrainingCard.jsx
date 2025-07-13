"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const TrainingCard = ({ image, title, description, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            {/* <div className="flex-shrink-0 w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div> */}
            <div className="w-[270px] h-[270px] overflow-hidden">
                <Image
                    src="/images/Rectangle121.png"
                    alt={title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>



            {/* Content Section */}
            <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">{title}</h2>
                    <p className="text-gray-600 text-base mb-4">{description}</p>

                    <div className="space-y-3">
                        {options.map((option, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name={`option-${title}`}
                                        className="accent-purple-600 w-5 h-5"
                                        checked={selectedOption === idx}
                                        onChange={() => setSelectedOption(idx)}
                                    />
                                    <span className="text-gray-700 text-base">{option.label}</span>
                                </label>
                                <span className="text-gray-800 text-base font-medium">{option.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-5 flex justify-end">
                    <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors duration-200 px-6 py-2 rounded-lg font-medium">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

TrainingCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            price: PropTypes.string,
        })
    ).isRequired,
};

export default TrainingCard;
