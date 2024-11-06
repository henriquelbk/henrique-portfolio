"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project X",
    description: "Project X was created for the frontend...",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "backend",
    title: "Project Y",
    description: "Project Y was created for the backend...",
    stack: [{ name: "Typescript" }, { name: "Node.js" }],
    image: "/assets/images/",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project T",
    description: "Project T was created to be...",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/images/",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "blockchain",
    title: "Project Z",
    description: "Project Z was created for the blockchain...",
    stack: [{ name: "Solidity" }, { name: "Javascript" }],
    image: "/assets/images/",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "blockchain",
    title: "Project W",
    description: "Project W was created for the blockchain...",
    stack: [{ name: "Solidity" }, { name: "Typescript" }, { name: "React" }],
    image: "/assets/images/",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">{item.name}{index !== project.stack.length -1 && ","}</li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div>
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
