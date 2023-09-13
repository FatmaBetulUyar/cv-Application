import "../../../styles/Form.css";
import "../../../styles/PersonalForm.css";
function PersonalForm({ name, email, phone, address, handleChange }) {
  console.log("personal form name: ", name);

  
  return (
    <div className="form-personal">
      <div className="header-personal">
        {" "}
        <div className="header">Personal Info</div>
      </div>
      <div className="form-name">
        <label
          className="label-name"
         
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name and Surname "
          className="input-name"
          onChange={handleChange}
        />
      </div>
      <div className="form-email">
        <label className="label-email" >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="someone@example.com"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          className="input-email"
          onChange={handleChange}
        />
      </div>
      <div className="form-phone">
        <label className="label-phone" >
          Phone
        </label>
        <input
          name="phone"
          id="phone"
          type="text"
          required placeholder="(xxx) - xxx - xxxx "
          className="input-phone"
          onChange={handleChange}
        />
      </div>
      <div className="form-address">
        <label className="label-address" >
          Address
        </label>
        <input
          name="address"
          id="address"
          type="text"
          placeholder="City, Country "
          className="input-address"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
