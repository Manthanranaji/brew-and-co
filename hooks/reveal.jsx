'use client';
import { useEffect, useRef } from "react";

export default function useReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // On mobile, skip observer and just show elements
        if (window.innerWidth < 768) {
            el.classList.add('animate-fadeInUp');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.remove('opacity-0');
                    el.classList.add('animate-fadeInUp');
                    observer.unobserve(el);
                }
            },
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}