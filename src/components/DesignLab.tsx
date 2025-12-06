import { useState } from "react";
import { PenTool, Layout, Eye, Shapes, Smartphone, MonitorSmartphone, Accessibility, Zap, Home, Camera, Palette } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

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

interface AppData {
  title: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
  details?: React.ReactNode;
}

const apps: AppData[] = [
  {
    title: "Arrival-ish",
    description: "A muni street car tracking app w/ directions using google maps api.",
    icon: <Zap className="w-full h-full" />,
    url: "https://arrivalish.app",
  },
  {
    title: "RM8 Dashboard",
    description: "Comprehensive household management platform for shared living spaces.",
    icon: <Home className="w-full h-full" />,
    url: "#",
    details: (
      <div className="space-y-6 text-white/90">
        <div>
          <h4 className="font-bold text-lg mb-2 text-[#e1ff00]">Overview</h4>
          <p className="text-sm leading-relaxed">
            RM8 is a full-featured roommate coordination dashboard designed for three roommates in San Francisco, combining household task management with calendar integration and AI assistance. The app streamlines shared living through automated chore tracking, expense splitting, and coordinated scheduling.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2 text-[#e1ff00]">Technical Stack</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Frontend:</strong> Vite + React + TypeScript</li>
            <li><strong>Backend:</strong> Supabase for data persistence and real-time sync</li>
            <li><strong>Integrations:</strong> Google Calendar API, Gemini AI</li>
            <li><strong>Styling:</strong> Tailwind CSS with glassmorphism design</li>
            <li><strong>Deployment:</strong> Vercel/Netlify</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2 text-[#e1ff00]">Key Features</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Profile Cards:</strong> personalized roommate information</li>
            <li><strong>Chores Tracker:</strong> with automatic rotation and completion tracking</li>
            <li><strong>Dog Walk Schedule:</strong> specifically designed for Kepler</li>
            <li><strong>Expense Management:</strong> with automatic splitting and payment tracking</li>
            <li><strong>Shared Photo Gallery:</strong> for household memories</li>
            <li><strong>Google Calendar Integration:</strong> with smart sync rules</li>
            <li><strong>AI Assistant:</strong> powered by Gemini for natural language task management</li>
            <li><strong>Weekly Check-Ins:</strong> for household communication</li>
            <li><strong>Roommate Agreements:</strong> documentation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2 text-[#e1ff00]">Architecture Highlights</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Real-time data synchronization across devices</li>
            <li>Voice-activated AI commands for hands-free management</li>
            <li>Smart rule-based calendar filtering (no hashtags needed)</li>
            <li>Responsive design optimized for mobile and desktop</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2 text-[#e1ff00]">Use Case</h4>
          <p className="text-sm leading-relaxed">
            Eliminates household friction by automating recurring tasks, fairly distributing responsibilities, and maintaining transparent financial tracking for shared living arrangements.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "QUEENCAM",
    description: "Crypto clarity. No BS.",
    icon: <Camera className="w-full h-full" />,
    url: "https://queencam-223092529989.us-west1.run.app",
  },
  {
    title: "Canvasphere",
    description: "Create. Collaborate. Captivate.",
    icon: <Palette className="w-full h-full" />,
    url: "#",
  },
];

export function DesignLab() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <section id="design-lab" className="py-24 px-4 bg-[#8b8c73]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <SectionHeader
          title="DESIGN LAB"
          description="Where aesthetics meet functionality. Exploring visual design, user interfaces, and the intersection of art and technology."
        />
        
        {/* Disciplines */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#e1ff00] rounded-full"></span>
            Disciplines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((item, index) => (
              <LabCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Principles */}
        <div>
           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#e1ff00] rounded-full"></span>
            Core Principles
          </h3>
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

        {/* App & Web Lab */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#e1ff00] rounded-full"></span>
            App & Web Lab
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, index) => (
              <LabCard 
                key={index} 
                {...app} 
                onClick={() => app.details && setSelectedApp(app)}
                className={app.details ? "cursor-pointer hover:ring-2 hover:ring-[#e1ff00] transition-all hover:shadow-xl" : ""}
              />
            ))}
          </div>
        </div>

        <Dialog open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)}>
          <DialogContent className="bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 sm:max-w-4xl w-full max-h-[85vh] flex flex-col text-white p-6 overflow-hidden">
            <DialogHeader className="shrink-0">
              <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-[#e1ff00]">
                {selectedApp?.icon && <div className="w-8 h-8 text-[#e1ff00]">{selectedApp.icon}</div>}
                {selectedApp?.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-white/80">
                {selectedApp?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto pr-2 -mr-2 mt-4">
              <div className="pb-4">
                {selectedApp?.details}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}