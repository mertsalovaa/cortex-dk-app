import { AnimationDefinition, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { AxisValue } from "../../../utils/constants";

interface AnimatedDivFadeProps {
  children: React.ReactNode;
  axis: string;
  way: number;
}

const AnimatedDivFade: React.FC<AnimatedDivFadeProps> = ({
  children,
  way,
  axis = AxisValue.X,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const wayDef: AnimationDefinition = {
    opacity: 0,
    ...(axis === AxisValue.Y ? { y: way } : { x: way }),
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={wayDef}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDivFade;
