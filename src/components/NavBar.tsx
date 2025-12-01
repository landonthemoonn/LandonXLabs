import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "APP LAB", href: "#app-lab" },
  { name: "AI LAB", href: "#ai-lab" },
  { name: "PHOTO LAB", href: "#photo-lab" },
  { name: "DESIGN LAB", href: "#design-lab" },
  { name: "AUDIO LAB", href: "#audio-lab" },
  { name: "MIND LAB", href: "#mind-lab" },
  { name: "CONTACT", href: "#contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#bbbcae]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        {/* Logo Icon Placeholder based on Figma - replacing complex SVG with simple representation or text for now if path not handy */}
        <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold text-xs">
          LL
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-[#1e1e1e] hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#e1ff00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-[#e3e3e3] rounded-lg text-[#1e1e1e] text-sm font-medium hover:bg-white transition-colors">
          LANDON
        </button>
        <button className="px-4 py-2 bg-[#2c2c2c] rounded-lg text-white text-sm font-medium hover:bg-black transition-colors">
          STUDIO
        </button>
      </div>
    </motion.nav>
  );
}
