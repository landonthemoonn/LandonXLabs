import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
                <a 
                  href="mailto:landon@landonlabs.com"
                  className="text-[#ababab] hover:text-[#1e1e1e] transition-colors"
                >
                  landon@landonlabs.com
                </a>
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

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] font-medium">Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="bg-white/50 border border-[#767676] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]/20"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] font-medium">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-white/50 border border-[#767676] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]/20"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#1e1e1e] font-medium">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell me about your project..." 
              className="bg-white/50 border border-[#767676] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e1e1e]/20 resize-none"
              required
            />
          </div>
          
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: submitted
                ? "0 0 30px rgba(225, 255, 0, 0.6)"
                : "0 0 25px rgba(44, 44, 44, 0.5)"
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0 0 40px rgba(225, 255, 0, 0.8)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={`rounded-xl p-4 font-medium flex items-center justify-center gap-2 mt-4 transition-colors ${
              submitted
                ? 'bg-[#e1ff00] text-[#1e1e1e]'
                : 'bg-[#2c2c2c] text-white'
            }`}
          >
            {submitted ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-4 h-4 rounded-full bg-[#1e1e1e]"
                />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
}