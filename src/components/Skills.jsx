import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vue.js",
    "Tailwind CSS", "Next.js", "Framer Motion", "Git", "Node.js"
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-primary border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-mono text-sm tracking-wider uppercase mb-4"
                        >
                            Tech Stack
                        </motion.h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                            Tools I Use
                        </h3>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-x-12 gap-y-6"
                        >
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="text-2xl md:text-3xl font-display text-slate-400 hover:text-slate-900 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
