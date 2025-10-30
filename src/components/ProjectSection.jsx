import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Exoplanet Explorer",
        description: "Built an interactive web platform showcasing exoplanets with planet-specific detail pages, dynamic visuals, and educational content for student engagement.",
        image: "/projects/project1.png",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        githubUrl: "https://github.com/AnjaliJariwala19/Exoplanet-Explorer.git"
    },
    {
        id: 2,
        title: "Chatify",
        description: "Developed a simple one-to-one chat application with messaging capabilities, focusing on a clean interface and minimal setup.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "JavaScript", "React JS", "PHP"],
        githubUrl: "https://github.com/AnjaliJariwala19/Chatify.git"
    },
    {
        id: 3,
        title: "BlogNest-Personal Blog Website",
        description: "Created a  blog platform with CRUD functionalities, allowing users to post, edit, and manage articles with an intuitive UI.",
        image: "/projects/project3.png",
        tags: ["HTML", "CSS", "JavaScript", "React JS", "Appwrite"],
        githubUrl: "https://github.com/AnjaliJariwala19/BlogNest.git"
    },
    {
        id: 4,
        title: "MDP-Based Movie Recommendation System",
        description: "Implemented a genre-based movie recommender system using Markov Decision Processes and value iteration for optimal suggestions.",
        image: "/projects/project4.png",
        tags: ["Python", "Machine Learning", "MDP", "Reinforcement Learning"],
        githubUrl: "https://github.com/AnjaliJariwala19/Movie-Recommendation-System.git"
    },
    {
        id: 5,
        title: "Netflix Clone",
        description: "Built a Netflix-inspired streaming platform UI with SignIn and SignUp Page.",
        image: "/projects/project5.png",
        tags: ["React", "CSS"],
        githubUrl: "https://github.com/AnjaliJariwala19/Netflix-Clone.git"
    },
    {
        id: 6,
        title: "Amazon Clone",
        description: "Developed an Amazon-Clone e-commerce platform featuring product listings and shopping interface.",
        image: "/projects/project6.png",
        tags: ["React", "CSS"],
        githubUrl: "https://github.com/AnjaliJariwala19/Amazon-Clone.git"
    },
    {
        id: 7,
        title: "Amazon Clone",
        description: "Developed a responsive personal portfolio using React, Vite, and Tailwind CSS to showcase projects, skills, and contact details with EmailJS integration.",
        image: "/projects/project7.png",
        tags: ["React", "TailwindCSS", "EmailJS", "Vite"],
        githubUrl: "https://github.com/AnjaliJariwala19/Portfolio.git"
    }

]
export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 =x-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>



                            < div className="p-3">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag,key) => (
                                        <span key={key} className="px-2 py-1 bg-primary/40 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className=" text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4 ">
                                    {project.description}
                                </p>

                                <div className="flex justify-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cosmic-button flex items-center gap-2"
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
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/AnjaliJariwala19" target="_blank">
                        Check My GitHub <ArrowRight size={16}/>
                    </a>

                </div>
            </div>
        </section>
    )
}