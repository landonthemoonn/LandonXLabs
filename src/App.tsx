import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { AppLab } from "./components/AppLab";
import { AiPhotoLab } from "./components/AiPhotoLab";
import { DesignLab } from "./components/DesignLab";
import { AudioLab } from "./components/AudioLab";
import { MindLab } from "./components/MindLab";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-[#1e1e1e] overflow-x-hidden bg-[#bbbcae]">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <AppLab />
        <AiPhotoLab />
        <DesignLab />
        <AudioLab />
        <MindLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
