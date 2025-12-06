import { motion } from "motion/react";
import { GlassCard } from "./ui/GlassCard";
import LandonLabsLogo from "../imports/Group10";
import Frame1 from "../imports/Frame1";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[#bbbcae] overflow-hidden flex items-center justify-center pt-20">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://my.spline.design/untitled-LUbMf0FgppEWAQob0tgg0G6u-Fob/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Logo Top Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-6 left-6 z-50 origin-top-left scale-[0.2] md:scale-[0.25]"
      >
        <div className="w-[420px] h-[200px]">
          <LandonLabsLogo />
        </div>
      </motion.div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 pointer-events-none">
        <GlassCard className="p-8 md:p-12 pointer-events-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[420px] h-[200px] scale-[0.6] sm:scale-75 md:scale-100 origin-center"
          >
            <Frame1 />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm md:text-base font-['Space_Grotesk',sans-serif] text-white tracking-[0.3em] uppercase"
          >
            experimental creative playground
          </motion.p>
        </GlassCard>
      </div>
    </div>
  );
}