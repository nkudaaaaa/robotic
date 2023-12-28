

export const parentNav = {
  hidden: { y: "-100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 7,
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 1, transition: { ease: "easeIn" } },
};

export const leftAnimation = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.9,
      type: "spring",
      damping: 20,
      stifness: 10

    }
  }
}

export const downAnimation = {
  hidden: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 7
    }
  }
}

export const robotsAnimation = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

