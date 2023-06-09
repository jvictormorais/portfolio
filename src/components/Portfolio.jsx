import React from "react";
import teslaClone from "../assets/portfolio/tesla-clone-website.jpg";
import todoList from "../assets/portfolio/todo-list.jpg";
import adminDash from "../assets/portfolio/admin-dashboard.jpg";
import myPortfolio from "../assets/portfolio/myportfolio.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: teslaClone,
      about: "Rebuilding Tesla Website using HTML, CSS and JavaScript.",
      demoLink: "https://jvictormorais.github.io/tesla-website-clone/",
      codeLink: "https://github.com/jvictormorais/tesla-website-clone",
    },
    {
      id: 2,
      src: todoList,
      about: "A functional TODO List made using HTML, CSS and JavaScript.",
      demoLink: "https://jvictormorais.github.io/todo-list/",
      codeLink: "https://github.com/jvictormorais/todo-list",
    },
    {
      id: 3,
      src: adminDash,
      about: "A powerful Admin Dashboard made using HTML and CSS grid.",
      demoLink: "https://jvictormorais.github.io/admin-dashboard-odinproject/",
      codeLink: "https://github.com/jvictormorais/admin-dashboard-odinproject",
    },
    {
      id: 4,
      src: myPortfolio,
      about: "This website as well! This one I used React and Tailwind.",
      demoLink: "https://jvdevportfolio.netlify.app/",
      codeLink: "https://github.com/jvictormorais/portfolio",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my work right here, or{" "}
            <a
              className="font-bold"
              href="https://github.com/jvictormorais"
              target="_blank"
              rel="noreferrer"
            >
              click here
            </a>{" "}
            and go to my GitHub profile and see all 20+ repos
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, about, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center m-5">
                <p>{about}</p>
              </div>
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
