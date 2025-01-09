import React, { useState } from "react";

const FormWithOutYup = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    conformPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });
  const handlesubmit = (e) => {
    // e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    const updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interests) => interests !== name
      );
    }
    setformData({
      ...formData,
      interests: updatedInterests,
    });
  };

  return (
    <form className="form" onSubmit={handlesubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Conform Password:</label>
        <input
          type="password"
          name="conformPassword"
          value={formData.conformPassword}
          placeholder="conform your password"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          {/* <option value="">Select Gender</option> */}
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Interests:</label>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={formData.interests.includes("coding")}
            onChange={handleCheckboxChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={formData.interests.includes("sports")}
            onChange={handleCheckboxChange}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            name="reading"
            checked={formData.interests.includes("reading")}
            onChange={handleCheckboxChange}
          />
          Reading
        </label>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          placeholder="Enter your date of birth"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithOutYup;
