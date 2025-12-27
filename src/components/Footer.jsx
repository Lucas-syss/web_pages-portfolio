import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-slate-500 py-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm">
                    <p>&copy; {new Date().getFullYear()} Lucas Cleminson.</p>
                </div>
                <div className="flex space-x-8">
                    <a href="https://github.com/Lucas-syss" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://pt.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:lucas_cleminson@eticalgarve.com" className="hover:text-accent transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
