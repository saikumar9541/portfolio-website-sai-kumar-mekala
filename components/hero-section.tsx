"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { PROFILE_DATA } from "@/lib/constants";

export function HeroSection() {
  const handleHireMe = () => {
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=Job Opportunity&body=Hi ${PROFILE_DATA.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss a potential opportunity.%0D%0A%0D%0ABest regards`;
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sai-kumar_Mekala.pdf';
    link.download = `${PROFILE_DATA.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent">
      <div className="container px-4 mx-auto text-center">
        <div className="mb-8">
          <img
            src="/profile-picture.jpeg"
            alt={PROFILE_DATA.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{PROFILE_DATA.name}</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">{PROFILE_DATA.role}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">{PROFILE_DATA.bio}</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={handleHireMe}>
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
            <Button size="lg" variant="outline" onClick={handleDownloadResume}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}