import { skillsData } from "../data/Skills";

const SkillsPage = () => {
  const skillSections = skillsData.map((section, index) => (
    <div
      key={index}
      className="skill-category"
      data-aos="fade-up"
      data-aos-delay={index * 100 + 200} // extra delay after heading
    >
      <h4>{section.category}</h4>
      <div className="skill-tags">
        {section.tags.map((tag, i) => (
          <span key={i} className="skill-tag">{tag}</span>
        ))}
      </div>
    </div>
  ));

  return (
    <section className="page" id="skills">
      <h1 className="page-title" data-aos="fade-right">Skills</h1>
          <div className="skills-grid">
            {skillSections}
          </div>
    </section>
  );
};

export default SkillsPage;
