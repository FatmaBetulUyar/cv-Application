/* eslint-disable react/prop-types */

import { useState } from "react";
import Collapsible from "../../Collapsible";
import ExperienceList from "./ExperienceList";
import "../../../styles/Form.css"
function ExperienceForm({
  handleChange,
  handleSubmit,
  handleHidden,
  experience,
  experiences,
}) {
  const [isClickExperience, setIsClickExperience] = useState(false);
  const handleAddExperience = () => {
    setIsClickExperience(!isClickExperience);
  };

  return (
      <Collapsible label="experience" className="collapsable form-base">
        {isClickExperience ? (
          <form onSubmit={handleSubmit}>
            <div className="form-company">
              <label
                className="label-company"
                placeholder="Enter your company "
              >
                Company
              </label>
              <input
                name="company"
                type="text"
                className="input-company"
                onChange={handleChange}
                value={experience.company}
                required
              />
            </div>
            <div className="form-title">
              <label
                className="label-title"
                placeholder="Enter your title "
              >
                Title
              </label>
              <input
                name="title"
                type="text"
                className="input-title"
                onChange={handleChange}
                value={experience.title}
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
                <div className="input-date">
                  <input
                    name="startDate"
                    type="month"
                    required
                    className="input-date-start"
                    onChange={handleChange}
                    value={experience.startDate}
                  />{" "}
                  <span className="validity"></span>
                </div>
              </div>
              <div className="form-date-end">
                <label
                  className="label-date-end"
                  placeholder="Enter your end date "
                >
                  End Date
                </label>
                <div className="input-date">
                <input
                  name="endDate"
                  type="month"
                  className="input-date-end"
                  onChange={handleChange}
                  value={experience.endDate}
                  required
                />
                <span className="validity"></span></div>
              </div>{" "}
            </div>
            <div className="form-location">
              <label
                className="label-location"
                placeholder="Enter your location "
              >
                Location
              </label>
              <input
                name="location"
                type="text"
                className="input-location"
                onChange={handleChange}
                value={experience.location}
              />
            </div>{" "}
            <div className="form-description">
              <label
                className="label-description"
                placeholder="Enter your description "
              >
                Description
              </label>
              <textarea
                name="description"
                type="text"
                className="input-description"
                onChange={handleChange}
                value={experience.description}
              />
            </div>
            <div className="form-buttons">
              <button type="submit">save</button>
              <button onClick={handleAddExperience}>cancel</button>
            </div>
          </form>
        ) : (
          <div>
            <ExperienceList
              experiences={experiences}
              handleHidden={handleHidden}
            />
            <button onClick={handleAddExperience}>+ Experience</button>
          </div>
        )}
      </Collapsible>
  );
}

export default ExperienceForm;
