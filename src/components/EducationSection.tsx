import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GraduationCap, Award, Eye } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Jagannath International Management School, Vasant Kunj",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      description:
        "Affiliated with Guru Govind Singh Indraprastha University. Currently pursuing comprehensive study in computer applications, programming, and software development.",
      achievements: ["Current Student", "Active Learner", "Tech Enthusiast"],
    },
  ];

  const certifications = [
    {
      name: "ICMSCI-2026 Certificate of Appreciation",
      issuer: "P.G.D.A.V. College, University of Delhi (ICMSCI-2026)",
      year: "2026",
      file: "/images/PresentationCertificate.jpg",
      type: "image",
    },
    {
      name: "Supervisd Learning Certification",
      issuer: "Coursera, Stanford Online",
      year: "2026",
      file: "/images/SupervisedLearning Certification.jpg",
      type: "image",
    },
    {
      name: "5-Day AI Agents Intensive Course with Google",
      issuer: "Kaggle, Google",
      year: "2025",
      file: "/images/5DayAIAgents.png",
      type: "image",
    },
    {
      name: "Introduction to Prompt Engineering",
      issuer: "SimpliLearn",
      year: "2025",
      file: "/images/promptEng.png",
      type: "image",
    },
    {
      name: "Software Engineering Job Simulation",
      issuer: "Goldman Sachs",
      year: "2025",
      file: "/images/jobSimulation.png",
      type: "image",
    },
    {
      name: "Microsoft Asia AI Odyssey",
      issuer: "Microsoft",
      year: "2024",
      file: "/images/odyssey.png",
      type: "image",
    },
    {
      name: "Awesome Day Online Conference",
      issuer: "Amazon Web Services",
      year: "2024",
      file: "/images/AwesomeDay.png",
      type: "image",
    },
    {
      name: "Smart India Hackathon",
      issuer: "Ministry Of Education",
      year: "2023, 2024",
      file: "/images/hackathon.png",
      type: "image",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Education &{" "}
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="flex flex-col gap-12">
            {/* ---------------- Education ---------------- */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="shadow-neon hover:shadow-glow transition-smooth border-primary/10"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {edu.institution} • {edu.period}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge
                            key={achIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* ---------------- Certifications ---------------- */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary" />
                Certifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="shadow-neon hover:shadow-glow transition-smooth border-accent/10"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="min-w-0">
                          <h4 className="font-semibold text-lg mb-1 truncate">
                            {cert.name}
                          </h4>
                          <p className="text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>

                        <Badge variant="secondary" className="shrink-0">
                          {cert.year}
                        </Badge>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="mr-2" />
                              Preview
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{cert.name}</DialogTitle>
                            </DialogHeader>
                            {cert.type === "pdf" ? (
                              <iframe
                                src={cert.file}
                                title={cert.name}
                                className="w-full h-[70vh] rounded-md border"
                              />
                            ) : (
                              <img
                                src={cert.file}
                                alt={cert.name}
                                loading="lazy"
                                onError={(e) => {
                                  const img = e.currentTarget as HTMLImageElement
                                  const current = img.getAttribute('data-try-idx')
                                  const startIndex = current ? parseInt(current, 10) : 0
                                  const exts = ['png', 'jpg', 'jpeg', 'webp']
                                  const base = img.src.replace(/\.(jpg|jpeg|png|webp)(\?.*)?$/i, '')
                                  for (let i = startIndex; i < exts.length; i++) {
                                    const candidate = `${base}.${exts[i]}`
                                    if (candidate !== img.src) {
                                      img.setAttribute('data-try-idx', String(i + 1))
                                      img.src = candidate
                                      return
                                    }
                                  }
                                  img.src = "/placeholder.svg"
                                }}
                                className="w-full h-auto rounded-md border"
                              />
                            )}
                          </DialogContent>
                        </Dialog>
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm underline underline-offset-4"
                        >
                          Open in new tab
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Continuous Learning Card */}
              <Card className="mt-8 bg-gradient-neon text-primary-foreground shadow-glow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">
                    Continuous Learning
                  </h4>
                  <p className="opacity-90">
                    I'm always expanding my skill set through online courses,
                    workshops, and hands-on projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
