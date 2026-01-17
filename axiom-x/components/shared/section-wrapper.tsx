"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

// Cubic bezier easing for smooth animations
const easeValues: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export type AnimationVariant =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "slideUp"
  | "none";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  variant?: AnimationVariant;
  threshold?: number;
  rootMargin?: string;
  as?: "section" | "div";
}

// Define variants inline to avoid complex type issues
function getVariants(variant: AnimationVariant, delay: number): Variants {
  const transition = { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] };

  switch (variant) {
    case "fadeUp":
      return {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition },
      };
    case "fadeIn":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition },
      };
    case "slideLeft":
      return {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition },
      };
    case "slideRight":
      return {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition },
      };
    case "scaleUp":
      return {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition },
      };
    case "slideUp":
      return {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition },
      };
    case "none":
    default:
      return {
        hidden: {},
        visible: {},
      };
  }
}

export function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
  variant = "fadeUp",
  threshold = 0.1,
  rootMargin = "-50px",
  as = "section",
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  const variants = getVariants(variant, delay);

  if (as === "section") {
    return (
      <motion.section
        id={id}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className={cn("py-16 md:py-24", className)}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn("py-16 md:py-24", className)}
    >
      {children}
    </motion.div>
  );
}

// Animated container for staggering children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  threshold = 0.1,
}: StaggerContainerProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated item for use inside StaggerContainer
interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
}

const itemVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeValues } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: easeValues } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeValues } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeValues } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeValues } },
  },
};

export function AnimatedItem({
  children,
  className,
  variant = "fadeUp",
}: AnimatedItemProps) {
  return (
    <motion.div variants={itemVariants[variant]} className={className}>
      {children}
    </motion.div>
  );
}

// Standalone animated element (triggers on its own visibility)
interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
}

export function AnimatedElement({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const variants = getVariants(variant, delay);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
