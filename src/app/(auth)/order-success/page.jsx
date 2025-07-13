'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Poppins } from 'next/font/google';

import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function OrderSuccessPage() {
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
      <div className="flex flex-col lg:flex-row items-stretch justify-center px-6 py-10 gap-10 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Left Side - Fully Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 text-green-600 bg-green-100 rounded-full p-1.5" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#8044AF]">
              Your Booking is Confirmed!
            </h1>
            <p className="text-[#9657C9] text-md">
              Thank you for the booking! Your journey to healing and balance has begun.
            </p>
            <button
              onClick={() => router.push('/')}
              className="bg-[#8044AF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#9657C9] transition"
            >
              Go Back to Home Page
            </button>
          </div>
        </div>

        {/* Right Side with Vertical Line */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 border-l border-[#E0E0E0]">
          <Image
            src="/images/order_success.png"
            alt="Meditation"
            width={300}
            height={300}
            className="mx-auto mb-4"
          />
          <p className="text-[#757575] text-sm max-w-md">
            Check your email for confirmation and session details. If you have any questions or need to reschedule, feel free to contact us. We look forward to guiding you on this path!
          </p>
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
            <FaLocationDot  className=""/>
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
