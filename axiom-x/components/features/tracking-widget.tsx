"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackingSchema, type TrackingFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface TrackingItem {
  id: string;
  dateOfLoading: string;
  category: string;
  route: string;
  status: "In-Transit" | "Stored" | "Delivered";
}

// Mock tracking data
const mockTrackingData: TrackingItem[] = [
  { id: "TRK112459", dateOfLoading: "2025-02-15", category: "Electronics", route: "Air-Dxb", status: "In-Transit" },
  { id: "TRK70012", dateOfLoading: "2025-02-18", category: "Furniture", route: "RdyJub", status: "Stored" },
  { id: "TRK316478", dateOfLoading: "2025-02-20", category: "Electronics", route: "Air-Jvk", status: "In-Transit" },
  { id: "TRK0012Y4", dateOfLoading: "2025-02-03", category: "Beauty", route: "Air-Sing", status: "In-Transit" },
  { id: "TRK567090", dateOfLoading: "2025-01-25", category: "Books", route: "Day-Jvk", status: "Stored" },
  { id: "TRK316378", dateOfLoading: "2025-01-03", category: "Apparel", route: "Sky-Msk", status: "Delivered" },
];

// Chart data
const chartData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 80 },
  { month: "May", value: 55 },
  { month: "Jun", value: 70 },
];

const statusColors = {
  "In-Transit": "bg-blue-100 text-blue-700",
  "Stored": "bg-yellow-100 text-yellow-700",
  "Delivered": "bg-green-100 text-green-700",
};

export function TrackingWidget() {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const form = useForm<TrackingFormData>({
    resolver: zodResolver(trackingSchema),
    defaultValues: {
      trackingNumber: "",
    },
  });

  async function onSubmit(data: TrackingFormData) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowResults(true);
    setIsLoading(false);
  }

  const maxChartValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="bg-neutral-light rounded-2xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-bold text-primary-dark mb-2">
        Real-time Tracking for your Shipments
      </h3>
      <p className="text-sm text-gray-500 mb-4">Tracking Number</p>

      {/* Search Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="* enter the tracking number provided by the company"
              {...form.register("trackingNumber")}
              className="h-12 bg-white border-gray-200 focus:border-primary focus:ring-primary text-sm"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="h-12 px-6 bg-primary hover:bg-primary-forest"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </Button>
        </div>
      </form>

      {/* Results Table */}
      <AnimatePresence>
        {showResults && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {/* Tracking List */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary-dark mb-3">
                Tracking List
              </h4>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left p-3 font-medium text-gray-500">ID</th>
                        <th className="text-left p-3 font-medium text-gray-500">Date of Loading</th>
                        <th className="text-left p-3 font-medium text-gray-500">Category</th>
                        <th className="text-left p-3 font-medium text-gray-500">Route</th>
                        <th className="text-left p-3 font-medium text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTrackingData.map((item, index) => (
                        <tr
                          key={item.id}
                          className={cn(
                            "border-b border-gray-50",
                            index % 2 === 0 ? "bg-gray-50/50" : ""
                          )}
                        >
                          <td className="p-3 font-mono text-xs text-primary-dark">
                            {item.id}
                          </td>
                          <td className="p-3 text-gray-600">{item.dateOfLoading}</td>
                          <td className="p-3 text-gray-600">{item.category}</td>
                          <td className="p-3 text-gray-600">{item.route}</td>
                          <td className="p-3">
                            <span
                              className={cn(
                                "px-2 py-1 rounded-full text-xs font-medium",
                                statusColors[item.status]
                              )}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Shipment Statistics Chart */}
            <div>
              <h4 className="text-sm font-semibold text-primary-dark mb-3">
                Shipment Statistics
              </h4>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-end justify-between gap-2 h-32">
                  {chartData.map((item) => (
                    <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-primary rounded-t-sm transition-all hover:bg-primary-forest"
                        style={{
                          height: `${(item.value / maxChartValue) * 100}%`,
                          minHeight: "8px",
                        }}
                      />
                      <span className="text-xs text-gray-500">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
