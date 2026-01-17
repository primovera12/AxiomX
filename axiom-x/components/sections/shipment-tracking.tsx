"use client";

import { useState } from "react";
import Image from "next/image";

// Sample tracking data from PDF
const trackingData = [
  {
    orderId: "#10201202312",
    date: "12.2.2024",
    category: "Medicine",
    destination: "KL Gate, Gate: H-K, India",
    status: "In Transit",
  },
  {
    orderId: "#10201202400",
    date: "12.3.2024",
    category: "Food",
    destination: "KL Gate, Gate: H-K, India",
    status: "Shipped",
  },
  {
    orderId: "#10201202301",
    date: "16.3.2024",
    category: "Electronics",
    destination: "KL Gate, Gate: H-K, India",
    status: "Delivered",
  },
  {
    orderId: "#10201202200",
    date: "18.3.2024",
    category: "Food",
    destination: "KL Gate, Gate: H-K, India",
    status: "Delivered",
  },
  {
    orderId: "#10201202100",
    date: "21.3.2024",
    category: "Electronics",
    destination: "KL Gate, Gate: H-K, India",
    status: "In Transit",
  },
];

// Chart data by filter type
const chartDataByFilter = {
  Year: [
    { month: "Jan", completed: 30, reject: 10 },
    { month: "Feb", completed: 20, reject: 8 },
    { month: "Mar", completed: 35, reject: 5 },
    { month: "Apr", completed: 25, reject: 12 },
    { month: "May", completed: 40, reject: 15 },
    { month: "Jun", completed: 70, reject: 20 },
    { month: "Jul", completed: 45, reject: 18 },
    { month: "Aug", completed: 38, reject: 10 },
    { month: "Sep", completed: 50, reject: 12 },
    { month: "Oct", completed: 35, reject: 8 },
    { month: "Nov", completed: 42, reject: 14 },
    { month: "Dec", completed: 55, reject: 16 },
  ],
  Month: [
    { month: "Week 1", completed: 15, reject: 3 },
    { month: "Week 2", completed: 22, reject: 5 },
    { month: "Week 3", completed: 18, reject: 4 },
    { month: "Week 4", completed: 25, reject: 6 },
  ],
  Week: [
    { month: "Mon", completed: 8, reject: 2 },
    { month: "Tue", completed: 12, reject: 3 },
    { month: "Wed", completed: 15, reject: 4 },
    { month: "Thu", completed: 10, reject: 2 },
    { month: "Fri", completed: 18, reject: 5 },
    { month: "Sat", completed: 6, reject: 1 },
    { month: "Sun", completed: 4, reject: 1 },
  ],
};

export function ShipmentTrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [activeFilter, setActiveFilter] = useState("Year");
  const [showResults, setShowResults] = useState(false);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Transit":
        return "text-[#db5e54]";
      case "Shipped":
        return "text-[#edc771]";
      case "Delivered":
        return "text-[#66c5a6]";
      default:
        return "";
    }
  };

  const handleTrackingSubmit = () => {
    if (trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  // Get chart data based on active filter
  const chartData = chartDataByFilter[activeFilter as keyof typeof chartDataByFilter];
  const maxValue = Math.max(...chartData.map((d) => d.completed + d.reject));

  return (
    <section className="pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-hidden">
      <div className="container-axiom">
        {/* Tracking Wrapper - Green Box - Responsive padding */}
        <div className="relative py-[30px] px-4 md:py-[40px] md:px-[40px] lg:py-[50px] lg:px-[60px] bg-[#519b66] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] mb-[30px] md:mb-[40px] lg:mb-[50px] mt-[40px] md:mt-[60px] lg:mt-[80px] overflow-hidden">
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

        {/* Tracking Table - Only shows after entering tracking number */}
        {showResults && (
          <>
            <div className="rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-4 md:p-[25px] lg:p-[30px] pb-[10px] border border-[#eee]">
              <div className="flex items-center justify-between mb-[10px]">
                <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#333] mb-0">
                  Tracking List
                </h2>
                <a
                  href="#"
                  className="text-[#edc771] no-underline text-[14px] md:text-[15px] lg:text-[16px] hover:underline"
                >
                  See All
                </a>
              </div>

              {/* Table - Responsive text */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[#eee]">
                      <th className="text-left pb-[10px] md:pb-[12px] text-[12px] md:text-[14px] lg:text-[16px] text-[#9ca3a9] font-medium">
                        Order Id
                      </th>
                      <th className="text-left pb-[10px] md:pb-[12px] text-[12px] md:text-[14px] lg:text-[16px] text-[#9ca3a9] font-medium">
                        Date of Loading
                      </th>
                      <th className="text-left pb-[10px] md:pb-[12px] text-[12px] md:text-[14px] lg:text-[16px] text-[#9ca3a9] font-medium">
                        Category
                      </th>
                      <th className="text-left pb-[10px] md:pb-[12px] text-[12px] md:text-[14px] lg:text-[16px] text-[#9ca3a9] font-medium">
                        Destination
                      </th>
                      <th className="text-left pb-[10px] md:pb-[12px] text-[12px] md:text-[14px] lg:text-[16px] text-[#9ca3a9] font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index < trackingData.length - 1
                            ? "border-b border-[#f5f5f5]"
                            : ""
                        }
                      >
                        <td className="py-[10px] md:py-[12px] lg:py-[15px] font-semibold text-[12px] md:text-[14px] lg:text-[16px]">{item.orderId}</td>
                        <td className="py-[10px] md:py-[12px] lg:py-[15px] text-[#767676] text-[12px] md:text-[14px] lg:text-[16px]">{item.date}</td>
                        <td className="py-[10px] md:py-[12px] lg:py-[15px] font-semibold text-[12px] md:text-[14px] lg:text-[16px]">{item.category}</td>
                        <td className="py-[10px] md:py-[12px] lg:py-[15px] font-semibold text-[12px] md:text-[14px] lg:text-[16px]">
                          {item.destination}
                        </td>
                        <td className={`py-[10px] md:py-[12px] lg:py-[15px] font-semibold text-[12px] md:text-[14px] lg:text-[16px] ${getStatusClass(item.status)}`}>
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shipment Stats Card - Responsive */}
            <div className="bg-white rounded-[16px] md:rounded-[20px] lg:rounded-[24px] p-4 md:p-[25px] lg:p-[30px] border border-[#eee] mt-[25px] md:mt-[32px] lg:mt-[40px]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 mb-[15px] md:mb-[20px] pb-[12px] md:pb-[15px] border-b border-[#eee]">
                <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#333] mb-0">
                  Shipment Statistics
                </h2>

                {/* Legend - Responsive */}
                <div className="flex gap-[10px] md:gap-[15px] text-[12px] md:text-[13px] lg:text-[14px] text-[#666]">
                  <span className="flex items-center gap-[5px]">
                    <span className="inline-block w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#19342c]"></span>
                    Completed
                  </span>
                  <span className="flex items-center gap-[5px]">
                    <span className="inline-block w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#d4fb50]"></span>
                    Reject
                  </span>
                </div>

                {/* Time Filters - Responsive */}
                <div className="flex gap-[3px] md:gap-[5px] border border-[#eee] rounded-[25px] py-[3px] md:py-[4px] px-[4px] md:px-[6px] bg-[#f5f5f6] w-fit">
                  {["Week", "Month", "Year"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`border-none py-[4px] md:py-[6px] px-[12px] md:px-[16px] lg:px-[20px] text-[12px] md:text-[13px] lg:text-[14px] cursor-pointer rounded-[25px] transition-colors duration-200 ${
                        activeFilter === filter
                          ? "bg-[#2e7d32] text-white font-bold"
                          : "bg-transparent text-black hover:bg-[#f5f5f5]"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Container - Responsive height */}
              <div className="h-[220px] md:h-[300px] lg:h-[400px] relative">
                {/* Y-axis dashed lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-[30px] md:py-[35px] lg:py-[40px] pointer-events-none">
                  {[100, 75, 50, 25, 0].map((value) => (
                    <div key={value} className="flex items-center gap-1 md:gap-2 w-full">
                      <span className="text-[10px] md:text-[11px] lg:text-[12px] text-[#999] w-[20px] md:w-[25px] lg:w-[30px] text-right">{value}</span>
                      <div className="flex-1 border-t border-dashed border-[#e0e0e0]"></div>
                    </div>
                  ))}
                </div>

                {/* Bar chart - Responsive sizing */}
                <div className="flex items-end justify-around h-full pt-[30px] md:pt-[35px] lg:pt-[40px] pb-[20px] md:pb-[25px] lg:pb-[30px] pl-[25px] md:pl-[32px] lg:pl-[40px]">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-[6px] md:gap-[8px] group relative">
                      {/* Hover tooltip */}
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#19342c] text-white text-[10px] md:text-[11px] lg:text-[12px] py-[3px] md:py-[4px] px-[6px] md:px-[8px] rounded-[4px] whitespace-nowrap z-10">
                        Completed: {data.completed} | Reject: {data.reject}
                      </div>

                      {/* Stacked bars - Responsive bar width */}
                      <div className="flex items-end gap-0">
                        {/* Reject bar (light green) - LEFT */}
                        <div
                          className="w-[8px] md:w-[12px] lg:w-[16px] bg-[#d4fb50] rounded-t-full transition-all duration-300 hover:opacity-80 cursor-pointer"
                          style={{
                            height: `${(data.reject / maxValue) * 150}px`,
                          }}
                        ></div>
                        {/* Completed bar (dark green) - RIGHT */}
                        <div
                          className="w-[8px] md:w-[12px] lg:w-[16px] bg-[#19342c] rounded-t-full transition-all duration-300 hover:opacity-80 cursor-pointer"
                          style={{
                            height: `${(data.completed / maxValue) * 150}px`,
                          }}
                        ></div>
                      </div>
                      {/* Month label */}
                      <span className="text-[10px] md:text-[11px] lg:text-[12px] text-[#666]">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
