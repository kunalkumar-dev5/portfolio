import { ArrowRight, ExternalLink } from "lucide-react";

const Github = ({ size = 24, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);


const projects = [
    {
        id: 1,
        title: "Saas Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        Image: "/header_img.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "https://github.com/kunalkumar-dev5/Project",
    },
    {
        id: 2,
        title: "Saas Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        Image: "/project2.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "#",
    },
    {
        id: 3,
        title: "Saas Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        Image: "/project3.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoURL: "#",
        githubURL: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    {" "}
                    Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    created with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, Key) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div>
                                <img src={project.Image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 text-xs font-medium rounded-full bg-primary
                                        text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoURL}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            title="GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/kunalkumar-dev5"

                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </section>
    );
};