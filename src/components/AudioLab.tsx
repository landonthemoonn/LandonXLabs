import { Music, Speaker, Mic, Activity } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";
import { motion } from "motion/react";

const services = [
  {
    title: "Music Production",
    description: "Creating original compositions and beats across electronic, ambient, and experimental genres.",
    icon: <Music className="w-full h-full" />,
  },
  {
    title: "Sound Design",
    description: "Crafting unique audio experiences for apps, games, and interactive installations.",
    icon: <Speaker className="w-full h-full" />,
  },
  {
    title: "Podcast Production",
    description: "Recording, editing, and mastering audio content for storytelling and education.",
    icon: <Mic className="w-full h-full" />,
  },
  {
    title: "Audio Processing",
    description: "Developing real-time audio effects and signal processing algorithms.",
    icon: <Activity className="w-full h-full" />,
  },
];

const waveHeights = [
  40, 60, 70, 30, 80, 60, 40, 90, 50, 75, 
  45, 35, 55, 45, 65, 30, 50, 70, 80, 30,
  50, 75, 65, 60, 55, 65, 55, 45, 75, 20,
  45, 85, 90, 80, 70, 70, 80, 70, 25, 85
];

export function AudioLab() {
  return (
    <section id="audio-lab" className="py-24 px-4 bg-[#7d7e5f]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <SectionHeader
          title="AUDIO LAB"
          description="Sonic experiments and audio innovation. From music production to sound design, exploring the creative possibilities of audio technology."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <LabCard key={index} {...item} />
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 text-[#e1ff00] mb-4">
              <Activity className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Audio Experiments</h3>
            <p className="text-white/80">Interactive sound visualizations and generative audio projects</p>
          </div>

          <div className="flex items-center justify-center gap-1 md:gap-2 h-40 w-full overflow-hidden">
            {waveHeights.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: "10%" }}
                animate={{ height: [`${height}%`, `${height * 0.5}%`, `${height}%`] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.05 
                }}
                className="w-2 md:w-3 bg-[#e1ff00]/60 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
