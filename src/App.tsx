import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Instagram, Linkedin, Menu, Mail, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  images: string[];
  liveUrl: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and TypeScript. Features include product filtering, cart management, and secure checkout process.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      "https://images.unsplash.com/photo-1698778573682-346d219402b5?w=800&q=80",
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80"
    ],
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A comprehensive task management system with real-time updates, team collaboration features, and progress tracking.",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=800&q=80"
    ],
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "An intelligent analytics dashboard that provides real-time insights and predictive analytics using machine learning algorithms.",
    tools: ["Python", "React", "TensorFlow", "D3.js"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    ],
    liveUrl: "https://example.com"
  }
];

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Leading development of enterprise-scale applications, mentoring junior developers, and implementing best practices."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects, implemented new features, and improved application performance."
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Science",
    school: "Tech University",
    period: "2017 - 2019",
    description: "Specialized in Artificial Intelligence and Machine Learning"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    school: "Digital Institute",
    period: "2013 - 2017",
    description: "Focus on Software Engineering and Web Development"
  }
];

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman"] }
];

function App() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number
  const email = "john.doe@example.com"; // Replace with your email

  return (
    <div className="min-h-screen bg-[#2D336B] text-white relative">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#2D336B]/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#7886C7]/20">
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[#7886C7] rounded-full transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative left-0 top-full md:top-auto mt-2 md:mt-0 bg-[#2D336B] md:bg-transparent w-48 md:w-auto rounded-lg md:rounded-none p-4 md:p-0 md:space-x-8 space-y-2 md:space-y-0 md:items-center ${isMenuOpen ? 'animate-fade-in' : ''}`}>
          {["home", "projects", "skills", "experience", "education", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium capitalize hover:text-[#A9B5DF] transition-colors ${activeSection === section ? 'text-[#A9B5DF]' : 'text-white'}`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D336B] via-[#7886C7] to-[#A9B5DF] opacity-50"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#A9B5DF]">
              Full Stack Developer
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 bg-[#7886C7] rounded-full hover:bg-[#A9B5DF] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 bg-[#7886C7] rounded-full hover:bg-[#A9B5DF] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 bg-[#7886C7] rounded-full hover:bg-[#A9B5DF] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#2D336B]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} 
                   className="bg-[#7886C7] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 animate-fade-in">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#A9B5DF] mb-4">{project.description}</p>
                  <button
                    onClick={() => {
                      setCurrentProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="bg-[#2D336B] text-white px-4 py-2 rounded hover:bg-[#A9B5DF] transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#7886C7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} 
                   className="bg-[#2D336B] p-6 rounded-lg animate-fade-in"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-[#A9B5DF]">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#2D336B]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} 
                   className="bg-[#7886C7] p-6 rounded-lg animate-fade-in"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-[#A9B5DF] mb-2">{exp.company} | {exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-[#7886C7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={edu.id} 
                   className="bg-[#2D336B] p-6 rounded-lg animate-fade-in"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-[#A9B5DF] mb-2">{edu.school} | {edu.period}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2D336B]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-[#7886C7] border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#A9B5DF]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded bg-[#7886C7] border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#A9B5DF]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-[#7886C7] border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#A9B5DF]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#A9B5DF] text-[#2D336B] font-medium py-2 px-4 rounded hover:bg-[#7886C7] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-[#2D336B] py-8 border-t border-[#7886C7]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-[#A9B5DF]">
              <Mail className="w-5 h-5" />
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </div>
            <p className="text-[#A9B5DF]">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2D336B] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="relative h-64 md:h-96">
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                <button
                  onClick={() => setCurrentProject(null)}
                  className="text-[#A9B5DF] hover:text-white"
                >
                  ✕
                </button>
              </div>
              <p className="mb-4">{currentProject.description}</p>
              <div className="mb-4">
                <h4 className="font-bold mb-2">Tools Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#7886C7] px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7886C7] text-white px-4 py-2 rounded hover:bg-[#A9B5DF] transition-colors"
              >
                Live Preview <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;