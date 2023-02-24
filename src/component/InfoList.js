import React from "react";

function InfoList() {
  const data = [
    { ID: "Birthday", Value: "1 May 1995" },
    { ID: "Website", Value: "www.chrisgurung.com.np" },
    { ID: "Phone", Value: "+123 456789" },
    { ID: "City", Value: "Kathmandu, Nepal" },
    { ID: "Age", Value: "23" },
    { ID: "Degree", Value: "Bachelor" },
    { ID: "Email", Value: "chris.gurung57@gmail.com" },
    { ID: "Freelance", Value: "Available" },
  ];
  const listItems = data.map((element) => {
    return (
      <ul>
        <li>
          <i className="bi bi-chevron-right"></i> <strong>{element.ID}</strong>{" "}
          <span>{element.Value}</span>
        </li>
      </ul>
    );
  });
  return <div>{listItems}</div>;
}

export default InfoList;
