"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[198px] h-[198px] xl:w-[350px] xl:h-[350px] mix-blend-lighten absolut"
        >
          <Image
            src="/assets/86364759.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full shadow-[0_20px_50px_rgba(8,_1200,_150,_0.5)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
