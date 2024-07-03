"use client";

import Footer from "./components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica, faLink } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";

export default function Page() {
  const targetDivRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = (targetDivRef: React.RefObject<HTMLDivElement>) => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHasChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);

        if (targetElement) {
          scrollToDiv(targetDivRef);
        }
      }
    };

    window.addEventListener("hashchange", handleHasChange);

    return () => window.removeEventListener("hashchange", handleHasChange);
  });
  return (
    <main className="main">
      <section className="navbar-section">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="col-xs-8">
              <a href="#hero">
                <p className="navheading">
                  <span className="navHeading-main">choroa</span> <br></br>{" "}
                  DESIGN STUDIOS
                </p>
              </a>
            </div>
            <div className="col-xs-4">
              <ul className="nav">
                <li className="nav-item">
                  <Link href="#about">What We Do</Link>
                </li>
                <li className="nav-item">
                  <Link href="#contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="hero-section">
        <div className="hero" id="hero" ref={targetDivRef}>
          <div className="container-fluid">
            <div className="row">
              <div className="hero-main-text col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p>
                  Building Projects <br></br>For the Future
                </p>
              </div>
            </div>
            <div className="row">
              <div className="hero-text col-xs-12 col-sm-6 offset-md-6 col-md-6 col-lg-6">
                <p className="text-paragraph">
                  We are a group of people who innovate fearlessly and make a
                  lasting impact through creativity and fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-section" id="about">
        <div className="about-us-main" id="about" ref={targetDivRef}>
          <div className="container-fluid">
            <div className="row">
              <div className="about-us-title col-12">
                <p className="title">What We Do</p>
              </div>
            </div>
            <div className="row">
              <div className="about-us-description col-12">
                <p className="description">
                  We are passionate builders crafting the future, project by
                  innovative project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-section" id="contact" ref={targetDivRef}>
        <div className="items row">
          <div className="item col-3">
            <Link
              href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/"
              className="nav-link text-body-secondary"
            >
              <span>
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={faLinkedin}
                  size="2xl"
                />
              </span>
            </Link>
          </div>

          <div className="item col-3">
            <Link
              href="https://github.com/dgikonyo"
              className="nav-link text-body-secondary"
            >
              <span>
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={faGithub}
                  size="2xl"
                  spinPulse
                />
              </span>
            </Link>
          </div>

          <div className="item col-3">
            <Link href="https://upwork.com/en-gb/freelancers/~0177ec5f229f345379">
              <span className="upwork-link">
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={faLink}
                  size="2xl"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
