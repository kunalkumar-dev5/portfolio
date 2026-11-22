import { Database, Layers, Monitor, Server } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About <span className="text-primary">Me</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Who I am</h2>

                        <p className="text-muted-foreground">
                            Full-stack developer with professional experience building production web applications using Dart, Node.js, Vue, Nuxt.js, and React. Developed and published open-source packages for Firebase Cloud Messaging with secure authentication and enterprise-grade reliability. Built scalable applications from scratch using modern frameworks, integrated REST APIs, and managed relational and NoSQL databases. Experience with cloud platforms including Google Cloud Platform, AWS, Docker, and Kubernetes. Strong foundation in system design, authentication mechanisms, and performance optimization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4  justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">🌐 Full Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building complete web applications using React, Node.js, Express, and MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Monitor className="h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">⚛️ Frontend Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive and user-friendly interfaces with React, Tailwind CSS, and modern JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Server className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">🔧 Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Designing scalable REST APIs, authentication systems, and business logic using Node.js and Express.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">🗄️ Database Design</h4>
                                    <p className="text-muted-foreground">
                                        Working with MongoDB and Mongoose to build efficient and scalable data models.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};