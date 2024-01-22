import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <section className="relative max-w-[42rem] overflow-hidden border border-black/5 bg-gray-100 sm:pr-8">
      <div className="px-5 py-4 sm:pl-10 sm:pr-2 sm:pt-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
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
        className="absolute -right-40 top-8 w-[28.25rem]"
      />
    </section>
  );
};

export default Projects;
