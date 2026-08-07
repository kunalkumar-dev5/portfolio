import { Key } from "lucide-react";
import { useState } from "react"
import { cn } from "../lib/utils";


const skills = [
    // Languages
    { name: "JavaScript", level: 90, category: "Languages" },
    { name: "TypeScript", level: 70, category: "Languages" },
    { name: "Python", level: 80, category: "Languages" },
    { name: "C++", level: 75, category: "Languages" },
    { name: "Java", level: 80, category: "Languages" },
    { name: "SQL", level: 75, category: "Languages" },
    // Frontend
    { name: "React.js", level: 95, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "Vue.js", level: 90, category: "frontend" },
    { name: "Tailwind", level: 90, category: "frontend" },
    { name: "Flutter", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 75, category: "backend" },

    // Databases
    { name: "MongoDB", level: 70, category: "Databases" },
    { name: "PostgreSQL", level: 60, category: "Databases" },
    { name: "MySQL", level: 75, category: "Databases" },

    //Cloud/DevOps
    { name: "Google Cloud", level: 85, category: "Cloud/DevOps" },
    { name: "Firebase", level: 75, category: "Cloud/DevOps" },
    { name: "Docker", level: 80, category: "Cloud/DevOps" },
    { name: "Git", level: 90, category: "Cloud/DevOps" },
];

const categories = ["all", "Languages", "frontend", "backend", "Databases", "Cloud/DevOps"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Skills <span className="text-primary">& </span> Tech
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}</button>
                    ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-grow"
                                    style={{ width: skill.level + "%" }}
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
