import { Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#bbbcae]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1e1e1e] mb-4">CONTACT</h2>
            <p className="text-[#ababab] text-lg">Have a project in mind? Let's collaborate and build something amazing together.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-[#1e1e1e] rounded-full flex items-center justify-center shrink-0">
                <div className="w-6 h-6 bg-[#1e1e1e] rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e1e1e] mb-1">Email</h3>
                <p className="text-[#ababab]">hello@landonlabs.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border border-[#1e1e1e] rounded-full flex items-center justify-center shrink-0">
                <div className="w-3 h-3 bg-[#1e1e1e] rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e1e1e] mb-1">Let's Talk</h3>
                <p className="text-[#ababab] max-w-sm">
                  Whether it's iOS development, AI integration, or creative collaboration— I'm always open to discussing new projects and ideas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] font-medium">Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="bg-white/50 border border-[#767676] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]/20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] font-medium">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-white/50 border border-[#767676] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]/20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] font-medium">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell me about your project..." 
              className="bg-white/50 border border-[#767676] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]/20 resize-none"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#2c2c2c] text-white rounded-xl p-4 font-medium flex items-center justify-center gap-2 mt-4"
          >
            <Send className="w-4 h-4" />
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
