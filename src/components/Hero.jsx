import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-primary relative overflow-hidden pt-20">
            {/* Subtle background gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-accent font-mono text-sm tracking-wider mb-6 block uppercase">
                        Web Development Student @ ETIC Algarve
                    </span>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                        Building digital <br />
                        <span className="text-slate-400">experiences that</span> <br />
                        matter.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-12 font-light">
                        I craft accessible, pixel-perfect, and performant web applications.
                        Focused on creating intuitive interfaces with clean code and modern tooling.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <a
                            href="#projects"
                            className="group flex items-center gap-4 text-slate-900 hover:text-accent transition-colors duration-300"
                        >
                            <span className="text-lg font-medium border-b border-slate-300 group-hover:border-accent pb-1 transition-colors">
                                View Selected Work
                            </span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
