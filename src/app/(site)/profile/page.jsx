'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { ChevronDown, ChevronUp } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function TrainingProfilePage() {
  const [showHistory, setShowHistory] = useState(true);

  return (
    <div className={`min-h-screen bg-white p-6 md:p-10 ${poppins.className}`}>
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#8044AF] flex items-center justify-center text-white text-4xl font-semibold">
              J
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold text-[#8044AF]">Jasmine Kaur</h2>
              <p className="text-sm text-[#9B9B9B]">Full Name</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-[#757575]">
            <div className="border-t pt-3">
              <p className="text-[#9B9B9B]">Gender</p>
              <p>Female</p>
            </div>
            <div>
              <p className="text-[#9B9B9B]">DOB</p>
              <p>09/03/1997</p>
            </div>
            <div>
              <p className="text-[#9B9B9B]">Place</p>
              <p>Narmadapuram, MP</p>
            </div>
            <div>
              <p className="text-[#9B9B9B]">Country</p>
              <p>India</p>
            </div>
            <div>
              <p className="text-[#9B9B9B]">Phone No.</p>
              <p>+91 0000000000</p>
            </div>
            <div>
              <p className="text-[#9B9B9B]">Email ID</p>
              <p>JasmineKaur@gmail.com</p>
            </div>
            <div>
              <p className="text-[#9B9B9B]">Password</p>
              <p>•••••••••••••••</p>
              <button className="text-sm text-[#8044AF] hover:underline">Reset</button>
            </div>
          </div>
        </div>

        {/* Booking History Section */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
          {/* Toggle Header */}
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex justify-between items-center w-full bg-[#EDE1F5] text-[#8044AF] text-sm px-4 py-2 rounded-md font-medium"
          >
            Booking History
            {showHistory ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showHistory && (
            <div className="mt-6 space-y-6">
              {/* Booking 1 - Upcoming */}
              <div className="border-b pb-6 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold text-[#8044AF]">Spirit Release</h3>
                  <span className="text-xs text-[#757575] flex items-center gap-1">
                    Service ⚠️
                  </span>
                </div>
                <p className="text-sm text-[#757575]">Rs 1,110</p>
                <p className="text-sm text-[#9B9B9B]">
                  Scheduled date & time - 19/04/2025 & 09:00 IST
                </p>
                <p className="text-xs text-[#A774D3]">Order placed - 05/04/2025</p>
                <button className="mt-2 px-4 py-2 border border-[#8044AF] text-[#8044AF] rounded-md hover:bg-[#EDE1F5]">
                  Rebook
                </button>
              </div>

              {/* Booking 2 - Completed */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold text-[#8044AF]">Spirit Release</h3>
                  <span className="text-xs text-[#757575] flex items-center gap-1">
                    Service ✅
                  </span>
                </div>
                <p className="text-sm text-[#757575]">Rs 1,110</p>
                <p className="text-sm text-[#9B9B9B]">
                  Scheduled date & time - 09/03/2025 & 15:00 IST
                </p>
                <p className="text-xs text-[#A774D3]">Order placed - 04/03/2025</p>
                <div className="flex gap-3 mt-2">
                  <button className="px-4 py-2 border border-[#8044AF] text-[#8044AF] rounded-md hover:bg-[#EDE1F5]">
                    Review
                  </button>
                  <button className="px-4 py-2 border border-[#8044AF] text-[#8044AF] rounded-md hover:bg-[#EDE1F5]">
                    Rebook
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
