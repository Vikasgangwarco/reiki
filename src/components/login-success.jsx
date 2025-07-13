'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginSuccess({ name = 'Aayushi' }) {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 w-[80%] max-w-2xl text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src="/images/Vector.svg" // Make sure this file is in public folder
            alt="Login Success"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[#1A1A1A]">
          Welcome back, {name}! <span className="inline-block">🥳</span>
        </h2>
        <p className="text-[#9B9B9B] text-sm">
          You’re now logged in. Let’s get started!
        </p>

        <div className="space-y-4">
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full bg-[#9657C9] text-white font-medium py-3 rounded-md hover:bg-[#8044AF] transition"
          >
            Continue
          </button>

          <button
            onClick={() => router.push('/')}
            className="w-full border border-[#A774D3] text-[#8044AF] font-medium py-3 rounded-md hover:bg-[#EDE1F5] transition"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
