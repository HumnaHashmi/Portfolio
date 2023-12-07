import React from 'react';
import mainImg from '../images/portfolio im2.jpg';
import resume from '../images/Humna-Hashmi-Resume.pdf';

function About() {
  return (
    <section id="about" style={{ backgroundColor: "#E7F4FC" }}>
      <div className="container px-10 py-20 md:flex md:flex-row flex-col md:items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 humna">
            Hi, I'm <span className='font-bold' style={{ color:'#BA203C' }}>Humna</span>. &nbsp; 
            <br className="hidden lg:inline-block" />
             <span className='font-light'>I Love Crafting Amazing Websites.</span>
          </h1>
          <p className="mb-8 text-base text-gray-800">
            Full-Stack Developer | Crafting Seamless Web Solutions | Let's Build Something Incredible!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black border-solid border-2 border-red-800 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg
              hover:text-white"
            
            >
              Work With Me
            </a>
            <a 
              className="ml-4 inline-flex text-gray-700 font-bold  border-0 py-2 px-6 focus:outline-none  hover:text-white rounded text-lg text-white"
              style={{ backgroundColor: "#00A196" }}
              href={resume}
              download="HumnaResume.pdf"
            >
              Download My Resume
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            className="ms-8 mx-auto mb-10"
            alt="hero"
            src={mainImg}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
