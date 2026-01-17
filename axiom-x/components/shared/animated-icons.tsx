"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCheckmarkProps {
  className?: string;
  size?: number;
  color?: string;
}

export function AnimatedCheckmark({
  className,
  size = 24,
  color = "currentColor",
}: AnimatedCheckmarkProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-primary", className)}
      initial="hidden"
      animate="visible"
    >
      {/* Circle */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="2"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 0.1 },
            },
          },
        }}
      />
      {/* Checkmark */}
      <motion.path
        d="M7 12.5l3 3 7-7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.3, ease: "easeInOut", delay: 0.4 },
              opacity: { duration: 0.1, delay: 0.4 },
            },
          },
        }}
      />
    </motion.svg>
  );
}

interface AnimatedSpinnerProps {
  className?: string;
  size?: number;
}

export function AnimatedSpinner({
  className,
  size = 24,
}: AnimatedSpinnerProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn("text-primary", className)}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.25"
      />
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="60"
        strokeDashoffset="45"
      />
    </motion.svg>
  );
}

interface AnimatedSuccessProps {
  className?: string;
  message?: string;
}

export function AnimatedSuccess({
  className,
  message = "Success!",
}: AnimatedSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("flex items-center gap-2", className)}
    >
      <AnimatedCheckmark size={20} />
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="text-sm font-medium"
      >
        {message}
      </motion.span>
    </motion.div>
  );
}

interface PulsingDotProps {
  className?: string;
  color?: string;
}

export function PulsingDot({ className, color = "bg-primary" }: PulsingDotProps) {
  return (
    <span className={cn("relative flex h-3 w-3", className)}>
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          color
        )}
      />
      <span
        className={cn("relative inline-flex rounded-full h-3 w-3", color)}
      />
    </span>
  );
}
