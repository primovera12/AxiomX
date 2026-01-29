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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle
            className="text-[24px] md:text-[28px] font-bold"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            Join the <span className="text-[#3f7537]">X</span> Team
          </DialogTitle>
          <DialogDescription className="text-[14px] md:text-[15px]">
            Ready to build the future of operations? Fill out the form below and we&apos;ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#19342c] font-medium">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#19342c] focus:ring-[#19342c]"
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
                    <FormLabel className="text-[#19342c] font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#19342c] focus:ring-[#19342c]"
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
                    <FormLabel className="text-[#19342c] font-medium">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#19342c] focus:ring-[#19342c]"
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
                    <FormLabel className="text-[#19342c] font-medium">
                      Position Applying For
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Operations Manager, Logistics Coordinator"
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#19342c] focus:ring-[#19342c]"
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
                    <FormLabel className="text-[#19342c] font-medium">
                      Why do you want to join Axiom X?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself and why you'd be a great fit..."
                        className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-[#19342c] focus:ring-[#19342c] resize-none"
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
                className="w-full h-12 bg-[#19342c] hover:bg-[#3f7537] text-white font-semibold rounded-full mt-6 transition-all duration-300"
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
