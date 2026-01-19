import "../css/hero.css";
import "../css/hero.mobile.override.css";

import { FaLinkedinIn, FaGithub, FaEnvelope, FaJava, FaAngular } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        {/* <h1 className="hero-name">Snehal Patil</h1>
        <h2 className="hero-role">Java Full Stack Developer</h2> */}
<h1 className="typewriter">
  Hello, I am <span>Snehal Patil</span>
</h1>

<h2 className="fade-in">
  Java Full Stack Developer 
</h2>



        <p className="hero-desc">
          Java Full Stack Developer with hands-on experience in Java, Spring Boot,
          Hibernate, Angular, and MySQL. Worked at Wipro as a Project Engineer and
          built real-time, role-based web applications with REST APIs,
          authentication, and database integration. Actively seeking a Java
          Developer or Backend Developer role.
        </p>

        {/* CONNECT WITH ME */}
        <div className="socials">
          <h4>CONNECT WITH ME</h4>
          <div className="social-icons">
            <a href="mailto:snehalbpatil26@gmail.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
          </div>
        </div>

        {/* CORE SKILLS */}
        <div className="skills">
          <h4>CORE SKILLS</h4>
          <div className="skill-list">
            <div className="skill-item"><FaJava /> Java</div>
            <div className="skill-item"><SiSpringboot /> Spring Boot</div>
            <div className="skill-item"><SiMysql /> MySQL</div>
            <div className="skill-item"><FaAngular /> Angular</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src="/developer.jpg" alt="developer" />
      </div>
    </section>
  );
}
