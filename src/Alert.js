import React from "react";
import "./Alert.css";
export default function Alert(props) {
  const { formdata, alertbox, setAlertbox } = props;

  return (
    <div className={alertbox ? "alert" : "no-alert"}>
      <h2 className="heading">Invalid input</h2>
      {!formdata.name && !formdata.age ? (
        <div className="msg-box">
          please enter a valid name and age(non-empty values)
        </div>
      ) : !formdata.age || formdata.age < 0 ? (
        <div className="msg-box">please enter a valid age(greater than 0)</div>
      ) : (
        <div className="msg-box">please give a valid name</div>
      )}
      <button className="alert-btn" onClick={() => setAlertbox(false)}>
        Okay
      </button>
    </div>
  );
}
