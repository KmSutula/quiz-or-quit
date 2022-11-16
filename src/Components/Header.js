import { motion } from "framer-motion";

const variants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: 1,
    },
  }),
  hidden: { opacity: 0 },
};

const rect1Transition = {
  originX: {
    duration: 0.5,
    ease: "easeOut",
  },
  x: {
    duration: 0.3,
    ease: "easeOut",
  },
};

const rect2Transition = {
  y: {
    duration: 0.5,
    ease: "easeOut",
    delay: 0.5,
  },
};

export default function Header(props) {
  return (
    <div id="header-container">
      <motion.div
        style={{ originX: 0 }}
        id="rectangle1"
        transition={rect1Transition}
        animate={{ rotate: [-90, 10, 0] }}
      >
        <motion.h1 initial="hidden" animate="visible" variants={variants}>
          Quiz or Quit?
        </motion.h1>
        {!props.isGameOver ? (
          <motion.h2 initial="hidden" animate="visible" variants={variants}>
            Select your options below
          </motion.h2>
        ) : (
          ""
        )}
      </motion.div>
      <motion.div
        id="rectangle2"
        transition={rect2Transition}
        animate={{ y: ["-200%", "30%", "0%"] }}
      />
    </div>
  );
}
