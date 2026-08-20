import React, { forwardRef, useEffect, useRef, useState } from "react";

const RevealOnScroll = forwardRef(({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}, forwardedRef) => {
  const internalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const setRefs = (node) => {
    internalRef.current = node;

    if (!forwardedRef) return;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else {
      forwardedRef.current = node;
    }
  };

  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;

    if (typeof window === "undefined") {
      setVisible(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={setRefs}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
});

RevealOnScroll.displayName = "RevealOnScroll";

export default RevealOnScroll;