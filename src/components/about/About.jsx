"use client";
import React, { useRef } from "react";
import "./about.css";
import ME from "../../assets/portpic.JPG";
import { FaAward } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";




gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const imgRef = useRef(null);
  const cardsRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 40%", // section is WELL in view
        toggleActions: "play none none none",
      },
    });

    tl.from(imgRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(cardsRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.6")
      .from(paragraphRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.6")
      .from(buttonRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");
  }, aboutRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="about" ref={aboutRef}>
     
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* 👇 Slides from left */}
        <div className="about__me" ref={imgRef}>
          <div className="about__me-image">
            <img loading="lazy" src={ME} alt="me" />
          </div>
        </div>

        {/* 👇 Slides from right */}
        <div className="about__content">
          <div className="about__cards" ref={cardsRef}>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 Years+ Frontend Development Experience</small>
            </article>

            <article className="about__card">
              <SiBookstack className="about__icon" />
              <h5>Expertise</h5>
              <small>
                HTML, CSS, JavaScript (React, React-Native, Next.js),<br />
                TailwindCSS, ChakraUI
              </small>
            </article>
          </div>

          <p ref={paragraphRef}>
            Hello! My name is Ogunsola Toluwalase, and I'm a passionate
            Front-End Engineer specializing in crafting responsive web and
            mobile applications as well as modern landing pages. I have a strong
            understanding of front-end frameworks, API integration, and content
            management platforms like GraphCMS and Sanity.io. My expertise lies
            in building intuitive, user-friendly interfaces that deliver
            exceptional user experiences. I would be thrilled to bring my skills
            and creativity to your team and collaborate on impactful projects. I
            look forward to the opportunity to work with you!
          </p>

         <a
  href="https://blog-mnvj.onrender.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
 
>
  Check my AI powered Blog!
</a>

        </div>
      </div>
    </section>
  );
};

export default About;
