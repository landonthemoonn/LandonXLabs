import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navItems = [
  { name: "DESIGN LAB", href: "#design-lab", id: "design-lab" },
  { name: "AI LAB", href: "#ai-lab", id: "ai-lab" },
  { name: "MIND LAB", href: "#mind-lab", id: "mind-lab" },
  { name: "CONTACT", href: "#contact", id: "contact" },
];

export function Navbar() {
  const activeId = useScrollSpy(navItems.map(item => item.id), 150);
  const [active, setActive] = useState("DESIGN LAB");

  useEffect(() => {
    if (activeId) {
      const item = navItems.find(i => i.id === activeId);
      if (item) setActive(item.name);
    }
  }, [activeId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActive(name);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100, // Offset for the fixed navbar
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-2 pointer-events-auto shadow-lg flex flex-wrap justify-center gap-1 md:gap-2">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.name)}
            whileHover={{
              scale: 1.05,
              boxShadow: active === item.name
                ? "0 0 20px rgba(0, 0, 0, 0.3)"
                : "0 0 15px rgba(225, 255, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              active === item.name
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}