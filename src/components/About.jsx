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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam
          molestias pariatur reiciendis ipsam, tempore atque labore cum dicta
          saepe corporis repellendus voluptates corrupti amet eos laboriosam
          inventore animi iusto sint. Ipsum quam nam accusamus eveniet aperiam
          quo non fuga blanditiis iste harum libero, neque veritatis unde qui
          vero? Magnam?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          praesentium, corporis itaque eveniet eligendi provident atque adipisci
          maxime quia omnis voluptatem quaerat totam ullam, nihil ipsum quasi
          molestiae quo. Nesciunt inventore voluptates quos dolore sit dolor
          mollitia voluptatem, officiis pariatur facilis? Sint qui tempora
          veritatis, maxime voluptates autem animi libero!
        </p>
      </div>
    </div>
  );
};

export default About;
