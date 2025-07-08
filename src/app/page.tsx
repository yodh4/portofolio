import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Globe, Server } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const softwareProjects = [
    {
      title: "PantauTular",
      description:
        `Geospatial data visualization to analyze and monitor the spread of infectious disease in Indonesia. 
        Collaborative project with a team of 7 and Badan Riset dan Inovasi Nasional (BRIN)`,
      technologies: ["Django", "Next.js", "PostgreSQL", "AmCharts"],
      github: "https://github.com/orgs/PPL-BRIN/repositories",
      demo: "https://pantautular.netlify.app/",
      image: "/pantau-tular.png?height=400&width=400",
    },
    {
      title: "Suar (WIP)",
      description:
        `A simple web based http client that allows you to send HTTP requests and view the responses in a user-friendly interface.`,
      technologies: ["Chi", "Next.js", "PostgreSQL", "Docker"],
      github: "https://github.com/orgs/suar-net/repositories",
      demo: "#",
      image: "/placeholder.jpg?height=200&width=400",
    },
    {
      title: "EMart",
      description:
        "E-commerce application made with microservice architecture and using REST API for communicating between each service",
      technologies: ["Spring Boot", "Next.js", "PostgreSQL"],
      github: "https://github.com/orgs/A14-EMart/repositories",
      demo: "#",
      image: "/placeholder.jpg?height=200&width=400",
    },
    {
      title: "Marmut",
      description:
        "Online music & podcast streaming service mockup web application for Databases course. Uses raw SQL queries instead of ORM.",
      technologies: ["Django", "PostgreSQL"],
      github: "https://github.com/Saras355/basdat_proyek_tk",
      demo: "#",
      image: "/marmut.png?height=200&width=400",
    },
    {
      title: "Bookly",
      description:
        "Book catalog application for Platform Based Programming course.",
      technologies: ["Django"],
      github: "https://github.com/pbp-f11/bookly",
      demo: "#",
      image: "/placeholder.jpg?height=200&width=400",
    },
    {
      title: "Bookly (Mobile)",
      description:
        "Book catalog application for Platform Based Programming course.",
      technologies: ["Flutter"],
      github: "https://github.com/pbp-f11/bookly_mobile",
      demo: "#",
      image: "/placeholder.jpg?height=200&width=400",
    },
  ]

  const otherProjects = [
    {
      title: "Rot In Blossom",
      description: "Retro-style top-down 2D roguelike game where you play as a teenager trapped in a park. Kill all the monsters in this park to survive and let's see how long you can survive",
      technologies: ["Godot"],
      github: "https://github.com/yodh4/gamejam-uts",
      demo: "https://yodh4.itch.io/rot-in-blossom",
      image: "/rot-in-blossom.png?height=200&width=400",
    },
    {
      title: "Callisto",
      description: "2D adventure game where the player have to explore an underwater cave full of monsters and traps to search for his missing crewmates.",
      technologies: ["Godot"],
      github: "https://github.com/Absolute-Cinema-GameDev/callisto-game",
      demo: "https://absolute-cinema.itch.io/callisto",
      image: "/callisto.png?height=200&width=400",
    },
    {
      title: "Person Detection & Face Recognition",
      description: "A computer vision project for detects person and recognizes faces in real-time using YOLO and FaceNet models.",
      technologies: ["Python", "YOLO", "FaceNet", "YuNet"],
      github: "https://github.com/narendradzulqarnain/robot-uas",
      demo: "#",
      image: "/placeholder.jpg?height=200&width=400",
    },
  ]

  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "Java", "Go", "TypeScript", "Godot"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Chi", "Spring Boot", "Django", "FastAPI"] },
    { category: "Database", items: ["PostgreSQL",  "MySQL"] },
    { category: "Tools", items: ["Git", "Docker"] },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center border-x px-6">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="#home">
              <Code className="h-6 w-6" />
              <span className="font-bold">Portfolio</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container flex min-h-[calc(100vh-3.5rem)] items-center py-12 border-x px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-primary">Cyrilus Yodha</span>
              </h1>
              <p className="text-xl text-muted-foreground">Computer Science Student & Software Engineer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Passionate about building scalable software solutions and exploring cutting-edge technologies. Currently
              pursuing my degree in Computer Science with a focus on software engineering and full-stack development.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <Image
                src="/muka-yodha.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-muted-foreground md:text-lg mb-8">
            I&apos;m a a final-year Computer Science student at Universitas Indonesia 
            with a core focus on software engineering. I thrive on analytical challenges 
            and am adept at designing and implementing effective solutions. My interests 
            also extend to data science and game development, constantly driving me to 
            explore new technologies and translate complex ideas into practical applications.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Software Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building robust, scalable applications with modern frameworks and best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  End-to-end development from frontend interfaces to backend services and deployment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automating deployment pipelines, managing infrastructure, and ensuring system reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-12 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Tabs */}
      <section id="projects" className="container py-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">My Projects</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Explore my work across different areas of computer science and software development.
            </p>
          </div>

          <Tabs defaultValue="software" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="software" className="text-sm">
                Software Engineering
              </TabsTrigger>
              <TabsTrigger value="other" className="text-sm">
                Other Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="software" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Software Engineering Projects</h3>
                <p className="text-muted-foreground">
                  Full-stack applications and software systems showcasing my expertise in software engineering
                  principles.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {softwareProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.github} aria-label="GitHub">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                          {project.demo !== "#" && (
                            <Button variant="ghost" size="icon" asChild>
                              <a href={project.demo} aria-label="Live Demo">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Other Projects</h3>
                <p className="text-muted-foreground">
                  Diverse projects exploring data science, robotic, and game development.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.github} aria-label="GitHub">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                          {project.demo !== "#" && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.demo} aria-label="Live Demo">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-12 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-muted-foreground md:text-lg mb-8">
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach out if you&apos;d like to
            discuss projects, internships, or just connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:cyrilus2004@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/cyrilus-yodha-maheswara-b8b565371/">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/yodh4">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground">
              © Cyrilus Yodha Maheswara 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

