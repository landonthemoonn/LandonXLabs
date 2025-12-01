import { Brain, RefreshCw, Zap, Shuffle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";

const areas = [
  {
    title: "Cognitive Science",
    description: "Exploring how we think, learn, and process information through psychological research.",
    icon: <Brain className="w-full h-full" />,
  },
  {
    title: "Self-Sabotage Cycle",
    description: "Interactive tool for breaking destructive productivity patterns.",
    icon: <RefreshCw className="w-full h-full" />,
  },
  {
    title: "Behavioral Design",
    description: "Understanding habit formation and motivation to create meaningful experiences.",
    icon: <Zap className="w-full h-full" />,
  },
  {
    title: "Curated Chaos",
    description: "Real-time creative problem-solving and adaptive methodology.",
    icon: <Shuffle className="w-full h-full" />,
  },
];

const researchList = [
  "Emotion recognition & sentiment analysis",
  "Habit formation & behavioral patterns",
  "Mindfulness & meditation techniques",
  "Cognitive load & attention management",
];

const applicationsList = [
  "Mental health monitoring apps",
  "Productivity & focus enhancement",
  "Stress reduction & relaxation tools",
  "Personalized learning systems",
];

export function MindLab() {
  return (
    <section id="mind-lab" className="py-24 px-4 bg-[#6f7054]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <SectionHeader
          title="MIND LAB"
          description="The intersection of psychology, neuroscience, and technology. Understanding the human mind to build better tools for mental wellness and cognitive enhancement."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((item, index) => (
            <LabCard key={index} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Research Areas</h3>
            <ul className="space-y-4">
              {researchList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#e1ff00] rounded-full mt-2 shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Applications</h3>
            <ul className="space-y-4">
              {applicationsList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#e1ff00] rounded-full mt-2 shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
