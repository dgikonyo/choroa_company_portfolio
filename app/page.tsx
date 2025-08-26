"use client";

import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

/**
 * Hook: theme management (composable)
 */
function useTheme(initial = "dark") {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch { }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const icon = theme === "dark" ? "🌙" : "☀️";
  const text = theme === "dark" ? "Dark" : "Light";

  return { theme, toggleTheme, icon, text };
}

/**
 * Hook: smooth scrolling for hash anchors
 * Returns a handler you can attach to <a> tags that link to anchors.
 */
function useSmoothScroll() {
  const handleAnchorClick = useCallback((e: any) => {
    const href = e.currentTarget.getAttribute("href") || "";
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update the location hash without jumping:
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  return handleAnchorClick;
}

/**
 * Hook: press animation for clickable elements (composable)
 * Usage: pass the event object from onClick to animatePress(e)
 */
function usePressAnimation() {
  const animatePress = useCallback((e: any) => {
    const el = e.currentTarget;
    // don't animate mailto links
    const href = el.getAttribute("href") || "";
    if (href && href.includes("mailto:")) return;

    // simple pressing transform
    el.style.transform = "scale(0.95) translateY(-2px)";
    el.style.transition = "transform 120ms ease";
    setTimeout(() => {
      el.style.transform = "";
    }, 150);
  }, []);

  return animatePress;
}

export default function Page() {
  const { theme, toggleTheme, icon: themeIcon, text: themeText } = useTheme("dark");
  const handleAnchorClick = useSmoothScroll();
  const animatePress = usePressAnimation();

  // common props for anchor buttons that should animate and maybe smooth scroll
  const anchorButtonProps = {
    onClick: (e: any) => {
      animatePress(e);
      // if it's an anchor hash, also do smooth scroll
      if ((e.currentTarget.getAttribute("href") || "").startsWith("#")) {
        handleAnchorClick(e);
      }
    },
  };

  return (
    <main className="main">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo" {...anchorButtonProps}>
              Choroa <span className="logo-accent">Design </span>Studios
            </a>
            <nav className="nav">
              <a href="#products" className="nav-link" onClick={handleAnchorClick}>
                Our Products
              </a>
              <a href="#services" className="nav-link" onClick={handleAnchorClick}>
                Services
              </a>
              <a href="#work" className="nav-link" onClick={handleAnchorClick}>
                Our Work
              </a>
              <a
                href="#contact"
                className="btn btn-primary btn-small"
                {...anchorButtonProps}
              >
                Start a Project
              </a>

              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title="Toggle theme"
                type="button"
              >
                <span id="theme-icon">{themeIcon}</span>
                <span id="theme-text" style={{ marginLeft: 8 }}>
                  {themeText}
                </span>
              </button>
            </nav>

            <div className="mobile-menu">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme (mobile)"
                type="button"
              >
                <span id="theme-icon-mobile">{themeIcon}</span>
              </button>

              <button className="mobile-toggle" type="button" aria-label="Open mobile menu">
                <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero section-primary">
        <div className="container">
          <h1 className="hero-title">
            We build <span className="gradient-text">great software.</span>
          </h1>
          <h2 className="hero-title mb-8">For us. For you.</h2>
          <p className="hero-subtitle">
            We're a product studio that crafts our own successful SaaS applications. We use the same
            battle-tested process to build, design, and scale ambitious ideas for founders and
            companies.
          </p>
          <div className="btn-group">
            <a href="#work" className="btn btn-primary" {...anchorButtonProps}>
              See Our Work
            </a>
            <a href="#services" className="btn btn-secondary" onClick={(e) => { animatePress(e); handleAnchorClick(e); }}>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding section-secondary">
        <div className="container">
          <h2 className="section-title">The Proof is in Our Products.</h2>
          <p className="section-description">
            We're not just consultants. We're in the trenches building and scaling our own software.
            Here's what we've built.
          </p>

          <div className="grid grid-cols-3">
            <div className="card">
              <h3 className="card-title">ConnectSphere</h3>
              <p className="card-subtitle">Automated Community Management</p>
              <p className="card-text">
                The all-in-one platform to engage, moderate, and grow your online community on
                autopilot.
              </p>
              <a href="#" className="card-link" {...anchorButtonProps}>
                Visit ConnectSphere →
              </a>
            </div>

            <div className="card">
              <h3 className="card-title">FlowState</h3>
              <p className="card-subtitle">No-Code Workflow Builder</p>
              <p className="card-text">
                Link your favorite apps and build complex workflows with a simple drag-and-drop
                interface. No coding required.
              </p>
              <a href="#" className="card-link" {...anchorButtonProps}>
                Check out FlowState →
              </a>
            </div>

            <div className="card">
              <h3 className="card-title">Metricsly</h3>
              <p className="card-subtitle">Real-time Analytics Dashboard</p>
              <p className="card-text">
                A beautiful, privacy-focused analytics tool that gives you the insights you need,
                without the noise.
              </p>
              <a href="#" className="card-link" {...anchorButtonProps}>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding section-primary">
        <div className="container">
          <h2 className="section-title">Your idea, shipped.</h2>
          <p className="section-description">We partner with a select group of clients to offer our full-stack product expertise.</p>

          <div className="grid grid-cols-3">
            <div className="card service-card">
              <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m0-8v-2m0 16V4m6 6h2m-16 0h2m14 0h2M4 12H2m18 0h-2m-8 6h2m-16 0h2m14 0h2M4 12H2"></path>
              </svg>
              <h3 className="card-title">UI/UX & Branding</h3>
              <p className="card-text">We design interfaces that people love to use, creating memorable brands and intuitive user experiences.</p>
            </div>

            <div className="card service-card">
              <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <h3 className="card-title">Full-Stack Development</h3>
              <p className="card-text">From front-end to back-end, we write clean, scalable code to build robust web and mobile applications.</p>
            </div>

            <div className="card service-card">
              <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="card-title">SaaS & Growth Strategy</h3>
              <p className="card-text">Got an MVP? We help you find product-market fit, define your roadmap, and scale your user base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding section-secondary">
        <div className="container">
          <h2 className="section-title">Work We're Proud Of</h2>
          <p className="section-description">We could talk all day, but we'd rather let the results speak for themselves.</p>

          <div className="case-study">
            <div className="case-study-image">
              <img src="https://placehold.co/800x600/4F46E5/FFFFFF?text=Project+Mockup" alt="Project Mockup" />
            </div>
            <div className="case-study-content">
              <p className="case-study-tag">Fintech Startup</p>
              <h3 className="case-study-title">Reinventing Personal Finance for Gen Z</h3>
              <p className="case-study-description">We partnered with a new startup to design and build an intuitive mobile banking app from the ground up. We focused on gamification and social features to drive engagement.</p>
              <div className="stats">
                <div>
                  <div className="stat-number gradient-text">+250%</div>
                  <div className="stat-label">User Signups in 3 Months</div>
                </div>
                <div>
                  <div className="stat-number gradient-text">4.9 ★</div>
                  <div className="stat-label">App Store Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-study reverse">
            <div className="case-study-image">
              <img src="https://placehold.co/800x600/A855F7/FFFFFF?text=Project+Mockup" alt="Project Mockup" />
            </div>
            <div className="case-study-content">
              <p className="case-study-tag" style={{ color: "#ffa62e" }}>Creator Economy Platform</p>
              <h3 className="case-study-title">A Central Hub for Digital Creators</h3>
              <p className="case-study-description">This platform needed a complete UX overhaul and a scalable backend to support its growing user base. We delivered a new design system and rebuilt their core infrastructure.</p>
              <div className="stats">
                <div>
                  <div className="stat-number purple-gradient">-50%</div>
                  <div className="stat-label">Page Load Time</div>
                </div>
                <div>
                  <div className="stat-number purple-gradient">+80%</div>
                  <div className="stat-label">Creator Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding section-primary">
        <div className="container text-center">
          <h2 className="section-title mb-4">Have an idea?</h2>
          <p className="section-description mb-8">Let's talk about how we can work together to build something amazing. We're always excited to hear about new and ambitious projects.</p>
          <a
            href="mailto:choroaenterprises@gmail.com"
            className="btn btn-primary"
            style={{ fontSize: "20px", padding: "20px 40px" }}
            onClick={(e) => animatePress(e)}
          >
            Let's Build Together
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p style={{ color: "var(--text-secondary)" }}>
              Made with love from <span><FontAwesomeIcon className="nav-icon" icon={faEarthAfrica} /></span>
            </p>
            <p style={{ color: "var(--text-secondary)" }}>&copy; 2025 Choroa Design Studios. All rights reserved.</p>
            <div className="footer-links">
              <Link href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/" className="footer-link">
                <span><FontAwesomeIcon icon={faLinkedin} /></span> LinkedIn
              </Link>
              <Link href="https://github.com/dgikonyo" className="footer-link">
                <span><FontAwesomeIcon icon={faGithub} spin /></span> GitHub
              </Link>
              <Link href="#" className="footer-link">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
