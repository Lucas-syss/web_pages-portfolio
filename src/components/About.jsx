import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-mono text-sm tracking-wider uppercase mb-4"
                        >
                            About Me
                        </motion.h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                            Design &<br />Code
                        </h3>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-slate-900 leading-tight mb-12">
                                I'm a frontend developer who believes that <span className="text-accent">great design</span> is invisible.
                                It's about how it works, not just how it looks.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    With a background in full-stack development, I've found my calling in the frontend ecosystem.
                                    I obsess over micro-interactions, accessibility, and performance. My goal is to build
                                    interfaces that feel natural and effortless to use.
                                </p>
                                <p>
                                    Currently based in Portugal, I'm constantly exploring new technologies and methodologies
                                    to push the boundaries of what's possible on the web. When I'm not coding, I'm likely
                                    analyzing the UI of my favorite apps.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
