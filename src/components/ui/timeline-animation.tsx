"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineContentProps {
  as?: any;
  className?: string;
  animationNum?: number;
  customVariants?: any;
  timelineRef?: any;
  children: React.ReactNode;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  as = "div",
  className,
  animationNum = 0,
  customVariants,
  timelineRef,
  children,
}) => {
  const Component = (motion as any)[as] || motion.div;

  const defaultVariants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.2,
        duration: 0.5,
      },
    },
    hidden: {
      y: -20,
      opacity: 0,
      filter: "blur(10px)",
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      custom={animationNum}
      className={className}
    >
      {children}
    </Component>
  );
};
