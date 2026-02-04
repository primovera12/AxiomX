"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, Globe, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnimatedElement } from "@/components/shared/section-wrapper";

import { contactSchema, type ContactFormData } from "@/lib/validations";

const services = [
  "Last Mile Delivery",
  "Warehousing & Inventory",
  "Call Center Support",
  "Back Office Services",
  "Value-Added Services (VAS)",
  "Upselling Revenue Programs",
];

const contactInfo = [
  {
    icon: Globe,
    title: "Global Presence",
    value: "UAE",
    href: null,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@axiomxgroup.com",
    href: "mailto:info@axiomxgroup.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+971 4 3101 010",
    href: "tel:+97143101010",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      toast.success("Message sent successfully! We'll be in touch soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="pt-[50px] pb-[70px] md:pt-[80px] md:pb-[80px] lg:pt-0 lg:pb-[100px]">
      <div className="container-axiom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Info */}
          <AnimatedElement variant="fadeUp" className="space-y-6 md:space-y-8">
            <div>
              <h2
                className="text-[32px] md:text-[36px] lg:text-[42px] font-bold text-[#19342c] leading-tight mb-4"
                style={{ fontFamily: "'Alexandria', sans-serif" }}
              >
                Let&apos;s talk scale.
              </h2>
              <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-600 leading-relaxed max-w-md">
                Whether you&apos;re looking to optimize delivery, centralize
                operations, or unlock new revenue — Axiom X is your growth
                partner.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-5 pt-2">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white shadow-sm text-[#3f7537] ring-1 ring-gray-200">
                      <item.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#19342c] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 mt-1 hover:text-[#3f7537] transition-colors text-[15px]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 mt-1 text-[15px]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Right Column - Form Card */}
          <AnimatedElement variant="fadeUp" delay={0.15}>
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Decorative blur */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4fb50]/20 rounded-full blur-2xl pointer-events-none" />

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 relative z-10">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="h-11 sm:h-12 bg-gray-50 border-gray-300 focus:border-[#3f7537] focus:ring-[#3f7537] text-[14px] sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="h-11 sm:h-12 bg-gray-50 border-gray-300 focus:border-[#3f7537] focus:ring-[#3f7537] text-[14px] sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            className="h-11 sm:h-12 bg-gray-50 border-gray-300 focus:border-[#3f7537] focus:ring-[#3f7537] text-[14px] sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                          Service Interested In
                        </FormLabel>
                        <FormControl>
                          <select
                            className="flex h-11 sm:h-12 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-[14px] sm:text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-[#3f7537] focus:ring-offset-2 focus:border-[#3f7537] disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                          What&apos;s on your mind?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project or requirements..."
                            className="min-h-[100px] sm:min-h-[120px] bg-gray-50 border-gray-300 focus:border-[#3f7537] focus:ring-[#3f7537] resize-none text-[14px] sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 sm:h-14 bg-[#3f7537] hover:bg-[#19342c] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-[14px] sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
