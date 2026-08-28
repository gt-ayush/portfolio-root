import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
};

const hidden: Record<NonNullable<Props['variant']>, string> = {
  up: 'opacity-0 translate-y-8',
  left: 'opacity-0 -translate-x-8',
  right: 'opacity-0 translate-x-8',
  scale: 'opacity-0 scale-[0.97]',
};

const Reveal = ({ children, delay = 0, variant = 'up', className = '' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hidden[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
