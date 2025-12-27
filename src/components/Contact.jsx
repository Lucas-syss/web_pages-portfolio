import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-primary border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase mb-8 block">
                        Get in Touch
                    </span>

                    <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight mb-12">
                        Have an idea? <br />
                        Let's build it.
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 md:items-center">
                        <a
                            href="mailto:lucas_cleminson@eticalgarve.com"
                            className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-display font-medium text-slate-500 hover:text-accent transition-colors"
                        >
                            <span>lucas_cleminson@eticalgarve.com</span>
                            <ArrowUpRight className="w-8 h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
