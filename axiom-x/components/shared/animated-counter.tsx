"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      // Small delay for better visual effect
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView, value]);

  // Format large numbers (e.g., 2000000 -> 2M)
  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return { num: val / 1000000, suffix: "M" + suffix };
    }
    if (val >= 1000) {
      return { num: val / 1000, suffix: "K" + suffix };
    }
    return { num: val, suffix };
  };

  const formatted = formatValue(displayValue);
  const targetFormatted = formatValue(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <NumberFlow
        value={formatted.num}
        format={{
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
        transformTiming={{ duration: 1500, easing: "ease-out" }}
        className="tabular-nums"
      />
      {targetFormatted.suffix}
    </span>
  );
}
