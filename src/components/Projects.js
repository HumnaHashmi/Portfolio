import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import data from "./data";

function Projects() {
  return (
    <section id="projects" className="text-gray-900 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <CodeIcon className="w-10 h-10 mb-2 " style={{ color:'#BA203C' }} />
          <h1 className="text-3xl font-medium text-gray-900 apps">
            Apps I've Built
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Check out some of the projects I've worked on.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="flex flex-col overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <img
                  alt="project"
                  className="object-cover w-full h-56"
                  src={project.image}
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-4 ">
                <div>
               
                  <h1 className="text-xl font-semibold text-gray-900 titeProject text-center" >
                    {project.title}
                  </h1>
                  <h2 className="text-sm font-medium text-green-500 mb-1 text-center mt-3" style={{ color: "#00A196" }}>
                    {project.subtitle}
                  </h2>
                
                </div>
                <div className="flex items-center justify-end mt-4">
                  <span className="text-sm font-medium" style={{ color:'#BA203C' }}>
                    View Project 
                  </span>
                  <svg
                    className="w-4 h-4 ml-1 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
