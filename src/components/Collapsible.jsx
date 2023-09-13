/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Form.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
const Collapsible = (props) => {

  library.add(faAngleDown);
  library.add(faAngleUp);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div style={{ width: "100%" }}>
      {open ? (
        <div className="collapse">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%"
            }}
          >
            <div className="header-base"><div className="header">{props.label}</div></div>
            <button className="btn-toggle" onClick={toggle} value="open">
            <FontAwesomeIcon icon={faAngleDown}/>
            </button>
          </div>

          <div className="toggle">{props.children}</div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div className="header-base"><div className="header"> {props.label}</div></div>
          <button className="btn-toggle" onClick={toggle} value="close">
          <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
