import { skillsData } from "../data/Skills";
import '../styles/Skills.css';

const SkillsPage = () => {
  const skillSections = skillsData.map((section, index) => (
    <div
      key={index}
      className="skills-category"
      data-aos="fade-up"
      data-aos-delay={index * 100 + 200} // extra delay after heading
    >
      <h4>{section.category}</h4>
      <div className="skills-tags">
        {section.tags.map((tag, i) => (
          <span key={i} className="skills-tag">{tag}</span>
        ))}
      </div>
    </div>
  ));

  return (
    <section className="skills-page" id="skills">
      <h1 className="skills-page-title" data-aos="fade-right">Skills</h1>
          <div className="skills-grid">
            {skillSections}
          </div>
    </section>
  );
};

export default SkillsPage;