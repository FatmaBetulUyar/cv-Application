/* eslint-disable react/prop-types */
import "../../../styles/ResumeButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
function ResumeButtons({ handleClearResume , handleLoadExample}) {
  library.add(faTrashCan);
  library.add(faListCheck);
  return (
    <div className="resume-buttons-container">
      <button className="resume-buttons" onClick={handleClearResume}>
        <FontAwesomeIcon icon={faTrashCan} />
        <div>Clear Resume</div>
      </button>
      <button className="resume-buttons" onClick={handleLoadExample}>
        <FontAwesomeIcon icon={faListCheck} />
        Load Example{" "}
      </button>
    </div>
  );
}

export default ResumeButtons;
