import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Web Development Student',
        company: 'ETIC Algarve',
        duration: '2023 → Present',
        description: 'Currently in the final phase of a 2-year Web Development course. Focused on frontend development, modern JavaScript frameworks, and building clean, responsive user interfaces.'
    },
    {
        role: 'Frontend Projects & Freelance Work',
        company: 'Freelance',
        duration: '2023 → Present',
        description: 'Building responsive, interactive web interfaces using React, Tailwind CSS, and modern frontend tools. Focus on UI quality, accessibility, and performance.'
    },
    {
        role: 'Backend Developer Intern',
        company: 'Kapta',
        duration: '2023',
        description: 'Assisted in API development and database management. Gained hands-on experience with server-side logic and real-world development workflows.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-mono text-sm tracking-wider uppercase mb-4"
                        >
                            Experience
                        </motion.h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                            My Journey
                        </h3>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="space-y-20">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h4 className="text-2xl font-display font-medium text-slate-900 group-hover:text-accent transition-colors">
                                            {exp.role}
                                        </h4>
                                        <span className="font-mono text-sm text-slate-500 mt-2 md:mt-0">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-lg text-slate-600 mb-4 font-medium">{exp.company}</p>
                                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
