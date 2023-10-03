/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../../../styles/EducationList.css"

function EducationList({ educations, handleHidden }) {
  library.add(faEye);
  library.add(faEyeSlash);

  return (
    <div>
      <div className="education-list">
        <ul>
          {educations.map((education, key) => (
            <div key={key} className="education-list-item">
              <li key={key}>{education.school}</li>
              {education.isHidden ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  size="lg"
                  onClick={() => handleHidden(education)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  size="lg"
                  onClick={() => handleHidden(education)}
                />
              )}
            </div>
          ))}
        </ul>{" "}
      </div>
    </div>
  );
}

export default EducationList;
