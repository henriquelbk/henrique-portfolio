"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
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
    github: ""
  },
  {
    num: "02",
    category: "backend",
    title: "Project Y",
    description: "Project Y was created for the backend...",
    stack: [{ name: "Typescript" }, { name: "Node.js" }],
    image: "/assets/images/",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project T",
    description: "Project T was created to be...",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }], 
    image: "/assets/images/",
    live: "",
    github: ""
  },
  {
    num: "04",
    category: "blockchain",
    title: "Project Z",
    description: "Project Z was created for the blockchain...",
    stack: [{ name: "Solidity" }, { name: "Javascript" }], 
    image: "/assets/images/",
    live: "",
    github: ""
  },
  {
    num: "05",
    category: "blockchain",
    title: "Project W",
    description: "Project W was created for the blockchain...",
    stack: [{ name: "Solidity" }, { name: "Typescript" }, { name: "React" }],
    image: "/assets/images/",
    live: "",
    github: ""
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]"> 
          <div className="w-full">text</div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work