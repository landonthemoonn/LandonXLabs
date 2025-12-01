import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  description: string;
  color?: string;
}

export function SectionHeader({ title, description, color = "#e1ff00" }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
        style={{ color }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-white/90 text-lg leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}
