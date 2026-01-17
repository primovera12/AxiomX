"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
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

import { contactSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const result = await submitContactForm(formData);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully! We'll be in touch soon.");
        form.reset();
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-primary-dark mb-2">
        Get in Touch
      </h3>
      <p className="text-gray-600 mb-6">
        Have questions? We&apos;d love to hear from you.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark font-medium">
                  Your Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Full Name Here"
                    className="h-12 bg-neutral-light border-transparent focus:border-primary focus:ring-primary"
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
                <FormLabel className="text-primary-dark font-medium">
                  Your Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Mail Here"
                    className="h-12 bg-neutral-light border-transparent focus:border-primary focus:ring-primary"
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
                <FormLabel className="text-primary-dark font-medium">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What's on your mind?"
                    className="min-h-[140px] bg-neutral-light border-transparent focus:border-primary focus:ring-primary resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary-forest text-white font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
