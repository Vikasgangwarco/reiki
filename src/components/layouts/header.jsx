'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler for dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/our-services' },
    { name: 'Training/Courses', href: '/training-courses' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'Events', href: '/upcoming-events' },
    { name: 'About', href: '/about-us' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/lets-connect' },
  ];

  return (
    <header className={`sticky top-0 z-20 px-10 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-sm py-1 shadow-md' : 'bg-white py-6 shadow-sm'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo1.png" alt="Logo" className="h-15 w-15 object-contain" />
        </Link>

        {/* Nav & Icons */}
        <div className="flex flex-row">
          {/* Navigation Links */}
          <nav
            className={`hidden md:flex space-x-8 items-center font-medium ${poppins.className} font-semibold text-gray-800`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-purple-600 ${pathname === link.href ? 'text-purple-600 underline underline-offset-4' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons & Avatar */}
          <div className={`flex items-center gap-5 ml-6 ${poppins.className}`}>
            <FaYoutube className="text-[#AFAFAF] size-6 cursor-pointer" />
            <RiInstagramFill className="text-[#AFAFAF] size-7 cursor-pointer" />
            <FaFacebook className="text-[#AFAFAF] size-6 cursor-pointer" />

            {/* Avatar with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="bg-[#8044AF] text-white w-8 h-8 flex items-center justify-center rounded-full text-xl font-bold cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                J
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-black/85 text-white rounded-md shadow-lg py-2 z-30">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-800 transition">Profile</Link>
                  <Link href="/login" className="block px-4 py-2 hover:bg-gray-800 transition">Login</Link>
                  <Link href="/signup" className="block px-4 py-2 hover:bg-gray-800 transition">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
