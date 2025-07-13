'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen bg-[#D9C2EC] flex items-center justify-center">
      <div className="w-[80vw] bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-semibold text-[#8044AF]">Sign Up</h2>
        <h3 className="text-center text-xl font-bold text-black">Unlock the Energy of Wellness!</h3>
        <p className="text-center text-[#9B9B9B] text-lg leading-relaxed">
          Sign up today and begin your path to balance and inner peace.
        </p>

        <form className="space-y-4 px-48">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
          />
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-36 bg-[#9657C9] text-white text-base py-2 rounded-md font-semibold hover:bg-[#8044AF] transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-[#757575]">
          Already have an account?{' '}
          <a href="#" className="text-[#9657C9] font-medium hover:underline">Sign In.</a>
        </p>
      </div>
    </div>
  );
}
