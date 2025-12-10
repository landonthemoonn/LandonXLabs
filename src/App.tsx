import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { DesignLab } from "./components/DesignLab";
import { AiLab } from "./components/AiLab";
import { MindLab } from "./components/MindLab";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="font-sans text-[#1e1e1e] overflow-x-hidden bg-[#bbbcae]">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <DesignLab />
        <AiLab />
        <MindLab />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}