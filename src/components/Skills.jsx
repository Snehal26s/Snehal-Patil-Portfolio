import "../css/skills.css";
export default function Skills() {
  return (
    <section className="px-12 py-20" id="skills">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {[
          "Java",
          "Spring Boot",
          "Hibernate",
          "React",
          "MySQL",
          "REST APIs",
          "HTML & CSS",
          "Git & GitHub",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-[#1e293b] py-6 rounded-lg hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
