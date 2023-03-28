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
          I was working as a marketing manager and had to learn a little bit
          about WordPress to get better marketing results. I learned more and
          more about web development and the more I learned the more I liked it.
          Now I'm studying a lot and looking for my first job in the area to
          change careers and become a web developer.
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
