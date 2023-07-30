import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import skillData from "./skillData";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-16" style={{ backgroundColor: "#E7F4FC" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 h-10 inline-block mb-4 text-green-500" style={{ color:'#BA203C' }}/>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4 skills" >
            Skills &amp; Technologies
          </h1>
          <p className="text-base text-gray-600">
            I possess a diverse skillset that can contribute to your projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center transition-transform hover:-translate-y-1"
            >
              <BadgeCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mr-4" style={{ color: "#00A196" }} />
              <span className="text-gray-800 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
