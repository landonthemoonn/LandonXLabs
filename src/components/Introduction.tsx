import { motion } from "motion/react";

export function Introduction() {
  return (
    <section className="py-[250px] px-[16px] bg-[#bbbcae] flex flex-col items-center text-center">
      <div className="max-w-4xl bg-[rgba(255,255,255,0)]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-['Space_Grotesk',sans-serif] font-medium text-white mb-12 leading-relaxed"
        >
          Landon x Labs combines creativity with technology, serving as a vibrant space for crafting smart applications, eye-catching visuals, and innovative interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["Web Development", "UI/UX Design", "Creative Strategy", "AI Integration", "Rapid Prototyping", "Digital Experiences"].map((tag) => (
            <span
              key={tag}
              className="px-6 py-3 bg-[#303030] text-[#e1ff00] rounded-full text-sm font-bold tracking-wide shadow-lg"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
