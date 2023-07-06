import React from "react";

const User = ({ name, designation, year }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{designation}</div>
      <div>{year}</div>
    </div>
  );
};

export default User;
