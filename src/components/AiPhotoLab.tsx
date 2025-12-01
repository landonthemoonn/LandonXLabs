import { Camera, Video, Edit, User } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { LabCard } from "./LabCard";

// Imports from Figma (formerly in PhotoLab)
import img1 from "figma:asset/178749591c68258a5a44a6b531ba03d7df14b646.png";
import img2 from "figma:asset/08e8d23af5f3743c0353c8e4fe50c9d43d6d0b6e.png";
import img3 from "figma:asset/ec6f96bf81cc7c0234545fa185ff4970d0afaf74.png";
import img4 from "figma:asset/28c91597017d86906335b7a818c55d609d160816.png";

const aiFeatures = [
  {
    title: "Gen Ai +PHOTO",
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

const allFeatures = [...aiFeatures, ...photoFeatures];
const photos = [img1, img2, img3, img4];

export function AiPhotoLab() {
  return (
    <section id="ai-photo-lab" className="py-24 px-4 bg-[#a9aa96]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          title="AI + PHOTO LAB"
          description="A convergence of Artificial Intelligence and Photography. Where generative models meet the lens to create the future of visual storytelling."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFeatures.map((feature, index) => (
            <LabCard key={index} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((src, index) => (
            <div key={index} className="aspect-square rounded-2xl overflow-hidden bg-black/20">
               <img 
                 src={src} 
                 alt={`Gallery ${index + 1}`} 
                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
