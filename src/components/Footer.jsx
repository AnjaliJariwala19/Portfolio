import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-card relative border-t border-border mt-12 py-6 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left - Copyright */}
                <div>
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Anjali Jariwala. All rights reserved.
                    </p>
                </div>

                {/* Right - Socials + Scroll */}
                <div className="flex items-center gap-6">
                    {/* Social Links */}
                    <div className="flex space-x-5">
                        <a 
                            href="https://www.linkedin.com/in/anjali-jariwala-750314253/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-primary transition-colors"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a 
                            href="https://x.com/justt_anjali" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-primary transition-colors"
                        >
                            <Twitter size={22} />
                        </a>
                        <a 
                            href="https://github.com/AnjaliJariwala19" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-primary transition-colors"
                        >
                            <Github size={22} />
                        </a>
                    </div>

                    {/* Scroll to Top */}
                    <a 
                        href="#hero" 
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    >
                        <ArrowUp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
