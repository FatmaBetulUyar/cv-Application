/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../../../styles/Experiencelist.css";

function ExperienceList({ experiences, handleHidden }) {
  library.add(faEye);
  library.add(faEyeSlash);

  return (
    <div>
      <div className="experience-list">
        <ul>
          {experiences.map((experience, key) => (
            <div key={key} className="education-list-item">
              <li key={key}>{experience.title}</li>
              {experience.isHidden ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  size="lg"
                  onClick={() => handleHidden(experience)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  size="lg"
                  onClick={() => handleHidden(experience)}
                />
              )}
            </div>
          ))}
        </ul>{" "}
      </div>
    </div>
  );
}

export default ExperienceList;
