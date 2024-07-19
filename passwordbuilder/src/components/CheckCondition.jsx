import React, { useEffect, useState } from "react";
import ConditionsData from "../constants/data.json";
const CheckCondition = ({ submitCondition }) => {
  const [conditions, setConditions] = useState(ConditionsData);

  const sendConition = () => {
    submitCondition(conditions);
  };
  const handleConditionChange = (index) => {
    setConditions((prevVal) => {
      const newCondition = [...prevVal];
      newCondition[index] = {
        ...newCondition[index],
        status: !newCondition[index].status,
      };
      return newCondition;
    });
  };
  return (
    <>
      <div className="checkBoxContainer">
        {conditions?.map((item, index) => (
          <div className="checkBox" key={index}>
            <input
              type="checkbox"
              value={item.status}
              checked={item.status}
              onChange={() => handleConditionChange(index)}
            />{" "}
            {item.title}
          </div>
        ))}
      </div>

      <div className="submitbtn">
        <button type="button" onClick={sendConition}>
          Submit
        </button>
      </div>
    </>
  );
};

export default CheckCondition;
