import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Disc } from "lucide-react";

const TRACKS = [
  { title: "NEURAL SYNAPSE", artist: "AI LAB", duration: 184 },
  { title: "LIQUID DREAMS", artist: "DESIGN LAB", duration: 245 },
  { title: "QUANTUM ECHO", artist: "MIND LAB", duration: 210 },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Simulate progress
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.2; // Slow progress simulation
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    setProgress(0);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-4 p-2 pr-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden hover:bg-white/15 transition-colors"
    >
      {/* Album Art / Rotating Disc */}
      <motion.div 
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-black/20 border border-white/10"
      >
         <Disc className="w-5 h-5 text-white/90" />
      </motion.div>

      {/* Track Info */}
      <div className="flex flex-col min-w-[140px]">
        <AnimatePresence mode="wait">
          <motion.span 
            key={TRACKS[currentTrackIndex].title}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs font-bold text-white font-['Space_Grotesk'] tracking-widest truncate"
          >
            {TRACKS[currentTrackIndex].title}
          </motion.span>
        </AnimatePresence>
        <span className="text-[10px] text-white/60 font-['Space_Grotesk'] tracking-wider">
          {TRACKS[currentTrackIndex].artist}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button onClick={handlePrev} className="text-white/60 hover:text-white transition-colors">
          <SkipBack size={14} />
        </button>
        <button 
          onClick={togglePlay} 
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all active:scale-95"
        >
          {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
        </button>
        <button onClick={handleNext} className="text-white/60 hover:text-white transition-colors">
          <SkipForward size={14} />
        </button>
      </div>

      {/* Progress Bar (Background) */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full pointer-events-none">
        <motion.div 
          className="h-full bg-gradient-to-r from-white/50 to-white/90" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
