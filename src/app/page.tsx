'use client';

import Image from 'next/image';
import { useEffect, FC } from 'react';
import styles from '../../styles/HomePage.module.css';

// --- TypeScript Interfaces for Data Structures ---
interface Project {
  title: string;
  description: string;
  tech: string[];
  code: string;
  demo: string;
}

interface ExperienceItem {
  title: string;
  date: string;
  company: string;
  description: string;
}

interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

interface PortfolioData {
  name: string;
  title: string;
  introduction: string[];
  projects: Project[];
  experience: ExperienceItem[];
  contact: Contact;
  copyright: string;
  resume: string;
}

const portfolioData: PortfolioData = {
  name: "Cyrilus Yodha Maheswara",
  title: "Computer Science Student",
  introduction: [
    `
    Hello! My name is Cyrilus Yodha and I'm a final year undergraduate student at 
    Universitas Indonesia. I have a high interest in technology especially software 
    engineering but I also enjoy exploring other fields such as data science or 
    game development. I have programming in several languages such as Python, 
    Java, Godot, JS/TS, and Go.
    `
  ],
  resume: "https://drive.google.com/file/d/1gXceQsMJYhnV8Esws_Y_-FQCWo6RSMF2/view?usp=sharing", 
  projects: [
    {
      title: "PantauTular",
      description: 
      `Geospatial data visualization to analyze and monitor the spread of infectious disease in Indonesia. 
      Collaborative project with a team of 7 and Badan Riset dan Inovasi Nasional (BRIN).`,
      tech: ["Django", "Next.js", "PostgreSQL", "AmCharts"],
      code: "https://github.com/orgs/PPL-BRIN/repositories",
      demo: "https://pantautular.netlify.app/",
    },
    {
      title: "Suar (WIP)",
      description: 
      `A simple web based http client that allows you to send HTTP requests 
      and view the responses in a user-friendly interface.`,
      tech: ["Go", "Chi", "Next.js", "PostgreSQL"],
      code: "https://github.com/orgs/suar-net/repositories",
      demo: "#",
    },
    {
      title: "Callisto",
      description: 
      `A 2D adventure game where the player explores an underwater cave 
      full of monsters and traps to search for his missing crewmates.`,
      tech: ["Godot"],
      code: "https://github.com/Absolute-Cinema-GameDev/callisto-game/tree/development",
      demo: "https://absolute-cinema.itch.io/callisto",
    },
    {
      title: "Person Detection & Face Recognition",
      description: `
      A computer vision project for detects person and recognizes faces in real-time using YOLO and FaceNet models.`,
      tech: ["Python", "YOLO", "FaceNet", "YuNet"],
      code: "https://github.com/narendradzulqarnain/robot-uas",
      demo: "#",
    },
  ],
  experience: [
    {
      title: "Teaching Assistant of Programming Foundations 2",
      date: "Mar 2025 - Jun 2025",
      company: "Fakultas Ilmu Komputer, Universitas Indonesia",
      description: 
      `Assisted in programming foundation courses (Java). 
      Created a programming assignment, graded assignments, and provided tutoring for 12 students. `,
    }
  ],
  contact: {
    email: "cyrilusyodha@gmail.com",
    linkedin: "https://www.linkedin.com/in/cyrilus-yodha-maheswara-b8b565371/",
    github: "https://github.com/yodh4"
  },
  copyright: `© ${new Date().getFullYear()} Cyrilus Yodha Maheswara. All rights reserved.`,
};

// --- Reusable Typed Components ---  

const FloatingShapes: FC = () => (
  <>
    <div className={`${styles.floatingShape} ${styles.shape1}`}></div>
    <div className={`${styles.floatingShape} ${styles.shape2}`}></div>
    <div className={`${styles.floatingShape} ${styles.shape3}`}></div>
  </>
);

interface HeaderProps {
  name: string;
  title: string;
}
const Header: FC<HeaderProps> = ({ name, title }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1>{name}</h1>
        <div className={styles.subtitle}>{title}</div>
      </div>
    </div>
  </header>
);

const Navbar: FC = () => (
  <nav className={styles.nav}>
    <div className={styles.container}>
      <div className={styles.navLinks}>
        <a href="#intro" className={styles.navLink}>About</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#experience" className={styles.navLink}>Experience</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
        <a href={portfolioData.resume} className={`${styles.navLink} ${styles.cvButton}`} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  </nav>
);

interface IntroductionProps {
  paragraphs: string[];
  imageSrc: string;
}
const Introduction: FC<IntroductionProps> = ({ paragraphs, imageSrc }) => (
  <section id="intro" className={`${styles.section} ${styles.intro}`}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Introduction</h2>
      <div className={styles.introContent}>
        <div className={styles.introText}>
          {paragraphs.map((p, index) => <p key={index}>{p}</p>)}
        </div>
        <div className={styles.introImageWrapper}>
            <Image
                src={imageSrc}
                alt="Your Photo"
                width={250}
                height={250}
                className={styles.introImage}
                priority
            />
        </div>
      </div>
    </div>
  </section>
);

interface ProjectsProps {
  projects: Project[];
}
const Projects: FC<ProjectsProps> = ({ projects }) => (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <div key={project.title} className={styles.projectCard}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.projectTech}>
                            {project.tech.map((tech) => (
                                <span key={tech} className={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                        <div className={styles.projectLinks}>
                            <a href={project.code} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                                <svg className={styles.linkIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Code
                            </a>
                            {project.demo && project.demo !== "#" && (
                                <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/white-internet.svg"
                                        alt="Demo Icon"
                                        width={16}
                                        height={16}
                                        className={styles.linkIcon}
                                    />
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

interface ExperienceProps {
  experience: ExperienceItem[];
}
const Experience: FC<ExperienceProps> = ({ experience }) => (
    <section id="experience" className={`${styles.section} ${styles.experience}`}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            {experience.map((item) => (
                <div key={item.title} className={styles.experienceItem}>
                    <div className={styles.experienceHeader}>
                        <h3 className={styles.experienceTitle}>{item.title}</h3>
                        <div className={styles.experienceDate}>{item.date}</div>
                    </div>
                    <div className={styles.experienceCompany}>{item.company}</div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </section>
);

interface FooterProps {
  contact: Contact;
  copyright: string;
}
const Footer: FC<FooterProps> = ({ contact, copyright }) => (
  <footer id="contact" className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.contactLinks}>
        <a href={`mailto:${contact.email}`} className={styles.contactLink}>Email</a>
        <a href={contact.linkedin} className={styles.contactLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={contact.github} className={styles.contactLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p>{copyright}</p>
    </div>
  </footer>
);

// --- Main Page Component ---
const HomePage: FC = () => {
  
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleScroll = (e: Event) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        const targetElement = targetId ? document.querySelector(targetId) : null;
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleScroll));
    
    // Loading animation effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    const timer = setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Cleanup function
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleScroll));
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <FloatingShapes />
      
      <div className={styles.pageWrapper}>
        <Header name={portfolioData.name} title={portfolioData.title} />
        <Navbar />
        <main>
          <Introduction paragraphs={portfolioData.introduction} imageSrc="/muka-yodha.jpg" />
          <Projects projects={portfolioData.projects} />
          <Experience experience={portfolioData.experience} />
        </main>
        <Footer contact={portfolioData.contact} copyright={portfolioData.copyright} />
      </div>
    </>
  );
}

export default HomePage;