import React from "react";

export default function Form(props) {
  const { addUser, formdata, setFormdata, alertbox } = props;
  function handleChange(e) {
    setFormdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="form-container" style={{ opacity: alertbox ? "0.5" : 1 }}>
      <form className="form">
        <label>
          Username
          <br />
          <input
            type="text"
            value={formdata.name}
            name="name"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Age(Years)
          <br />
          <input
            type="number"
            value={formdata.age}
            name="age"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          College name
          <br />
          <input
            type="text"
            value={formdata.college}
            name="college"
            onChange={handleChange}
          ></input>
        </label>
      </form>
      <br />
      <button onClick={() => addUser(formdata)}>Add User</button>
    </div>
  );
}
