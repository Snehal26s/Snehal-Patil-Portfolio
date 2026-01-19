import { useEffect, useState } from "react";
import "../css/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const yOffset = -80;
const element = document.getElementById(id);
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({ top: y, behavior: "smooth" });

  };

  return (
<nav className="navbar fixed-navbar">
      {/* <h2 className="logo">Snehal Patil</h2> */}
 <div className="logo">
  <img src="/girl.png" alt="Snehal Patil" />
</div>

      <ul className="nav-links">
        {["home", "projects", "resume", "contact"].map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => scrollTo(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
