"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "fvafivauhfvasuvn",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Henrique Louback"
    },
    {
      fieldName: "Phone",
      fieldValue: "(21) 09237107401"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian"
    },
    {
      fieldName: "Email",
      fieldValue: "loubackhenrique123@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Portuguese, Spanish"
    }
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "vasdfovhasdfvnadfkv",
  items: [
    {
      company: "",
      position: "",
      duration: "",
    }
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "vasdfovhasdfvnadfkv",
  items: [
    {
      institution: "Fluminense Federal University - Brazil",
      degree: "Bachelor in Environmental Science",
      duration: "2019 - 2023",
    },
    {
      institution: "Labenu",
      degree: "Fullstack Web Development Bootcamp",
      duration: "2022 - 2023 - 1000 hours",
    },
    {
      institution: "Online Course",
      degree: "Web3 Development",
      duration: "2024 - 2025 - X hours",
    },
    {
      institution: "Yet to be confirmed - Canada",
      degree: "Fullstack Web Development",
      duration: "2025 - 2027",
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "vasdfovhasdfvnadfkv",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    }
    
  ]
}

const Resume = () => {
  return (
    <div>resume page</div>
  )
}

export default Resume