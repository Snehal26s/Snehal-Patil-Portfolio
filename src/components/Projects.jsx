import "../css/projects.css";

export default function Projects() {
  return (
<section className="projects" id="projects">
      <h2 className="projects-title">PROJECTS</h2>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="/hospital.png"
            alt="Hospital Management System"
            className="project-img"
          />

          <h3>Hospital Management System</h3>

          <p>
            Role-based system with Admin and Doctor modules. Built REST APIs
            using Spring Boot and integrated with frontend.
          </p>

          <span className="project-tech">
            Tech: Java, Spring Boot, Hibernate, React, MySQL
          </span>

          <a
            href="https://github.com/Snehal26s/HospitalManagementSystem.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="/conference.png"
            alt="Conference Room Booking System"
            className="project-img"
          />

          <h3>Conference Room Booking System</h3>

          <p>
            Web application for booking conference rooms with role-based login
            for Admin and Employees.
          </p>

          <span className="project-tech">
            Tech: Java, Servlets, Hibernate, MySQL
          </span>

          <a
            href="https://github.com/Snehal26s/ConferenceRoomBookingSystem.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
