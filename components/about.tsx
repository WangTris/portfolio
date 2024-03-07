"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently, I'm a last-year student in{" "}
        <span className="font-medium">International University</span>, I've
        created this platform to showcase my work and share my journey as I
        continue to grow and learn in my field of study -{" "}
        <span className="font-medium">Information Technology</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">
          NextJS, ReactJS, NodeJS, and MongoDB
        </span>
        . I am also familiar with TypeScript and Figma. I am committed to
        continuous learning and the exploration of emerging technologies. I am
        also looking <span className="font-medium">full-time position</span> as
        a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies esspecially JDrama, and reading detective books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Google Cybersecurity</span>
        .
      </p>
    </motion.section>
  );
}
