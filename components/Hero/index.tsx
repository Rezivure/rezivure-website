"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const finalTitle = "An Oasis for Privacy 🌴";
  const [titleText, setTitleText] = useState(finalTitle); // Set the final title as the initial value


  useEffect(() => {
    let currentIndex = 0;
    const scrambleInterval = setInterval(() => {
      if (currentIndex < finalTitle.length) {
        const scrambledText = finalTitle
          .split("")
          .map((char, index) =>
            index <= currentIndex ? char : String.fromCharCode(33 + Math.floor(Math.random() * 94))
          )
          .join("");
        setTitleText(scrambledText);
        currentIndex++;
      } else {
        clearInterval(scrambleInterval);
        setTitleText(finalTitle);
      }
    }, 100);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('https://mygrid.app/', '_blank');
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  {titleText}
                </span>
              </h1>
              <p>
                Rezivure is a new startup dedicated to creating digital privacy tools. Follow us on X or click below to see our
                first project!
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      See Our First Project
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/6 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="mb-5">
                  <Image
                    src="/images/logo/grid-logo.png"
                    alt="Grid Logo"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <Image
                  src="/images/mockups/app-map-mockup-01.png"
                  alt="App Map Mockup"
                  layout="responsive"
                  width={700}
                  height={444}
                />
              
                <div className=" relative aspect-[700/444] w-full">
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10">
      
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
