import { useState } from "react";
import { Smartphone, Layers, Home, Activity, Command, Palette, BookHeart, Zap, Camera } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

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
    title: "Piece of me",
    description: "Mental health work book for personal growth.",
    icon: <BookHeart className="w-full h-full" />,
    url: "#",
  },
  {
    title: "QUEENCAM",
    description: "Crypto clarity. No BS.",
    icon: <Camera className="w-full h-full" />,
    url: "https://queencam-223092529989.us-west1.run.app",
  },
  {
    title: "Regul8r",
    description: "Regulate. Reset. Rise.",
    icon: <Layers className="w-full h-full" />,
    url: "#",
  },
  {
    title: "Canvasphere",
    description: "Create. Collaborate. Captivate.",
    icon: <Palette className="w-full h-full" />,
    url: "#",
  },
];

export function AppLab() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <section id="app-lab" className="py-24 px-4 bg-[#bbbcae]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="APP LAB"
          description="Check out some of the exciting and practical apps I've created, from concept to completion, though a few are still in the incubation phase."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <LabCard 
              key={index} 
              {...app} 
              onClick={() => app.details && setSelectedApp(app)}
              className={app.details ? "cursor-pointer hover:ring-2 hover:ring-[#e1ff00] transition-all" : ""}
            />
          ))}
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
