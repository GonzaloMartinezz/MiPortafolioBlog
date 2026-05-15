"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.65, 0.85] : [1.05, 1];
  };

  // Slower, smoother animation — mapped to the full scroll range
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[40rem] sm:h-[55rem] md:h-[80rem] flex items-center justify-center relative p-2 sm:p-6 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-7xl mx-auto text-center px-4 mb-6 md:mb-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-7xl -mt-4 sm:-mt-8 mx-auto h-[20rem] sm:h-[32rem] md:h-[56rem] w-full border-[6px] sm:border-[8px] md:border-[14px] border-[#1e1e1e] p-1 md:p-2 bg-[#1e1e1e] rounded-[16px] sm:rounded-[24px] md:rounded-[36px] relative"
    >
      {/* Camera Dot */}
      <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-black flex items-center justify-center z-10">
        <div className="w-[1px] h-[1px] md:w-[3px] md:h-[3px] rounded-full bg-blue-500/30" />
      </div>

      <div className="h-full w-full overflow-hidden rounded-xl md:rounded-[20px] bg-gray-100 dark:bg-zinc-900 border border-white/10 relative">
        {children}
      </div>
    </motion.div>
  );
};
