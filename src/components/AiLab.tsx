import { Camera, Video, Edit, User, Music, Sparkles, Mic, AudioLines } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";
import { motion } from "motion/react";

const aiFeatures = [
  {
    title: "Gen Ai + PHOTO",
    description: "Next-generation photography enhanced by artificial intelligence.",
    icon: <Camera className="w-full h-full" />,
  },
  {
    title: "Gen Ai + VIDEO",
    description: "Creating and manipulating video content with generative models.",
    icon: <Video className="w-full h-full" />,
  },
  {
    title: "Gen Ai x EDIT",
    description: "Advanced editing capabilities powered by machine learning.",
    icon: <Edit className="w-full h-full" />,
  },
];

const photoFeatures = [
  {
    title: "landonray.photos +",
    description: "Ai + Pro x Photomanipulation with the help of Ai",
    icon: <Camera className="w-full h-full" />,
  },
  {
    title: "Gen AI x ART",
    description: "Exploring human expression and character",
    icon: <User className="w-full h-full" />,
  },
  {
    title: "Experimental Edits",
    description: "Pushing creative boundaries in post-processing",
    icon: <Edit className="w-full h-full" />,
  },
];

const audioFeatures = [
  {
    title: "AI Songwriting",
    description: "Writing original songs with AI assistance, crafting lyrics and melodies.",
    icon: <Mic className="w-full h-full" />,
  },
  {
    title: "Suno Creation",
    description: "Using Suno to generate complete tracks from concept to finished song.",
    icon: <Music className="w-full h-full" />,
  },
  {
    title: "AI Music Production",
    description: "Full production workflow powered by AI - composition to mastering.",
    icon: <Sparkles className="w-full h-full" />,
  },
];

const waveHeights = [
  40, 60, 70, 30, 80, 60, 40, 90, 50, 75, 
  45, 35, 55, 45, 65, 30, 50, 70, 80, 30,
  50, 75, 65, 60, 55, 65, 55, 45, 75, 20,
  45, 85, 90, 80, 70, 70, 80, 70, 25, 85
];

const allFeatures = [...aiFeatures, ...photoFeatures];

export function AiLab() {
  return (
    <section id="ai-lab" className="py-24 px-4 bg-[#a9aa96]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <SectionHeader
          title="AI LAB"
          description="Visual experiences powered by artificial intelligence. A convergence of generative AI, photography, video, and audio creation - exploring the future of creative expression."
        />
        
        {/* AI & Photo Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFeatures.map((feature, index) => (
            <LabCard key={index} {...feature} />
          ))}
        </div>

        {/* AI Audio Section */}
        <div>
           <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-8 bg-[#e1ff00] rounded-full"></span>
            <h3 className="text-2xl font-bold text-white">AI Audio Experiments</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {audioFeatures.map((item, index) => (
                <LabCard key={index} {...item} />
              ))}
           </div>

           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col items-center gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 text-[#e1ff00] mb-4">
                <AudioLines className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Generative Audio</h3>
              <p className="text-white/80">Creating music entirely with AI - from writing and composition to sound design and production</p>
            </div>

            <div className="flex items-center justify-center gap-1 md:gap-2 h-40 w-full overflow-hidden">
              {waveHeights.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "10%" }}
                  whileInView={{ height: [`${height}%`, `${height * 0.5}%`, `${height}%`] }}
                  viewport={{ once: false }}
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

      </div>
    </section>
  );
}