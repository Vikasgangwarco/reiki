'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 w-[80%] max-w-2xl text-center space-y-6">
        <h3 className="text-left text-[#1A1A1A] text-lg font-medium">
          Payment Confirmation
        </h3>

        <div className="flex justify-center">
          <Image
            src="/images/Vector(1).svg" // Make sure this green circle checkmark icon exists
            alt="Payment Success"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[#28A745]">
          Payment Successful!
        </h2>

        <p className="text-[#28A745] text-sm max-w-md mx-auto">
          Thank you for your payment! Your transaction was completed successfully. <br />
          If you have any questions, feel free to reach out.
        </p>

        <div className="pt-4">
          <button
            onClick={() => router.push('/dashboard')}
            className="w-full border border-[#9657C9] text-[#9657C9] font-medium py-3 rounded-md hover:bg-[#EDE1F5] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
