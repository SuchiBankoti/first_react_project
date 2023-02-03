import React, { useState } from "react";
import Form from "./Form";
import User from "./User";
import Alert from "./Alert";
function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    college: "",
  });
  const [users, setUsers] = useState([]);
  const [alertbox, setAlertbox] = useState(false);
  function addUser(formdata) {
    if (
      !formdata.name ||
      !formdata.age ||
      !formdata.age < 0 ||
      !formdata.college
    ) {
      setAlertbox(true);
    } else {
      setUsers((prev) => [...prev, formdata]);
      setFormdata((prev) => {
        return { ...prev, name: "", age: "" };
      });
    }
  }
  const allUsers = users.map((user) => (
    <User name={user.name} age={user.age} />
  ));
  return (
    <div
      className="content"
      style={{ background: alertbox ? "black" : "white" }}
    >
      <div className="main-page">
        <Form
          addUser={addUser}
          formdata={formdata}
          setFormdata={setFormdata}
          alertbox={alertbox}
        />
        <div className="all-users" style={{ opacity: alertbox ? "0.5" : 1 }}>
          {allUsers}
        </div>
      </div>
      <Alert
        formdata={formdata}
        alertbox={alertbox}
        setAlertbox={setAlertbox}
      />
    </div>
  );
}

export default App;
