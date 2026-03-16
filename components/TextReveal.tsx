'use client';

import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (custom: { delay: number; staggerDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function TextReveal({
  text,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  staggerDelay = 0.06,
}: TextRevealProps) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        custom={{ delay, staggerDelay }}
        className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
        aria-label={text}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-1"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
