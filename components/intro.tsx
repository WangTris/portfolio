"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// icons
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-96 text-center sm:mb-0"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <Image
              src="/avatar1.jpeg"
              alt="avatar"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.2,
              stiffness: 125,
            }}
            className="absolute bottom-0 right-0 text-2xl"
          >
            💻
          </motion.span>
        </div>

        <motion.p
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I&apos;m Tran Quang Tri. </span>
          I&apos;ve created this platform to showcase my work and share my
          journey as I continue to grow and learn in my field of study -
          <span className="font-bold"> Information Technology</span>.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-gray-950 px-7 py-3 text-white shadow-lg outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          >
            Contact me{" "}
            <BsArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          <a
            href="/CV.pdf"
            download={true}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-gray-950 shadow-lg outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          >
            Download CV{" "}
            <HiDownload className="transition group-hover:translate-y-1" />
          </a>

          <a
            href="https://linkedin.com/in/quang-trí-trần-21740020a"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 py-3.5 text-xl text-gray-950 shadow-lg outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/WangTris"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 py-3.5 text-2xl text-gray-950 shadow-lg outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
