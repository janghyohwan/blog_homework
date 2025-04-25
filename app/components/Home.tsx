"use client";
import { motion } from "framer-motion";

const HomeSection = () => {
  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Full-screen video background */}
      <video
        src="/videos/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      {/* Text overlay centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="text-[55px] font-bold leading-[1.8] text-white space-y-4">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={leftToRightVariants}
            transition={{ duration: 1, ease: "easeOut" }}
            className="block"
          >
            I’m a Front-End
          </motion.span>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rightToLeftVariants}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex items-center gap-6 justify-center"
          >
            <span>Developer</span>
          </motion.div>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={leftToRightVariants}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="block"
          >
            Not born — made.
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
