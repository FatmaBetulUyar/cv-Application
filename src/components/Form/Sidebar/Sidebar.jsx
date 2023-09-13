import "../../../styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFileLines);
library.add(faScrewdriverWrench);
function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <FontAwesomeIcon icon={faFileLines} />
        Content
      </button>
      <button>
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        Customize
      </button>
    </div>
  );
}

export default Sidebar;
