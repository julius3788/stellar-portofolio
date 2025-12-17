import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projectData = [ // Mengubah nama menjadi projectData agar tidak bentrok dengan variabel di .map
    {
        id: 1,
        title: "Digital Business “Myth or Fact” Interactive Quiz",
        image: "/projects/Project1.PNG",
        description: "This project aims to make learning about Digital Business concepts, myths, and facts more engaging for students — combining interactivity, education, and technology in one simple web app.",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://quiz-mitos-fakta.vercel.app/",
        githubUrl: "https://github.com/julius3788/quiz-mitos-fakta",
    },
    {
        id: 2,
        title: "Healthy Kitchen",
        image: "/projects/Project2.PNG",
        description: "A modern, responsive web application built to promote healthy living through technology. ",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://lontarkitchen.netlify.app/",
        githubUrl: "https://github.com/julius3788/HealthyKitchen",
    },
    {
        id: 3,
        title: "Agency AI",
        image: "/projects/Project3.PNG",
        description: "I built a modern Digital Agency website using React, Vite, TailwindCSS, and Framer Motion, focused on delivering a clean, responsive, and dynamic user experience.",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://agency-z.vercel.app/",
        githubUrl: "https://github.com/julius3788/agency-Z",
    },
      {
        id: 4,
        title: "Mini To Do List",
        image: "/projects/Project4.PNG",
        description: "Mini To Do List is a simple and efficient web application designed to help users manage their daily tasks with ease. Built using React for the frontend and Node.js with Express for the backend, this app offers a seamless user experience.",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "https://mini-todo-list.vercel.app/",
        githubUrl: "https://github.com/julius3788/MiniTodoList",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project represents a unique challenge and solution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((item) => (
                        <div key={item.id} className="group bg-card rounded-lg shadow-sm overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                  
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, index) => (
                                        // Perbaikan: Menambah key pada tag
                                        <span key={index} className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/10 text-primary border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={item.demoUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-foreground/80 hover:text-primary transition-colors"
                                            aria-label="View Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a 
                                            href={item.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-foreground/80 hover:text-primary transition-colors"
                                            aria-label="View Source Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                

                     <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-lg">
              Want to see more? Check out my complete portfolio on GitHub
            </p>
            <a
              href="https://github.com/julius3788"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
              <span>Explore My GitHub</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/50 transition-colors" />
            </a>
          </div>
          </div>

            </div>
        </section>
    );
};