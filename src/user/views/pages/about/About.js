import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "@assets/scss/pages/_about.scss";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="about-hero-title">About Me</h1>
            <p className="about-hero-subtitle">
              Full-Stack JavaScript Developer passionate about building scalable solutions
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="profile-section">
          <div className="container">
            <div className="profile-content">
              <div className="profile-text">
                <h2 className="section-title">Professional Profile</h2>
                <p className="profile-description">
                  Full-Stack JavaScript Developer with 5+ years of experience building scalable web applications, microservices, and serverless backends. Proven ability to deliver high-performance APIs, optimize cloud infrastructure, and lead small teams in agile environments.
                </p>
                <p className="profile-description">
                  Experienced in designing distributed systems on AWS/GCP, integrating third-party APIs, and automating CI/CD pipelines for faster, more reliable deployments. Strong focus on code quality, observability, and performance optimization across backend and frontend stacks.
                </p>
                <p className="profile-description">
                  Results-oriented Full-Stack JavaScript Developer specialized in Node.js, Python, React, TypeScript, and AWS/GCP with a focus on clean architecture, performance optimization, and automation. Delivered enterprise-level applications for Thomson Reuters, optimizing API performance by up to 35% and driving major cost and reliability improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <div className="container">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Software Engineer</h3>
                    <span className="timeline-company">Brainvire Infotech Pvt. Ltd.</span>
                    <span className="timeline-period">Feb 2022 – Present</span>
                  </div>
                  <p className="timeline-location">Ahmedabad, India</p>
                  <ul className="timeline-details">
                    <li>Collaborated with Thomson Reuters engineering teams on multiple large-scale editorial and content tools (LEON, GFX, and LINSI)</li>
                    <li>Built and maintained scalable, secure backend microservices deployed across AWS cloud infrastructure</li>
                    <li>Optimized API performance by up to 35% through caching and request batching</li>
                    <li>Automated vulnerability management and dependency updates, cutting recurring alerts by 90%</li>
                    <li>Improved Jest test coverage from 60% to 85%, enhancing release reliability</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Back End Developer</h3>
                    <span className="timeline-company">Atcults Pvt. Ltd.</span>
                    <span className="timeline-period">Sep 2020 – Feb 2022</span>
                  </div>
                  <p className="timeline-location">Ahmedabad, India</p>
                  <ul className="timeline-details">
                    <li>Developed and maintained backend systems for various web applications</li>
                    <li>Worked with multiple technologies including Node.js, ReactJS, PostgreSQL, MongoDB, and AWS services</li>
                    <li>Built real-time applications using Socket.io and implemented load testing strategies</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Trainee</h3>
                    <span className="timeline-company">Infosenseglobal Inc.</span>
                    <span className="timeline-period">Dec 2019 – May 2020</span>
                  </div>
                  <p className="timeline-location">Gandhinagar, Gujarat, India</p>
                  <ul className="timeline-details">
                    <li>Learned fundamentals of web development and software engineering</li>
                    <li>Worked on various projects to build practical skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="projects-section">
          <div className="container">
            <h2 className="section-title">Key Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">AIChatApp.ai</h3>
                  <span className="project-role">Lead Fullstack Engineer</span>
                  <span className="project-period">Feb 2025 – Nov 2025</span>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">ReactJS</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Google Cloud</span>
                </div>
                <ul className="project-details">
                  <li>Designed and deployed serverless architecture supporting 10K+ concurrent users with &lt;300ms response time</li>
                  <li>Integrated multi-LLM support (ChatGPT, Claude, Gemini, Perplexity) with 25% lower inference latency</li>
                  <li>Implemented role-based authentication with Firebase Auth and Firestore rules</li>
                  <li>Built real-time chat APIs with Socket.io, improving synchronization speed by 40%</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Thomson Reuters Projects</h3>
                  <span className="project-role">Backend Developer</span>
                  <span className="project-period">Feb 2022 – Dec 2024</span>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Serverless</span>
                </div>
                <ul className="project-details">
                  <li><strong>LINSI:</strong> Developed microservice APIs for newsroom platform used by 500+ global journalists</li>
                  <li><strong>GFX:</strong> Built serverless APIs for real-time visual graphics for Reuters` live coverage</li>
                  <li><strong>LEON:</strong> Migrated legacy desktop app to cloud-based version serving 1K+ daily users</li>
                  <li>Optimized AWS Lambda and RDS queries, improving API performance by ~30%</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Pause A Moment</h3>
                  <span className="project-role">Backend Developer</span>
                  <span className="project-period">Feb 2021 – Aug 2021</span>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">NodeJS</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">GCP</span>
                </div>
                <ul className="project-details">
                  <li>Web application for Stanford Team members for health tracking after COVID-19</li>
                  <li>Built and maintained RESTful APIs in TypeScript with Node.js</li>
                  <li>Managed deployment processes using GitLab CI/CD pipelines</li>
                  <li>Administered and maintained PostgreSQL databases</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Radhe Exchange</h3>
                  <span className="project-role">Backend Developer</span>
                  <span className="project-period">Sep 2020 – Feb 2021</span>
                </div>
                <div className="project-tech">
                  <span className="tech-tag">ReactJS</span>
                  <span className="tech-tag">.Net</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">AWS</span>
                </div>
                <ul className="project-details">
                  <li>Betting platform for cricket, soccer, and tennis</li>
                  <li>Developed and maintained SocketIO programs for real-time user management</li>
                  <li>Built proxy server using Node.js for efficient request handling</li>
                  <li>Created Python-based scraper for data validation</li>
                  <li>Performed load testing using Artillery for system stability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-category-title">Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript (ES6+)</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Shell Script</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Frameworks & Libraries</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Serverless Framework</span>
                  <span className="skill-tag">Next.js</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Databases & Caching</h3>
                <div className="skill-tags">
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Redis</span>
                  <span className="skill-tag">Elasticsearch</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS (Lambda, ECS, RDS, S3)</span>
                  <span className="skill-tag">GCP (Cloud Functions, Firebase)</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">GitHub Actions</span>
                  <span className="skill-tag">GitLab CI/CD</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Testing & Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Jest</span>
                  <span className="skill-tag">Cypress</span>
                  <span className="skill-tag">Postman</span>
                  <span className="skill-tag">Load Testing (Artillery)</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Jira</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-timeline">
              <div className="education-item">
                <div className="education-header">
                  <h3 className="education-degree">Master of Computer Applications (MCA)</h3>
                  <span className="education-gpa">6.9 CGPA</span>
                </div>
                <p className="education-school">Gujarat Vidyapith, Ahmedabad</p>
                <p className="education-period">June 2020 | Ahmedabad, India</p>
              </div>
              <div className="education-item">
                <div className="education-header">
                  <h3 className="education-degree">B.Sc (CA&IT)</h3>
                  <span className="education-gpa">77%</span>
                </div>
                <p className="education-school">Smt VV Shah M.Sc(CA&IT) College, Modasa</p>
                <p className="education-period">April 2018 | Modasa, Gujarat, India</p>
              </div>
              <div className="education-item">
                <div className="education-header">
                  <h3 className="education-degree">HSC</h3>
                  <span className="education-gpa">63.4%</span>
                </div>
                <p className="education-school">Govt. Higher Secondary School, Ahwa</p>
                <p className="education-period">March 2014 | Dang, Gujarat, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="contact-cta-section">
          <div className="container">
            <h2 className="section-title">Let`s Connect</h2>
            <p className="cta-description">
              Interested in working together or have a project in mind? Feel free to reach out!
            </p>
            <div className="cta-buttons">
              <a href="/#contact" className="btn btn-primary btn-large">
                Get in Touch
              </a>
              <a
                href="https://github.com/BarsaRanjeet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

