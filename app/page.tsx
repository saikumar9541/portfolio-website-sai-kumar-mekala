import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SKILLS, EXPERIENCE, PROJECTS, PROFILE_DATA } from "@/lib/constants";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <Card key={category} className="p-6">
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

      {/* Experience Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp) => (
              <Card key={exp.company} className="p-6">
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
      <section className="py-20 bg-card">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.title} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
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
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail className="w-5 h-5" />
              {PROFILE_DATA.email}
            </a>
            <a
              href={`tel:${PROFILE_DATA.phone}`}
              className="flex items-center gap-2 hover:text-primary"
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
              className="hover:text-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={PROFILE_DATA.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}