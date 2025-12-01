import { PenTool, Layout, Eye, Shapes, Smartphone, MonitorSmartphone, Accessibility } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";
import { motion } from "motion/react";

const disciplines = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces and seamless user experiences for mobile and web applications.",
    icon: <PenTool className="w-full h-full" />,
  },
  {
    title: "Design Systems",
    description: "Building scalable component libraries and design tokens for consistent brand experiences.",
    icon: <Layout className="w-full h-full" />,
  },
  {
    title: "Visual Identity",
    description: "Creating memorable logos, color palettes, and brand guidelines that tell a story.",
    icon: <Eye className="w-full h-full" />,
  },
  {
    title: "Experimental",
    description: "Pushing creative boundaries with abstract compositions and motion design concepts.",
    icon: <Shapes className="w-full h-full" />,
  },
];

const principles = [
  {
    title: "Mobile First",
    icon: <Smartphone className="w-12 h-12 text-[#1e1e1e]" />,
    bg: "from-[#e1ff00] to-[#b4cc00]",
    textColor: "text-[#1e1e1e]",
  },
  {
    title: "Responsive",
    icon: <MonitorSmartphone className="w-12 h-12 text-[#e1ff00]" />,
    bg: "from-[#2c2c2c] to-[#1e1e1e]",
    textColor: "text-white",
  },
  {
    title: "Accessible",
    icon: <Accessibility className="w-12 h-12 text-[#1e1e1e]" />,
    bg: "from-[#ffffff] to-[#e3e3e3]",
    textColor: "text-[#1e1e1e]",
  },
];

export function DesignLab() {
  return (
    <section id="design-lab" className="py-24 px-4 bg-[#8b8c73]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <SectionHeader
          title="DESIGN LAB"
          description="Where aesthetics meet functionality. Exploring visual design, user interfaces, and the intersection of art and technology."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item, index) => (
            <LabCard key={index} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`h-52 rounded-2xl bg-gradient-to-b ${item.bg} flex flex-col items-center justify-center gap-4 shadow-lg`}
            >
              {item.icon}
              <h3 className={`text-lg font-medium ${item.textColor}`}>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
