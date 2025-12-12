import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Disc, Upload, Plus } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  duration?: number;
  src?: string;
  isLocal?: boolean;
}

const DEFAULT_TRACKS: Track[] = [
  { title: "NEURAL SYNAPSE", artist: "AI LAB", duration: 184 },
  { title: "LIQUID DREAMS", artist: "DESIGN LAB", duration: 245 },
  { title: "QUANTUM ECHO", artist: "MIND LAB", duration: 210 },
];

export function MusicPlayer() {
  const [tracks, setTracks] = useState<Track[]>(DEFAULT_TRACKS);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initialize audio object
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.addEventListener("ended", handleNext);
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleNext);
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.pause();
      }
    };
  }, []);

  // Handle track changes
  useEffect(() => {
    const track = tracks[currentTrackIndex];
    if (audioRef.current && track.src) {
      audioRef.current.src = track.src;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Playback prevented:", e));
      }
    }
  }, [currentTrackIndex, tracks]);

  // Handle Play/Pause toggle
  useEffect(() => {
    if (audioRef.current && tracks[currentTrackIndex].src) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.log("Playback prevented:", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const updateProgress = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration || tracks[currentTrackIndex].duration || 100;
      const current = audioRef.current.currentTime;
      setProgress((current / duration) * 100);
    }
  };

  // Simulation for tracks without source (Mock Mode)
  useEffect(() => {
    let interval: any;
    const currentTrack = tracks[currentTrackIndex];
    
    // Only run simulation if no real source
    if (isPlaying && !currentTrack.src) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.2; 
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex, tracks]);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const newTrack: Track = {
        title: file.name.replace(/\.[^/.]+$/, "").substring(0, 20),
        artist: "LOCAL UPLOAD",
        src: objectUrl,
        isLocal: true,
      };
      
      setTracks(prev => [newTrack, ...prev]);
      setCurrentTrackIndex(0);
      setIsPlaying(true);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-4 p-2 pr-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden hover:bg-white/15 transition-colors group"
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept="audio/*" 
        className="hidden" 
      />

      {/* Album Art / Rotating Disc */}
      <motion.div 
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-black/20 border border-white/10 relative"
      >
         <Disc className="w-5 h-5 text-white/90" />
      </motion.div>

      {/* Track Info */}
      <div className="flex flex-col min-w-[140px] max-w-[200px]">
        <AnimatePresence mode="wait">
          <motion.span 
            key={tracks[currentTrackIndex].title}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs font-bold text-white font-['Space_Grotesk'] tracking-widest truncate"
          >
            {tracks[currentTrackIndex].title}
          </motion.span>
        </AnimatePresence>
        <span className="text-[10px] text-white/60 font-['Space_Grotesk'] tracking-wider truncate">
          {tracks[currentTrackIndex].artist}
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
        
        {/* Upload Button */}
        <div className="w-[1px] h-4 bg-white/10 mx-1" />
        <button 
          onClick={triggerFileUpload}
          className="text-white/60 hover:text-[#e1ff00] transition-colors"
          title="Upload Local Track"
        >
          <Plus size={14} />
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
