"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/lib/constants";

export function ServicesMobile() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
      defaultValue={services[0].id}
    >
      {services.map((service) => (
        <AccordionItem
          key={service.id}
          value={service.id}
          className="border border-gray-200 rounded-xl px-4 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5 transition-colors"
        >
          <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-4">
            {service.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="pb-4 space-y-4">
              {/* Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              {service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
