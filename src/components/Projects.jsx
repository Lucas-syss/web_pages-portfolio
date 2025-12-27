import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Minimalist Habit Tracker',
        description: 'A clean and simple habit tracker to help users build and maintain positive habits. Features a minimal UI and local storage persistence.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://lucas-syss.github.io/frontend1-aulas/',
        github: 'https://github.com/Lucas-syss',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072'
    },
    {
        title: 'Taskly',
        description: 'A productivity application for managing daily tasks. Includes features like task categorization, due dates, and priority levels.',
        tech: ['React', 'Tailwind CSS', 'Vite'],
        link: 'https://lucas-syss.github.io/frontend1-projeto-taskly/',
        github: 'https://github.com/Lucas-syss',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=2032'
    },
    {
        title: 'Portfolio V1',
        description: 'My previous portfolio website built with vanilla HTML, CSS, and JavaScript. Served as a foundation for my current design philosophy.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: '#',
        github: 'https://github.com/Lucas-syss',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2055'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-mono text-sm tracking-wider uppercase mb-4"
                        >
                            Selected Work
                        </motion.h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                            Featured<br />Projects
                        </h3>
                    </div>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                <div className="lg:col-span-7 order-2 lg:order-1">
                                    <div className="relative overflow-hidden rounded-sm aspect-video bg-secondary">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 order-1 lg:order-2">
                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-10">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-sm font-mono text-accent">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-slate-900 hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
                                        >
                                            <span className="font-medium">Live Demo</span>
                                            <ExternalLink size={18} />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
                                        >
                                            <span className="font-medium">GitHub</span>
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
