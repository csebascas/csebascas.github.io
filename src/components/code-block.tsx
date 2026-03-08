"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        const codeElement = document.querySelector(`pre code`);
        const text = codeElement?.textContent || "";

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="code-block-wrapper">
            <button
                onClick={copyToClipboard}
                className="copy-button"
                aria-label="Copy code"
            >
                {copied ? (
                    <Check size={14} className="copy-icon copied" />
                ) : (
                    <Copy size={14} className="copy-icon" />
                )}
                <span className="copy-text">{copied ? "Copied!" : "Copy"}</span>
            </button>
            <pre className={className}>{children}</pre>
        </div>
    );
}
