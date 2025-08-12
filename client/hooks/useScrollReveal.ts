import { useEffect, useRef } from "react";

export const useScrollReveal = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);

  return elementRef;
};

// Hook for staggered animations
export const useStaggeredReveal = (delay = 100) => {
  useEffect(() => {
    const staggerElements = document.querySelectorAll(".stagger-children > *");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            if (parent?.classList.contains("stagger-children")) {
              const children = Array.from(parent.children);
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add("revealed");
                }, index * delay);
              });
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const parents = document.querySelectorAll(".stagger-children");
    parents.forEach((parent) => observer.observe(parent));

    return () => {
      parents.forEach((parent) => observer.unobserve(parent));
    };
  }, [delay]);
};

// Hook for typing effect
export const useTypingEffect = (text: string, speed = 50) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let currentText = "";
    let currentIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const typeWriter = () => {
              if (currentIndex < text.length) {
                currentText += text.charAt(currentIndex);
                element.textContent = currentText;
                currentIndex++;
                setTimeout(typeWriter, speed);
              }
            };
            typeWriter();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [text, speed]);

  return elementRef;
};
