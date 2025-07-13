'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Poppins } from 'next/font/google';

import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function BookPage() {
  const router = useRouter();

  return (
    <div className={`min-h-screen w-full bg-white flex flex-col justify-between ${poppins.className}`}>
      {/* Back Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-[#8044AF] hover:text-[#9657C9] transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium text-sm">Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center px-6 py-10 gap-10 max-w-7xl mx-auto w-full flex-grow">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          {/* Service Card */}
          <div className="flex gap-4">
            <Image src="/images/Rectangle130.png" alt="Spirit Release" width={220} height={220} className="rounded-md object-cover" />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Spirit release</h2>
              <p className="text-[#9B9B9B] text-sm">
                Service - "Free yourself from unwanted energies and restore peace with our Spirit Release services."
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-medium">Rs 11,000/session</p>
                <Trash2 className="text-[#9657C9] w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex gap-4">
            <div className="bg-[#EDE1F5] px-4 py-2 rounded-md text-center">
              <p className="text-sm font-medium text-[#8044AF]">21</p>
              <p className="text-xs text-[#9B9B9B]">mar</p>
            </div>
            <div className="bg-[#EDE1F5] px-4 py-2 rounded-md text-center">
              <p className="text-sm font-medium text-[#8044AF]">03:00</p>
              <p className="text-xs text-[#9B9B9B]">am</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-1">
            <h3 className="font-semibold text-base">Order summary</h3>
            <div className="text-sm text-[#757575]">Spirit release (service) - 1 session</div>
            <div className="flex justify-between text-sm text-[#757575]">
              <span>Price</span>
              <span>Rs 11,000</span>
            </div>
            <div className="flex justify-between text-sm text-[#757575]">
              <span>Tax</span>
              <span>Rs 110</span>
            </div>
            <div className="flex justify-between font-semibold text-sm">
              <span>Total price</span>
              <span>Rs 11,110</span>
            </div>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="w-px bg-[#E0E0E0] hidden lg:block" />

        {/* Right Side - Payment Info */}
        <div className="flex-1 flex flex-col space-y-6">
          <h3 className="font-semibold text-base">Payment Information</h3>

          {/* Payment Icons */}
          {/* <div className="flex flex-wrap gap-3">
            {['mastercard', 'paypal', 'phonepe', 'google', 'paytm', 'shield'].map((icon, idx) => (
              <div
                key={idx}
                className="p-2 rounded-md shadow-md bg-white"
              >
                <Image
                  src={`/icons/${icon}.png`}
                  alt={icon}
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div> */}
          {/* <div className="flex flex-wrap gap-3">
  {['/images/Icon_component.png', '/images/Icon_component1.png', '/images/Icon_component1.png'].map((src, index) => (
    <div
      key={index}
      className="relative w-12 h-12  rounded-md shadow-md bg-white"
    >
      <Image
        src={src}
        alt="icon"
        fill
        className="object-contain"
      />
    </div>
  ))}
</div> */}
<div className="flex flex-wrap gap-3">
  {/* {['/images/Icon_component.png', '/images/Icon_component(1).png', '/images/Icon_component(2).png' , '/images/Icon_component(3).png' , '/images/Icon_component(4).png' , '/images/Icon_component(5).png' ,].map((src, index) => ( */}
    {['/images/Icon_componen.png', ].map((src, index) => (

    <Image
      key={index}
      src={src}
      alt="payment-icon"
      width={60}
      height={60}
      className="rounded-md shadow-md object-cover bg-white "
    />
  ))}
</div>





          {/* Card Details Form */}
          <input
            type="text"
            placeholder="card number"
            className="bg-[#EDE1F5] px-4 py-2 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Name on the card"
            className="bg-[#EDE1F5] px-4 py-2 rounded-md outline-none"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Expiry"
              className="bg-[#EDE1F5] px-4 py-2 rounded-md flex-1 outline-none"
            />
            <input
              type="text"
              placeholder="CVV"
              className="bg-[#EDE1F5] px-4 py-2 rounded-md flex-1 outline-none"
            />
          </div>

          {/* Pay Buttons */}
          <button className="bg-[#8044AF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#9657C9] transition">
            Continue to Pay
          </button>
          <p className="text-center text-sm text-[#9B9B9B]">or pay later after service</p>
          <button className="border border-[#8044AF] text-[#8044AF] px-6 py-3 rounded-md font-medium hover:bg-[#EDE1F5] transition">
            Pay Offline
          </button>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-[#A774D3] text-white px-6 md:px-24 py-5 text-sm font-poppins">
        <div className="max-w-screen-xl mx-auto">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> */}
          <div className="flex flex-row justify-between">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src="/logo1.png" alt="Logo" className="w-8 h-8 rounded-full " />
                <h3 className="font-semibold text-base leading-tight">
                  Reiki Healing Heaven
                </h3>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-[14px]">
                <ImPhone />
                +91 7895643222
              </div>
              <div className="flex items-center gap-2 text-white/90 text-[14px]">
                <MdEmail />
                aayushiwork0903@gmail.com
              </div>
              <div className="flex items-center gap-2 text-white/90 text-[14px]">
                <FaLocationDot className="" />
                <div>
                  Rishikesh <br />
                  Flat# 209 Block-C Deecon Valley
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-[14px]">
              <h3 className="font-semibold text-[16px] mb-3">Navigation</h3>
              <ul className="space-y-2 text-white/90">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Training/courses</a></li>
                <li><a href="#">Consultation</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>

            {/* Quick Link */}
            <div className="text-[14px]">
              <h3 className="font-semibold text-[16px] mb-3">Quick link</h3>
              <ul className="space-y-1 text-white/90">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms & conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/100 mt-2 pt-4 text-center text-sm text-white/90">
            © 2019 <a href="#" className="underline">Reiki Healing Heaven</a>. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
