import { useState } from "react";
import {cn} from "@/lib/utils";


const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Bootstrap/Tailwind CSS", level: 90, category: "frontend" },

    { name: "PHP", level: 80, category: "backend" },
    { name: "MySQL", level: 60, category: "backend" },
    { name: "Firebase", level: 70, category: "backend" },
    { name: "Google Cloud Platform", level: 50, category: "backend" },

    { name: "Python", level: 80, category: "programming" },
    { name: "Java", level: 78, category: "programming" },
    { name: "C/C++", level: 65, category: "programming" },
    { name: "Machine Learning", level: 75, category: "programming" },
    { name: "Data Visualization (D3.js)", level: 85, category: "programming" },

    { name: "UI/UX Design (Figma)", level: 85, category: "design" },
    { name: "UI/UX Design (Canva)", level: 90, category: "design" },

    { name: "Git/GitHub", level: 88, category: "others" },
    { name: "VS Code", level: 95, category: "others" },
    { name: "Project Planning & Scheduling", level: 90, category: "others" },
    { name: "Team Coordination & Leadership", level: 88, category: "others" },
]

const categories  = ["all", "frontend", "backend", "programming", "design","others"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filterSkills =  skills.filter((skill)=> activeCategory === "all" || skill.category === activeCategory)


    return (
        <section id="skills" className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key)=>(
                        <button 
                        key={key}
                        onClick={()=>setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:ng-secondary"
                        )}>{category}</button>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filterSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30"
                        >
                            {/* Skill Name & Percentage */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
                                <span className="text-sm font-medium text-white">{skill.level}%</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden relative">
                                <div
                                    className="bg-primary h-full rounded-full transition-all duration-700 ease-out"
                                    style={{ width: skill.level + "%" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
