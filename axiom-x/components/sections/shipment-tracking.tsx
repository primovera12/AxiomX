"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedElement } from "@/components/shared/section-wrapper";

export function ShipmentTrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");

  // Placeholder - API integration pending
  const handleTrackingSubmit = () => {
    // TODO: Integrate with tracking API when documentation is available
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTrackingSubmit();
    }
  };

  return (
    <section className="pb-[40px] md:pb-[60px] lg:pb-[80px]">
      <div className="container-axiom">
        {/* Tracking Wrapper - Green Box - Responsive padding */}
        <AnimatedElement variant="slideUp">
        <div className="relative pt-[140px] pb-[30px] px-4 md:py-[40px] md:px-[40px] lg:py-[50px] lg:px-[60px] bg-[#519b66] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] mb-[30px] md:mb-[40px] lg:mb-[50px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {/* Mobile-only Bike Image - Shows before title with overflow effect */}
          <div className="sm:hidden -mt-[140px] mb-4 flex justify-center">
            <Image
              src="/images/bike.png"
              alt="Delivery-bike"
              width={450}
              height={290}
              className="w-[400px] h-auto"
            />
          </div>

          {/* Tracking Info */}
          <div className="relative z-10">
            <h3 className="text-[22px] md:text-[26px] lg:text-[32px] text-white font-semibold">
              Real-time Tracking for your Shipments
            </h3>

            {/* Tracking Code Input - Responsive layout */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-[20px] mt-[15px] md:mt-[20px] lg:mt-[25px]">
              <h4 className="text-[#d4fb50] m-0 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
                Tracking Number
              </h4>

              {/* White background input area - Responsive width */}
              <div className="bg-white rounded-[10px] flex items-center w-full md:w-auto">
                <input
                  type="text"
                  placeholder="- - - - - - -"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full md:w-[220px] lg:w-[280px] h-[44px] md:h-[48px] lg:h-[50px] py-2 md:py-[10px] px-3 md:px-[15px] lg:px-[20px] border-none text-[14px] md:text-[16px] lg:text-[18px] rounded-[10px] tracking-[6px] md:tracking-[8px] lg:tracking-[10px] font-medium outline-none bg-transparent"
                />
                <button
                  onClick={handleTrackingSubmit}
                  className="px-3 md:px-[15px] lg:px-[20px] py-2 md:py-[10px] bg-[#19342c] text-white text-[12px] md:text-[14px] rounded-[8px] mr-[5px] font-medium hover:bg-[#0f1f1a] transition-colors flex-shrink-0"
                >
                  Track
                </button>
              </div>
            </div>

            {/* Small instruction text at bottom-left */}
            <p className="text-white/70 text-[11px] md:text-[12px] mt-[20px] md:mt-[25px] lg:mt-[30px]">
              Enter your tracking number to view shipment status and details
            </p>
          </div>

          {/* Delivery Bike - Responsive sizing and positioning */}
          <Image
            src="/images/bike.png"
            alt="Delivery-bike"
            width={620}
            height={400}
            className="absolute bottom-[-50px] right-[-30px] w-[280px] md:bottom-[-70px] md:right-[-40px] md:w-[420px] lg:bottom-[-100px] lg:right-[-60px] lg:w-[620px] h-auto hidden sm:block"
          />
        </div>
        </AnimatedElement>

      </div>
    </section>
  );
}
