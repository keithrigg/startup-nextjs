"use client";

import React, { useState, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);

  const particlesInit = useCallback(async (engine: any) => {
    // Load the full tsparticles package bundle
    await loadFull(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: true, // Stretches the particles across the entire screen
    },
    background: {
      color: {
        value: "transparent", // Keep background transparent
      },
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: { min: 0.2, max: 0.5 } },
      size: { value: { min: 0.5, max: 2 } },
      move: {
        enable: true,
        speed: 2,
        random: true,
        outModes: { default: "out" },
      },
    },
  };

  return (
    <section
      id="home"
      className="
        relative z-10 overflow-hidden text-white
        pb-16 pt-[120px]
        md:pb-[120px] md:pt-[150px]
        xl:pb-[160px] xl:pt-[180px]
        2xl:pb-[200px] 2xl:pt-[210px]
      "
    >
      {/* TSParticles for starry/particle animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="container relative">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column: Text content */}
          <div className="w-full px-4 lg:w-1/2">
            <h1 className="mb-5 text-left text-3xl font-bold leading-tight sm:text-4xl md:text-5xl flex items-start gap-3">
              {/* Logo to the left, spanning both lines */}
              <img
                src="/images/logo/inovize_device_reverse.png"
                alt="Inovize Device Logo Reverse"
                className="w-32 h-auto object-contain"
              />

              {/* Text container */}
              <div>
                <div>Specialists in</div>
                <div>
                  <Typewriter
                    words={[
                      "Integration",
                      "Automation",
                      "Observability",
                      "Agentic AI",
                      "Intelligent\u00a0Automation",
                    ]}
                    loop={1}
                    cursor={showCursor}
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={() => setShowCursor(false)}
                  />
                </div>
              </div>
            </h1>

            {/* Paragraph beneath */}
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              We are a team of customer-centric, innovative, and passionate
              technologists. Our mission is to deliver cutting-edge integration
              and automation solutions that unlock tangible business value,
              accelerate growth, and transform how organisations operate.
            </p>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mx-auto max-w-md lg:mr-0">
              <img
                src="/images/about/about-image-2-dark.svg"
                alt="Hero Placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;