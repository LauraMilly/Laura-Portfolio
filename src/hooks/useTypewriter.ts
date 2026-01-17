import { useEffect, useState } from "react";

interface TypewriterOptions {
    speed?: number;
    delay?: number;
}

export function useTypewriter(
    text: string,
    { speed = 30, delay = 0 }: TypewriterOptions = {}
) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!text) return;

        setDisplayedText("");

        let index = 0;
        let timeoutId: NodeJS.Timeout;
        let intervalId: NodeJS.Timeout;

        timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                setDisplayedText((prev) => {
                    if (index >= text.length) {
                        clearInterval(intervalId);
                        return prev;
                    }
                    const next = prev + text[index];
                    index++;
                    return next;
                });
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, speed, delay]);

    return displayedText;
}
