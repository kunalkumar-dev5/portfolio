import { Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils.js";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Linkedin = ({ size = 24, ...props }) => (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const Twitter = ({ size = 24, ...props }) => (
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const Leetcode = ({ size = 24, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-6.852-6.852-2.115-2.115.002-.002a1.374 1.374 0 0 0-1.374-1.374zm-2.115 13.921 5.918 5.918.736.736c.277.277.277.727 0 1.004l-2.396 2.396c-.277.277-.727.277-1.004 0l-7.795-7.795c-.277-.277-.277-.727 0-1.004l2.396-2.396c.277-.277.727-.277 1.004 0l.736.736z" />
    </svg>
);


export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. i'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);


    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:kunalkr5674@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        kunalkr5674@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+8757843220" className="text-muted-foreground hover:text-primary transition-colors">
                                        (+91) 8757843220</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a href="https://maps.google.com/?q=Patna,+Bihar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        Patna, Bihar</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/kunal-kumar-1b70bb34a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="https://x.com/KunalGupta32719" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="https://leetcode.com/u/Kunal6/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center">
                                    <Leetcode className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6 text-center ">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="black text-sm font-medium mb-2">
                                    {" "}
                                    Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="black text-sm font-medium mb-2">
                                    {" "}
                                    Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-2 focus:ring-primary" placeholder="abc@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="black text-sm font-medium mb-2">
                                    {" "}
                                    Your Message</label>
                                <input type="textarea" id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden  focus:ring-2 focus:ring-primary resize:none" placeholder="Hello, I'd like to tack about..." />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-5"

                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}