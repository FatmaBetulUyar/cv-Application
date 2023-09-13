/* eslint-disable react/prop-types */
import "../../../styles/Form.css";
import Collapsible from "../../Collapsible";
import { useState } from "react";
import EducationList from "./EducationList";

function EducationForm({ handleChange, handleSubmit,handleHidden, education, educations }) {
  const [isClickEducation, setIsClickEducation] = useState(false);
  const handleAddEducation = () => {
    setIsClickEducation(!isClickEducation);
  };

  return (
      <Collapsible label="education" className="collapsable form-base">
        <div>
          {isClickEducation ? (
            <form onSubmit={handleSubmit}>
              <div className="form-school">
                <label 
                  className="label-school"
                  placeholder="Enter your school "
                >
                  School
                </label>
                <input
                  name="school"
                  type="text"
                  className="input-school"
                  onChange={handleChange}
                  // eslint-disable-next-line react/prop-types
                  value={education.school}
                  required
                />
              </div>
              <div className="form-degree">
                <label
                  className="label-degree"
                  placeholder="Enter your degree "
                >
                  Degree
                </label>
                <input
                  name="degree"
                  type="text"
                  className="input-degree"
                  onChange={handleChange}
                  value={education.degree}
                  required
                />
              </div>
              <div className="date">
                <div className="form-date-start">
                  <label
                    className="label-date-start"
                    placeholder="Enter your start date "
                  >
                    Start Date
                  </label>
                  <input
                    name="startDate"
                    type="month"
                    className="input-date-start"
                    onChange={handleChange}
                    value={education.startDate}
                    required
                  />
                </div>
                <div className="form-date-end">
                  <label
                    className="label-date-end"
                    placeholder="Enter your end date "
                  >
                    End Date
                  </label>
                  <input
                    name="endDate"
                    type="month"
                    className="input-date-end"
                    onChange={handleChange}
                    value={education.endDate}
                    required
                  />
                </div>
              </div>{" "}
              <div className="form-buttons">
                <button type="submit">save</button>
                <button onClick={handleAddEducation}>cancel</button>
              </div>
            </form>
          ) : (
            <div>
              <EducationList educations={educations} handleHidden={handleHidden}/>
              <button onClick={handleAddEducation}>+ Education</button>
            </div>
          )}{" "}
        </div>
      </Collapsible>
  );
}

export default EducationForm;
