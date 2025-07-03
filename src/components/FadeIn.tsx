'use client';

import React, { useRef, useEffect, useState, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  threshold?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, threshold = 0.15 }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Only fade in once
          }
        });
      },
      { threshold }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`fade-section${isVisible ? " visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
