"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export function HeroSection() {
  const handleHireMe = () => {
    const mailtoLink = `mailto:${PROFILE_DATA.email}?subject=Job Opportunity&body=Hi ${PROFILE_DATA.name}, I came across your portfolio and would like to discuss a potential opportunity. Best regards`;
    window.location.href = mailtoLink;
  };

  const handleDownloadResume = () => {
    // Replace GOOGLE_DRIVE_FILE_ID with your actual file ID
    const fileId = PROFILE_DATA.resumeLink;
    window.open(fileId, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-xl font-medium text-primary mb-4">Welcome to my portfolio</h2>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              {PROFILE_DATA.name}
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl lg:text-3xl text-muted-foreground mb-6"
            >
              {PROFILE_DATA.role}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg max-w-2xl mb-8 leading-relaxed"
            >
              {PROFILE_DATA.bio}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                onClick={handleHireMe}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
                className="border-2 px-8 py-6 rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-6 mt-8"
            >
              <a href={PROFILE_DATA.socials.github} target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={PROFILE_DATA.socials.twitter} target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Animated gradient rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-primary to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
              
              {/* Image container with border */}
              <div className="relative rounded-full p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm">
                <div className="rounded-full overflow-hidden border-2 border-white/20">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full transform origin-center"
                  >
                    <img
                      src="/profile-picture.jpg"
                      alt={PROFILE_DATA.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}