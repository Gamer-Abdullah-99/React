import React from "react";

export default function UserInfo({
  userName,
  organization,
  designation,
  institute,
  course,
}) {
  return (
    <div>
      <h1>{userName}</h1>
      {organization ? (
        <div>
          <p>Organization : {organization}</p>
          <p>Designation : {designation}</p>
        </div>
      ) : (
        <div>
          <p>Institute : {institute}</p>
          <p>Course : {course}</p>
        </div>
      )}
    </div>
  );
}
