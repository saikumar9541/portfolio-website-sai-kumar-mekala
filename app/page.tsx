import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SKILLS, EXPERIENCE, PROJECTS, PROFILE_DATA } from "@/lib/constants";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none"></div>
      <div className="relative">
        <HeroSection />

        {/* Skills Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <Card key={category} className="p-6 backdrop-blur-lg">
                  <h3 className="text-xl font-semibold capitalize mb-6">{category}</h3>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <Achievements />

        {/* Experience Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
            <div className="space-y-8">
              {EXPERIENCE.map((exp) => (
                <Card key={exp.company} className="p-6 backdrop-blur-lg">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-muted-foreground mb-4">{exp.role} | {exp.period}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <Card key={project.title} className="p-6 backdrop-blur-lg">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/30 backdrop-blur-sm rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                {PROFILE_DATA.email}
              </a>
              <a
                href={`tel:${PROFILE_DATA.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PROFILE_DATA.phone}
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={PROFILE_DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}