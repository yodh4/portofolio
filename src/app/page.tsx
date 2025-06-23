'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, FC } from 'react';
import styles from '../../styles/HomePage.module.css';

// --- TypeScript Interfaces for Data Structures ---
interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
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
  portfolio: string;
}

interface PortfolioData {
  name: string;
  title: string;
  introduction: string[];
  projects: Project[];
  experience: ExperienceItem[];
  contact: Contact;
  copyright: string;
}

// --- Data Configuration ---
// Your portfolio content, now strongly typed
const portfolioData: PortfolioData = {
  name: "Cyrilus Yodha M",
  title: "Computer Science Student",
  introduction: [
    "Hello! I'm a passionate Computer Science student with a love for , type-safe solutions and building amazing digital experiences. I specialize in full-stack development with a focus on the Next.js and TypeScript ecosystem.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in tech. I believe in the power of clean, well-documented code and user-centered design.",
    "Currently seeking internship opportunities and excited to collaborate on meaningful projects that make a difference!",
  ],
  projects: [
    {
      title: "PantauTular",
      description: "A full-stack e-commerce application with user authentication, shopping cart functionality, and payment integration. Features responsive design and admin dashboard.",
      tech: ["Django", "Next.js", "PSQL", "AmCharts"],
      link: "#",
    },
    {
      title: "Rot In Blossom",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      tech: ["Godot"],
      link: "#",
    },
    {
      title: "Callisto",
      description: "An intelligent chatbot using machine learning for natural language processing. Implements sentiment analysis and context-aware responses for enhanced user interaction.",
      tech: ["Godot"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts. Features location-based weather data and interactive charts for weather trends.",
      tech: ["JavaScript", "Chart.js", "API", "CSS3"],
      link: "#",
    },
  ],
  experience: [
    {
      title: "Teaching Assistant",
      date: "2023 - Present",
      company: "University Computer Science Department",
      description: "Assisted in teaching introductory programming courses (Python and Java). Conducted lab sessions, graded assignments, and provided one-on-one tutoring to students. Helped improve student pass rates by 25%.",
    }
  ],
  contact: {
    email: "cyrilusyodha@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    portfolio: "https://your-portfolio.com",
  },
  copyright: `© ${new Date().getFullYear()} Your Name. Built with passion and lots of coffee.`,
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
                        <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
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
        <a href={contact.portfolio} className={styles.contactLink} target="_blank" rel="noopener noreferrer">Portfolio</a>
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

    // Interactive hover effects for project cards
    const projectCards = document.querySelectorAll<HTMLDivElement>(`.${styles.projectCard}`);
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translate(-3px, -3px) scale(1.02)';
            card.style.boxShadow = '9px 9px 0px #000';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0) scale(1)';
            card.style.boxShadow = '6px 6px 0px #000';
        });
    });

    // Random color change for floating shapes
    const randomizeShapeColors = () => {
        const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#74b9ff', '#fd79a8', '#00b894'];
        const shapes = document.querySelectorAll<HTMLDivElement>(`.${styles.floatingShape}`);
        
        shapes.forEach(shape => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            shape.style.backgroundColor = randomColor;
        });
    };

    const colorInterval = setInterval(randomizeShapeColors, 10000);
    
    // Loading animation effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    const timer = setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Cleanup function
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleScroll));
      clearInterval(colorInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{portfolioData.name} - CS Portfolio</title>
        <meta name="description" content={`${portfolioData.name}'s professional computer science portfolio, built with Next.js and TypeScript.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
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