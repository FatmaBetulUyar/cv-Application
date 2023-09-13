import "../../styles/PersonalSection.css"
function PersonalSection({name,email,phone,address}) {
  return (
    <div className="resume-personal">
      <div className="resume-header">
        <div className="resume-header-name">{name}</div>
        <div className="resume-header-content">
          <div className="resume-header-email">{email}</div>
          <div className="resume-header-phone">{phone}</div>
          <div className="resume-header-address">{address}</div>
        </div>
      </div>
    </div>
  );
}

export default PersonalSection;
