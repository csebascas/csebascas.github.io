import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer>
            <div>
                &copy; {new Date().getFullYear()} Sebastian. All rights reserved.
            </div>
            <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={20} />
                </a>
            </div>
        </footer>
    );
}
