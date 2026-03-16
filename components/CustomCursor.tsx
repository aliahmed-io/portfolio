'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse, trackpad)
    const mq = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mq.matches);
    if (!mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect interactive elements
    const handleElementEnter = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    const addInteractiveListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"], .btn-primary, .btn-secondary'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleElementEnter);
        el.addEventListener('mouseleave', handleElementLeave);
      });
      return interactives;
    };

    // Initial attach + MutationObserver for dynamic elements
    let currentInteractives = addInteractiveListeners();

    const observer = new MutationObserver(() => {
      // Detach old
      currentInteractives.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementEnter);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      // Re-attach
      currentInteractives = addInteractiveListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop with lerp
    let raf: number;
    const animate = () => {
      const dotLerp = 0.2;
      const ringLerp = 0.1;

      smoothPos.current.x += (pos.current.x - smoothPos.current.x) * dotLerp;
      smoothPos.current.y += (pos.current.y - smoothPos.current.y) * dotLerp;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ringLerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${smoothPos.current.x}px, ${smoothPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      currentInteractives.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementEnter);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, [isVisible, isHovering]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor-ring"
        style={{
          opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
        }}
      />
    </>
  );
}
