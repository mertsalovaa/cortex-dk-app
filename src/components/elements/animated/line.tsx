import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedLine = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: "98%",
        left: "1em",
      });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-[100px] mb-7 flex justify-center items-end z-[1001]"
    >
      <motion.div
        initial={{ width: "0%", left: "50%", right: "50%" }}
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-[0.5px] bg-dark absolute"
      />
    </div>
  );
};

export default AnimatedLine;
