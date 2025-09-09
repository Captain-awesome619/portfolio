import React, { useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/picture5.jpg";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-scroll";
import Quote from "../quote/Quote";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const h5Ref = useRef(null);
  const h1Ref = useRef(null);
  const h6Ref = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { opacity: 0, duration: 1.5, ease: "power3.out" } });

    tl.from(h5Ref.current, { y: -50 }) // from top
      .from(h1Ref.current, { x: -100 }, "-=0.5") // from left
      .from(h6Ref.current, { x: 100 }, "-=0.5") // from right
      .from(ctaRef.current, { y: 50 }, "-=0.3"); // from below
  }, []);

  return (
    <div id="head">
      <header>
        <div className="container header__container">
          <div className="inner">
            {/* h5 slides in from top */}
            <h5 ref={h5Ref}>Hello I'm</h5>

            {/* h1 slides in from left */}
            <h1 ref={h1Ref} className="multi">
              Ogunsola Toluwalase
            </h1>

            {/* h6 slides in from right */}
            <h6 ref={h6Ref} className="text-light">
              A <span className="text-l2">FrontEnd</span> Engineer
            </h6>
          </div>

          {/* CTA slides in from below */}
          <div ref={ctaRef}>
            <CTA />
          </div>

          <HeaderSocials />

          <div className="over">
            <div className="me">
              <img src={ME} alt="ME" className="meimg" />
            </div>
          </div>

          <Link to="contact" smooth={500} spy={true} className="scroll__down">
            Scroll Down
          </Link>
        </div>
      </header>

      <Quote />
    </div>
  );
};

export default Header;
