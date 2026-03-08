import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer>
            <div>
                &copy; {new Date().getFullYear()} Sebastian. All rights reserved.
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/csebascas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/sebastian-castro-4b5a7230b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                </a>
                <a href="https://twitter.com/csebasdev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={18} />
                </a>
            </div>
        </footer>
    );
}
