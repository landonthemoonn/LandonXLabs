import { cn } from "./utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blurIntensity?: "sm" | "md" | "lg" | "xl";
}

export function GlassCard({ children, className, blurIntensity = "md" }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden transition-all duration-300",
        "hover:backdrop-blur-none hover:bg-white/20",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
