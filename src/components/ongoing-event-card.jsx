'use client';

import Image from 'next/image';

export default function OngoingEventCardWebsite({
  className = '',
  isUpcoming = false,
}) {
  const badgeColor = isUpcoming ? 'bg-[#D9D6FF] text-[#2E2882]' : 'bg-[#FFE3AC] text-[#926B18]';
  const buttonText = isUpcoming ? 'Book Your Seat' : 'Join';
  const buttonBorder = isUpcoming ? 'border-[#2E2882] text-[#2E2882] hover:bg-[#E6E6FB]' : 'border-[#8044AF] text-[#8044AF] hover:bg-[#F3EAFB]';

  return (
    <div className={`max-w-md w-full bg-white rounded-[10px] shadow-md p-4 ${className}`}>
      {/* Image */}
      <div className="relative w-full h-[180px] rounded-[10px] overflow-hidden">
        <Image
          src="/images/OngoingEvent.png"
          alt="Reiki Healing Program"
          fill
          className="object-cover"
        />
      </div>

      {/* Badge */}
      <div className="relative -mt-5 flex justify-center z-10">
        <div className={`${badgeColor} border-4 border-white font-medium text-sm px-4 py-1.5 rounded-full shadow-sm`}>
          Reiki Healing Program
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 text-center text-[#4B5563] text-[15px] leading-relaxed px-2">
        Experience deep relaxation and energy healing at our Reiki Healing Event.
        Let go of stress, restore balance, and rejuvenate your mind, body, and
        spirit. Perfect for beginners and practitioners alike!
      </div>

      {/* Date */}
      <div className="flex items-center justify-center gap-2 mt-4 pb-3 border-b border-[#E5E7EB] text-[#4B5563] text-sm">
        <Image
          src="/icon-component.svg"
          alt="Calendar"
          width={18}
          height={18}
        />
        <span>July 02, 2025 at 03:00 pm</span>
      </div>

      {/* Price + Button */}
      <div className="flex items-center justify-between pt-4 px-2 text-[#262626] text-[15px]">
        <span className="font-semibold">Rs 1,500/seat</span>
        <button className={`px-6 py-2 rounded-md border font-medium transition-all duration-200 ${buttonBorder}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
