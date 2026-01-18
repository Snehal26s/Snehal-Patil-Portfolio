import "../css/contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f1wv4aw",
        "template_km3in4m",
        formRef.current,
        "XWvWTCFHgx1R4fnCl"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-info">
          {/* <h2>Contact with me</h2> */}

          {/* <p>Feel free to reach out through any platform below.</p> */}
             <h4>Snehal Patil</h4>
             <h4>Java Full Stack Developer</h4>
             <p>I like building easy-to-use web applications and focus on creating fast and reliable solutions for users.</p>
          <a href="mailto:snehalbpatil26@gmail.com">
            <FaEnvelope />
            snehalbpatil26@gmail.com
          </a>

          <a href="tel:+919876543210">
            <FaPhoneAlt />
            +91-7030689097
          </a>

          <a
            href="https://www.linkedin.com/in/snehal-patil-2939681b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/Snehal26s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">
          <h3>Send a Message</h3>

          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}
