/* eslint-disable react/prop-types */
import "../../styles/ExperienceSection.css";
function ExperienceSection({ experiences }) {
  return (
    <div className="resume-experience">
      <div className="resume-experience-header">Experience</div>
      {experiences.map(
        (experience, key) =>
          !experience.isHidden && (
            <div className="resume-experience-content" key={key}>
              {" "}
              {console.log("burası", experiences)}
              <div className="resume-experience-container">
                <div className="resume-experience-left">
                  <div className="date">
                    <div className="resume-left-start-date">
                      {experience.startDate}
                    </div>
                    <div className="resume-left-end-date">
                      {" / "}
                      {experience.endDate}
                    </div>
                  </div>
                  <div className="resume-right-location">
                    {experience.location}
                  </div>
                </div>
                <div className="resume-right">
                  <div className="resume-right-company">
                    {experience.company}
                  </div>
                  <div className="resume-right-title">{experience.title}</div>
                  <div>{experience.description}</div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default ExperienceSection;
