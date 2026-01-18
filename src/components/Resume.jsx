import { useState } from "react";
import "../css/resume.css";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
<section className="resume-unique" id="resume">
      <div className="resume-wrapper">
<h2 className="resume-title">RESUME</h2>

        {/* RESUME NAVBAR */}
        <div className="resume-nav">
          <button
            className={activeTab === "skills" ? "active" : ""}
            onClick={() => setActiveTab("skills")}
          >
            Skill Set
          </button>

          <button
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>

          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>

          <button
            className={activeTab === "certifications" ? "active" : ""}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
        </div>

        {/* CONTENT */}
        <div className="resume-content">

          {activeTab === "skills" && (
            <div className="resume-box">
              <h3>Skill Set</h3>
              <div className="skill-tags">
                <span>Core Java</span>
                                <span>Advanced java</span>

                <span>Spring Boot</span>
                <span>Hibernate</span>
                <span>Angular</span>
                <span>MySQL</span>
                <span>Servlet</span>
                <span>JDBC</span>
                <span>HTML</span>
                                <span>CSS</span>
                <span>Javascript</span>

              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="resume-box">
              <h3>Experience</h3>

              <div className="experience-card">
                
                <p className="company">Wipro Technologies</p>
                <h4>Project Engineer</h4>
                <span className="exp-year">March 2023 - October 2023 </span>

                <p className="exp-para">
                  Worked on enterprise-level Java applications as part of the
                  Project Readiness Program (PRP). Developed backend modules
                  using Core Java and JDBC, built RESTful APIs with Spring Boot,
                  integrated MySQL databases.
                </p>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="resume-box">
              <h3>Education</h3>

              <div className="education-grid">
                <div className="edu-card">
                  <h4>B.Tech – Electronics</h4>
                  <span>2019 – 2022</span>
                  <p>KIT College of Engineering Kolhapur</p>
                  <strong>CGPA: 7.10</strong>
                </div>

                <div className="edu-card">
                  <h4>Diploma – Electronics and Telecommunication</h4>
                  <span>2016 – 2019</span>
                  <p>ICRE College</p>
                  <strong>80%</strong>
                </div>

                <div className="edu-card">
                  <h4>SSC</h4>
                  <span>2015-2016</span>
                  <p>Maharashtra State Board</p>
                  <strong>81%</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="resume-box">
              <h3>Certifications</h3>

              <div className="cert-row">
                <div>
                  <strong>Java Full Stack Development</strong>
                  <p>FirstBit Solutions, Pune</p>
                </div>
                <a
                  href="/Snehal Balaso Patil (2).pdf"
                  target="_blank"
                  className="chip"
                >
                  View
                </a>
              </div>

              <div className="cert-row">
                <div>
                  <strong>Java Full Stack Certification</strong>
                  <p>Great Learning (Wipro)</p>
                </div>
                <a
                  href="/SNEHAL BALASO PATIL - certificate.pdf"
                  target="_blank"
                  className="chip"
                >
                  View
                </a>
              </div>
            </div>
          )}

        </div>

        {/* DOWNLOAD RESUME */}
        <div className="resume-download-center">
          <a
            href="/SNEHALPATIL_Resume.pdf"
            download
            className="resume-btn"
          >
            ⬇ Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
