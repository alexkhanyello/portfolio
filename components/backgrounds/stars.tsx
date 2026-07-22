"use client";

import * as React from "react";
import {
  type HTMLMotionProps,
  motion,
  type SpringOptions,
  type Transition,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { cn } from "@/lib/utils";

type StarLayerProps = HTMLMotionProps<"div"> & {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
  shouldAnimate: boolean;
};

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;

    shadows.push(`${x}px ${y}px ${starColor}`);
  }

  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#fff",
  shouldAnimate,
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState<string>("");

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      animate={shouldAnimate ? { y: [0, -2000] } : { y: 0 }}
      className={cn("absolute top-0 left-0 w-full h-[2000px] will-change-transform", className)}
      data-slot="star-layer"
      transition={shouldAnimate ? transition : { duration: 0 }}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  starColor?: string;
  pointerEvents?: boolean;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return isMobile;
}

function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = "#fff",
  pointerEvents = true,
  ...props
}: StarsBackgroundProps) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);
  const shouldAnimate = !isMobile && !prefersReducedMotion;
  const starCounts = isMobile || prefersReducedMotion
    ? [120, 60, 30]
    : [600, 240, 120];

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;

      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor],
  );

  return (
    <div
      className={cn(
        "relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]",
        className,
      )}
      data-slot="stars-background"
      onMouseMove={shouldAnimate ? handleMouseMove : undefined}
      {...props}
    >
      <motion.div
        className={cn({ "pointer-events-none": !pointerEvents })}
        style={shouldAnimate ? { x: springX, y: springY } : undefined}
      >
        <StarLayer
          count={starCounts[0]}
          size={1}
          starColor={starColor}
          shouldAnimate={shouldAnimate}
          transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        />
        <StarLayer
          count={starCounts[1]}
          size={2}
          starColor={starColor}
          shouldAnimate={shouldAnimate}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: "linear",
          }}
        />
        <StarLayer
          count={starCounts[2]}
          size={3}
          starColor={starColor}
          shouldAnimate={shouldAnimate}
          transition={{
            repeat: Infinity,
            duration: speed * 3,
            ease: "linear",
          }}
        />
      </motion.div>
      {children}
    </div>
  );
}

export {
  StarLayer,
  StarsBackground,
  type StarLayerProps,
  type StarsBackgroundProps,
};
