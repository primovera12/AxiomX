"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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

import { careersSchema, type CareersFormData } from "@/lib/validations";
import { submitCareersForm } from "@/app/actions/careers";

interface CareersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CareersModal({ open, onOpenChange }: CareersModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CareersFormData>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    },
  });

  async function onSubmit(data: CareersFormData) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("message", data.message);

      const result = await submitCareersForm(formData);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Application submitted successfully! We'll be in touch soon.");
        form.reset();
        onOpenChange(false);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[520px]">
        <DialogHeader>
          <DialogTitle
            className="text-[20px] sm:text-[24px] md:text-[28px] font-bold pr-8"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            Join the <span className="text-[#3f7537]">X</span> Team
          </DialogTitle>
          <DialogDescription className="text-[13px] sm:text-[14px] md:text-[15px]">
            Ready to build the future of operations? Fill out the form below and we&apos;ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 sm:p-6 pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        className="h-10 sm:h-12 bg-gray-50 border-gray-400 focus:border-[#19342c] focus:ring-[#19342c] text-[14px] sm:text-base"
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
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-10 sm:h-12 bg-gray-50 border-gray-400 focus:border-[#19342c] focus:ring-[#19342c] text-[14px] sm:text-base"
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
                        className="h-10 sm:h-12 bg-gray-50 border-gray-400 focus:border-[#19342c] focus:ring-[#19342c] text-[14px] sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#19342c] font-medium text-[13px] sm:text-sm">
                      Position Applying For
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Operations Manager, Logistics Coordinator"
                        className="h-10 sm:h-12 bg-gray-50 border-gray-400 focus:border-[#19342c] focus:ring-[#19342c] text-[14px] sm:text-base"
                        {...field}
                      />
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
                      Why do you want to join Axiom X?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself and why you'd be a great fit..."
                        className="min-h-[100px] sm:min-h-[120px] bg-gray-50 border-gray-400 focus:border-[#19342c] focus:ring-[#19342c] resize-none text-[14px] sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 sm:h-12 bg-[#3f7537] hover:bg-[#19342c] text-white font-semibold rounded-full mt-4 sm:mt-6 transition-all duration-300 text-[14px] sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
