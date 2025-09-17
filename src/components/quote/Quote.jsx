import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../quote/quote.css";
import snap from '../../assets/snapping.gif'
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const textRef = useRef(null);       // the visible (React-controlled) quote
  const authorRef = useRef(null);     // the visible author
  const overlayRef = useRef(null);    // the overlay where we animate the ghost
  const lastIndexRef = useRef(-1);

  const fetchRandomQuote = async () => {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const res = await fetch(url);
    const data = await res.json();
    const list = data.quotes || [];
    let idx = Math.floor(Math.random() * list.length);
    if (list.length > 1 && idx === lastIndexRef.current) {
      idx = (idx + 1) % list.length;
    }
    lastIndexRef.current = idx;
    return list[idx];
  };
  useEffect(() => {
    (async () => {
      const q = await fetchRandomQuote();
      setQuote(q.quote);
      setAuthor(q.author);
    })();
  }, []);
  const spawnGhost = (text) => {
    const ghost = document.createElement("div");
    ghost.className = "snap-ghost";
    ghost.style.position = "absolute";
    ghost.style.inset = "0";
    ghost.style.pointerEvents = "none";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.lineHeight = getComputedStyle(textRef.current).lineHeight;

    const chars = Array.from(text).map(
      (ch) =>
        `<span class="snap-char" style="display:inline-block">${
          ch === " " ? "&nbsp;" : ch
        }</span>`
    );
    ghost.innerHTML = chars.join("");
    overlayRef.current.appendChild(ghost);
    return ghost;
  };
  const handleClick = async () => {
    if (isAnimating || !textRef.current || !overlayRef.current) return;
    setIsAnimating(true);
    const currentText = textRef.current.textContent || "";
    const ghost = spawnGhost(currentText);
    const next = await fetchRandomQuote();
    const letters = ghost.querySelectorAll(".snap-char");
    gsap.to(letters, {
      opacity: 0,
      x: () => gsap.utils.random(-180, 180),
      y: () => gsap.utils.random(-160, 160) - 20, // upward + scatter
      rotation: () => gsap.utils.random(-360, 360),
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.015,
      onComplete: () => ghost.remove(),
    });
    if (authorRef.current) {
      gsap.to(authorRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.out",
        onComplete: () => {
          setAuthor(next.author);
          gsap.fromTo(
            authorRef.current,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    } else {
      setAuthor(next.author);
    }

    // 5) Swap in new text UNDER the overlay, then fade it in
    gsap.set(textRef.current, { opacity: 0, y: 16 });
    setQuote(next.quote);

    requestAnimationFrame(() => {
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => setIsAnimating(false),
      });
    });
  };

  return (
    <div className="quotebox33">
      <div className="quote">
        {/* Wrap + overlay so ghost sits above the real text */}
        <div className="snap-wrap" style={{ position: "relative" }}>
          <p ref={textRef} className="saying1">
            "{quote}"
          </p>
          <div
            ref={overlayRef}
            className="snap-overlay"
            style={{
              position: "absolute",
              inset: 0,
              overflow: "visible",
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="qotaut">
          <p ref={authorRef} className="saying">
            {author}
          </p>
        </div>
      </div>

      <div className="qot2">
        <button className="btnqot" onClick={handleClick} disabled={isAnimating}>
          <p>{isAnimating ?   <img src={snap} alt="snapping" className="snap" /> : "New Quote"}</p>
        </button>
      </div>
    </div>
  );
};

export default Quote;
