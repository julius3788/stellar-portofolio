import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    About <span className="text-primary"> Me</span> 
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator </h3>
                        <p className=" text-muted-foreground">
                            I'm Julius Sutrisno, a passionate front-end developer dedicated to crafting exceptional web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive websites that captivate users.
                        </p>
                        <p className=" text-muted-foreground">
                            My journey in web development began with a fascination for design and user experience. Over the years, I've honed my skills in modern frameworks like React and Vue.js, allowing me to create dynamic applications that are both visually appealing and highly functional.
                        </p>
                         <p className=" text-muted-foreground">
                            Beyond coding, I have a keen eye for detail and a commitment to staying updated with the latest industry trends. I thrive in collaborative environments and enjoy working closely with designers and back-end developers to bring ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
                               Download CV
                            </a>
                        </div>
                    </div>
              
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4" >
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p>Building responsive and interactive websites with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4" >
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p>Creating intuitive and engaging user experiences with modern design principles.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4" >
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="w-6 h-6 text-primary" />
                           </div>
                           <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p>Leading projects from conception to completion with attention to detail and timeline adherence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}; 
// 01:37:20