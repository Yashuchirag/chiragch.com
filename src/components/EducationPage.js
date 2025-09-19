import { educationData } from "../data/Education";
import '../styles/Education.css';

const EducationPage = () => {
    const educationList = educationData.map((edu, index) => (
      <div
        key={index}
        className="education-card"
        data-aos="fade-up"
        data-aos-delay={index * 100 + 200} // start after heading
      >
        <h3>{edu.school}</h3>
        <p className="date">{edu.date}</p>
        <p>{edu.degree}</p>
        <p>{edu.gpa}</p>
      </div>
    ));
  
    return (
      <section className="education-page" id="education">
        <h1 className="education-page-title" data-aos="fade-right">Education</h1>
        <div className="education-grid" data-aos="fade-up" data-aos-delay="100">
          {educationList}
        </div>
      </section>
    );
};

export default EducationPage;