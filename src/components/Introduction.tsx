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
          LANDON x LABS fuses creativity with cutting-edge technology—a dynamic playground for building intelligent apps, stunning visuals, and next-level interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {["Web Development", "UI/UX Design", "Creative Strategy", "AI Integration", "Rapid Prototyping", "Digital Experiences"].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(225, 255, 0, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: index * 0.1
              }}
              className="px-6 py-3 bg-[#303030] text-[#e1ff00] rounded-full text-sm font-bold tracking-wide shadow-lg cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}