import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-black bg-white  top-14 bottom-0 left-0 w-screen h-screen bg-cover bg-center overflow-hidden body-font"
    >
      <div className="container px-5 py-0 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Welcome to my projects page, where I showcase a collection of my diverse and innovative works. 
          Each project represents a unique challenge and an opportunity to demonstrate
           my skills, creativity, and problem-solving abilities.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 py-0">
  {projects.map((project) => (
    <a
      href={project.link}
      key={project.image}
      className="sm:w-1/2 w-100 p-4 overflow-hidden"
    >
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={project.image}
        />
        <div
          className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 overlay hover:opacity-100 transition-opacity duration-1000"
        >
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {project.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {project.title}
          </h1>
          <p className="leading-relaxed overflow-hidden h-24 text-white">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  ))}
</div>
      </div>
    </section>
  );
}