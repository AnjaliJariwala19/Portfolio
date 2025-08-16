import { Briefcase, Code2, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/*Left Side of the grid */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Full-Stack Web Developer | Turning Concepts into Scalable Solutions
                        </h3>

                        <p className="text-muted-foreground">
                            I am a passionate Frontend Web Developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React, focused on crafting responsive and visually appealing web interfaces. Currently expanding my skills in backend development to become a well-rounded full-stack developer.
                        </p>
                        <p className="text-muted-foreground">
                            Computer Engineering student with a strong foundation in front-end and full-stack development. Experienced in building responsive, user-focused web applications using React and Tailwind CSS. Passionate about data visualization and leveraging technology to develop impactful, real-world solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="/cv.pdf" download="Anjali_Jariwala_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/*right Side of the grid */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code2 className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Crafting intuitive, user-friendly, high-performance websites that leave a lasting impression.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Blending creativity and functionality to craft seamless digital experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Balancing timelines, resources, and goals to deliver impactful outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}