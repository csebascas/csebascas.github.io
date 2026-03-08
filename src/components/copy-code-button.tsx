"use client";

import { useEffect } from "react";

export function CopyCodeButton() {
    useEffect(() => {
        const preElements = document.querySelectorAll("pre");

        preElements.forEach((pre) => {
            // Skip if already wrapped
            if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

            // Wrap pre in a div
            const wrapper = document.createElement("div");
            wrapper.className = "code-block-wrapper";
            pre.parentNode?.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            // Create button
            const button = document.createElement("button");
            button.className = "copy-button";
            button.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span>Copy</span>`;

            button.addEventListener("click", async () => {
                const code = pre.querySelector("code")?.textContent || pre.textContent || "";
                try {
                    await navigator.clipboard.writeText(code);

                    // Add copied state with subtle pop
                    button.classList.add("copied", "animate-pop");
                    button.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,6 9,17 4,12"/></svg><span>Copied!</span>`;

                    // After 1.5s, start fading back
                    setTimeout(() => {
                        button.classList.add("fade-out");
                        button.classList.remove("copied", "animate-pop");

                        // After fade completes, reset content
                        setTimeout(() => {
                            button.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span>Copy</span>`;
                            button.classList.remove("fade-out");
                        }, 500);
                    }, 1500);
                } catch (err) {
                    console.error("Failed to copy:", err);
                }
            });

            wrapper.appendChild(button);
        });
    }, []);

    return null;
}
