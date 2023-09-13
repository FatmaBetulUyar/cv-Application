/* eslint-disable react/prop-types */
import "../../styles/EducationSection.css";
function EducationSection({ educations }) {
  return (
    <div className="resume-education">
      <div className="resume-education-header">Education</div>
      {educations.map(
        (education, key) =>
          !education.isHidden && (
            <div className="resume-education-content" key={key}>
              {" "}
              {console.log("burası", educations)}
              <div className="resume-left">
                <div className="resume-left-start-date">
                  {education.startDate}
                </div>
                <div className="resume-left-end-date">
                  {" / "}
                  {education.endDate}
                </div>
              </div>
              <div className="resume-right">
                <div className="resume-right-school">{education.school}</div>
                <div className="resume-right-degree">{education.degree}</div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default EducationSection;
