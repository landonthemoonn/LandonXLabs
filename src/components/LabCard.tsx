import { motion } from "motion/react";
import { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "./ui/utils";

interface LabCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  url?: string;
  className?: string;
  onClick?: () => void;
}

export function LabCard({ title, description, icon, url, className, onClick }: LabCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        "bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col gap-4 relative group",
        className
      )}
      onClick={onClick}
    >
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-white/40 hover:text-[#e1ff00] transition-colors p-1 rounded-full hover:bg-white/10"
          onClick={(e) => e.stopPropagation()}
          title={`Visit ${title}`}
        >
          <ExternalLink size={20} />
        </a>
      )}
      <div className="w-12 h-12 text-[#e1ff00] mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </motion.div>
  );
}
