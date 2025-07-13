'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-screen h-screen bg-[#D9C2EC] flex items-center justify-center">
      <div className="w-[80vw] bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-semibold text-[#8044AF]">Log In</h2>
        <h3 className="text-center text-xl font-bold text-black">Welcome to Your Healing Space!</h3>
        <p className="text-center text-[#9B9B9B] text-lg leading-relaxed">
          Log in to access your journey towards balance, peace, and well-being.
        </p>

        <form className="space-y-4 px-64">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md bg-[#EDE1F5] placeholder-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#A774D3]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#757575]">
              <input type="checkbox" className="accent-[#8044AF] border-2 border-[#9657C9]" />
              Remember me
            </label>
            <a href="#" className="text-[#A774D3] hover:underline">Forgot password?</a>
          </div>

          <div className='flex justify-center'>
            <button
              type="submit"
              className="w-36 bg-[#9657C9] text-white text-base py-2 rounded-md font-semibold hover:bg-[#9657C9] transition"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-[#EDE1F5]"></div>
          <span className="mx-4 text-sm text-[#757575]">Or Sign in with</span>
          <div className="flex-grow h-px bg-[#EDE1F5]"></div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="flex items-center gap-2  rounded-md px-7 py-2 shadow hover:shadow-md transition text-sm">
            <FcGoogle /> Google
          </button>
          <button className="flex items-center gap-2  rounded-md px-7 py-2 shadow hover:shadow-md transition text-sm">
            <BsApple className="text-black" /> Apple ID
          </button>
          <button className="flex items-center gap-2  rounded-md px-7 py-2 shadow hover:shadow-md transition text-sm">
            <FaFacebookF className="text-[#1877F2]" /> Facebook
          </button>
        </div>

        <p className="text-center text-sm text-[#757575]">
          Don’t have an account?{' '}
          <a href="#" className="text-[#9657C9] font-medium hover:underline">Sign Up.</a>
        </p>
      </div>
    </div>
  );
}
