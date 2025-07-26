// src/components/RevealOnScroll.jsx
import React, { useEffect, useRef, useState } from 'react';
//import './RevealOnScroll.css';

const RevealOnScroll = ({ children, className = '', triggerOnce = true }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [triggerOnce]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'show' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
