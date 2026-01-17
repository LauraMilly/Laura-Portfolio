import { useEffect, useState } from "react";

interface Options {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseBeforeDelete?: number;
    pauseBeforeType?: number;
}

export function useRotatingTypewriter(
    words: string[],
    {
        typingSpeed = 80,
        deletingSpeed = 40,
        pauseBeforeDelete = 1600,
        pauseBeforeType = 400,
    }: Options = {}
) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        let timeout: NodeJS.Timeout;

        if (!isDeleting && text.length < currentWord.length) {
            timeout = setTimeout(
                () => setText(currentWord.slice(0, text.length + 1)),
                typingSpeed
            );
        } else if (!isDeleting && text.length === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        } else if (isDeleting && text.length > 0) {
            timeout = setTimeout(
                () => setText(currentWord.slice(0, text.length - 1)),
                deletingSpeed
            );
        } else if (isDeleting && text.length === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => prev + 1);
            }, pauseBeforeType);
        }

        return () => clearTimeout(timeout);
    }, [
        text,
        isDeleting,
        wordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        pauseBeforeDelete,
        pauseBeforeType,
    ]);

    return text;
}
