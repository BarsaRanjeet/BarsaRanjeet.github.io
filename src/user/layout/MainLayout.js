import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "@assets/scss/layout/_mainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Ranjeet Barsa</span>
              </h1>
              <p className="hero-subtitle">
                Full-Stack JavaScript Developer with 5+ years of experience building scalable web applications, microservices, and serverless backends
              </p>
              <div className="hero-actions">
                <a href="#features" className="btn btn-primary btn-large">
                  View Expertise
                </a>
                <a href="/contact" className="btn btn-outline btn-large">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-graphic"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Core Expertise</h2>
              <p className="section-subtitle">
                Technologies and skills I work with daily
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="feature-title">Backend Development</h3>
                <p className="feature-description">
                  Node.js, Express.js, TypeScript, Python, Serverless Framework, Microservices Architecture
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="feature-title">Frontend Development</h3>
                <p className="feature-description">
                  React.js, JavaScript (ES6+), TypeScript, Next.js, Responsive Design
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="feature-title">Cloud & DevOps</h3>
                <p className="feature-description">
                  AWS (Lambda, ECS, RDS, S3), GCP (Cloud Functions, Firebase), Docker, Kubernetes, CI/CD
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                  </svg>
                </div>
                <h3 className="feature-title">Databases & Tools</h3>
                <p className="feature-description">
                  PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Jest, Cypress, Git, Jira
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title">About Me</h2>
                <p className="about-description">
                  Full-Stack JavaScript Developer with 5+ years of experience building scalable web applications, microservices, and serverless backends. Proven ability to deliver high-performance APIs, optimize cloud infrastructure, and lead small teams in agile environments.
                </p>
                <p className="about-description">
                  Experienced in designing distributed systems on AWS/GCP, integrating third-party APIs, and automating CI/CD pipelines for faster, more reliable deployments. Strong focus on code quality, observability, and performance optimization across backend and frontend stacks.
                </p>
                <p className="about-description">
                  Currently working as Software Engineer at Brainvire Infotech Pvt. Ltd., where I collaborate with Thomson Reuters engineering teams on large-scale editorial and content tools. Passionate about writing maintainable, testable code and leveraging DevOps practices to accelerate delivery and ensure system resilience.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">Major Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">35%</div>
                    <div className="stat-label">Avg Performance Gain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-subtitle">
                Have a project in mind? Let's work together!
              </p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:barsaranjeet12@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>barsaranjeet12@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+916353859016" style={{color: 'inherit', textDecoration: 'none'}}>+91 6353859016</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Ahmedabad, Gujarat - 380015, India</p>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <form className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-large">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
