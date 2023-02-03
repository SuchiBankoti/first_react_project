import React from "react";

export default function User(props) {
  const { name, age } = props;
  return (
    <div className="user">
      {name}({age}years old)
    </div>
  );
}
