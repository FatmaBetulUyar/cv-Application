import "./styles/App.css";
import "./styles/Resume.css";
//import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import PersonalForm from "./components/Form/Personal/PersonalForm";
import EducationForm from "./components/Form/Education/EducationForm";
import PersonalSection from "./components/Resume/PersonalSection";
import EducationSection from "./components/Resume/EducationSection";
import ExperienceForm from "./components/Form/Experience/ExperienceForm";
import ExperienceSection from "./components/Resume/ExperienceSection";
import ResumeButtons from "./components/Form/ResumeButtons/ResumeButtons";
import {
  initalPersonalInfo,
  initalEducations,
  initalExperiences,
} from "./initalDatas";
import Sidebar from "./components/Form/Sidebar/Sidebar";
function App() {
  const [personalInfo, setPersonalInfo] = useState(initalPersonalInfo);
  const [educations, setEducations] = useState(initalEducations);
  const [education, setEducation] = useState(initalEducations);
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState(initalExperiences);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setPersonalInfo(initalPersonalInfo);
    setEducations(initalEducations);
    setExperiences(initalExperiences);
  }, []);

  const handlePersonalInfoChange = (event) => {
    setPersonalInfo({
      ...personalInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeEducation = (event) => {
    const { name, value } = event.target;

    // Update the education object
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));

    console.log("value is:", value);
  };

  const handleChangeExperience = (event) => {
    const { name, value } = event.target;

    // Update the education object
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));

    console.log("value is:", value);
  };
  const addExperience = () => {
    setIsClicked(true);
    console.log(experiences);
  };

  const handleAddEducation = (newEducation) => {
    // Add the new education to the array
    setEducations((currentEducations) => [...currentEducations, newEducation]);
    setIsClicked(false);
  };

  const handleClickExperience = (newExperience) => {
    // Add the new education to the array
    setExperiences((currentExperiences) => [
      ...currentExperiences,
      newExperience,
    ]);
    setIsClicked(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new education object with the entered values
    const newEducation = {
      id: Math.floor(Math.random() * 100),
      school: education.school,
      degree: education.degree,
      startDate: education.startDate,
      endDate: education.endDate,
      isHidden: education.isHidden,
    };

    // Add the new education to the array
    handleAddEducation(newEducation);

    // Reset the form fields (if needed)
    // Clear the form fields by setting them to empty strings
    setEducation({
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      isHidden: false,
    });
  };

  const handleSubmitExperience = (event) => {
    event.preventDefault();

    const newExperience = {
      id: Math.floor(Math.random() * 100),
      company: experience.company,
      title: experience.title,
      startDate: experience.startDate,
      endDate: experience.endDate,
      location: experience.location,
      description: experience.description,
      isHidden: education.isHidden,
    };

    // Add the new education to the array
    handleClickExperience(newExperience);

    // Reset the form fields (if needed)
    // Clear the form fields by setting them to empty strings
    setExperience({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      isHidden: false,
    });
  };

  // Use filter to create a new array without the hiddenItem
  const handleHiddenEducation = (item) => {
    const updatedEducations = educations.map((education) => {
      if (education.id === item.id) {
        // Toggle the isHidden property for the clicked item
        return {
          ...education,
          isHidden: !education.isHidden,
        };
      }
      return education;
    });

    setEducations(updatedEducations);
  };

  const handleHiddenExperience = (item) => {
    const updatedExperiences = experiences.map((experience) => {
      if (experience.id === item.id) {
        // Toggle the isHidden property for the clicked item
        return {
          ...experience,
          isHidden: !experience.isHidden,
        };
      }
      return experience;
    });

    setExperiences(updatedExperiences);
  };

  const handleClearResume = () => {
    setEducations([]);
    setExperiences([]);
    setPersonalInfo([]);
  };

  const handleLoadExample = () => {
    setPersonalInfo(initalPersonalInfo);
    setEducations(initalEducations);
    setExperiences(initalExperiences);
  };

  return (
    <>
      {/* <div>
        <Sidebar />
      </div> */}
      <div className="container-form">
        <div className="form-buttons">
          <ResumeButtons
            handleClearResume={handleClearResume}
            handleLoadExample={handleLoadExample}
          />
        </div>
        <div className="form-base">
          {" "}
          <PersonalForm
            handleChange={handlePersonalInfoChange}
            name={personalInfo.name}
            email={personalInfo.email}
            phone={personalInfo.phone}
            address={personalInfo.address}
          />{" "}
        </div>
        <div className="form-education">
          <EducationForm
            handleChange={handleChangeEducation}
            handleSubmit={handleSubmit}
            handleHidden={handleHiddenEducation}
            education={education}
            educations={educations}
          />
        </div>
        <div className="form-experience">
          <ExperienceForm
            handleChange={handleChangeExperience}
            handleClick={addExperience}
            handleHidden={handleHiddenExperience}
            handleSubmit={handleSubmitExperience}
            experience={experience}
            experiences={experiences}
          />
        </div>
      </div>
      <div className="container-resume">
        <PersonalSection
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
        />
        <EducationSection educations={educations} />
        <ExperienceSection experiences={experiences} />
      </div>
    </>
  );
}

export default App;
