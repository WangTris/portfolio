"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useRef } from "react";

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) => {
  // useRef hook
  const ref = useRef<HTMLDivElement>(null);
  // component of framer-motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem]  overflow-hidden rounded-xl border border-black/5 bg-gray-100 transition hover:bg-gray-200 group-even:pl-8  sm:h-[20rem] sm:pr-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 last:mb-0 group-even:ml-[19rem] sm:mb-8 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase -tracking-wider text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          priority
          className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
