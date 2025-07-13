import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
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
  );
}
