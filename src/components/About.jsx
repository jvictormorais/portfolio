import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-20">
          As a React front-end developer, I'm passionate about web development
          and excited to continue honing my skills in this dynamic and
          challenging field. My journey began with WordPress, where I discovered
          a strong affinity for programming and problem-solving. Now, I'm eager
          to take the next steps in my career and learn more technologies like
          NodeJS, Redux, TypeScript, and AWS Cloud while keeping improving my
          React Skills.
        </p>

        <br />
        <div>
          <a
            href="/JoseVictorMoraisResume.pdf"
            download="JoseVictorMoraisResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="group text-white w-fit px-6 py-3 my-2 flex item center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
