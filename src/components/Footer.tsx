import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#2c2c2c] py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-white/90 text-xl font-semibold mb-2">LANDON x LABS</h3>
            <p className="text-white/60">Building the future, one experiment at a time.</p>
          </div>
          
          <div className="flex gap-6">
            {[Twitter, Linkedin, Instagram, Dribbble].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/60 hover:text-[#e1ff00] transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">© 2025 LANDON x LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}