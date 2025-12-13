import { motion } from "motion/react";
import { GlassCard } from "./ui/GlassCard";
import LandonLabsLogo from "../imports/Group10";
import heroLogo from "figma:asset/2590240ec1e3c14c28480eaddb520850551d5b00.png";

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
            className="relative w-full max-w-[500px]"
          >
            <img 
              src={heroLogo} 
              alt="Landon Labs - Experiments, Prototypes & Creative Playground" 
              className="w-full h-auto"
            />
          </motion.div>
        </GlassCard>
      </div>
    </div>
  );
}