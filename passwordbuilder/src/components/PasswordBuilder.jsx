import React, { useState } from "react";
import CheckCondition from "./CheckCondition";
import UseGeneratePassword from "../hooks/UseGeneratePassword";
import PasswordClipboard from "./PasswordClipboard";

const PasswordBuilder = () => {
  const [range, setRange] = useState(6);
  const { password, generatePassword } = UseGeneratePassword();
  const getAppliedConditions = (data) => {
    if (data.every((item) => item.status == false)) {
      window.alert("Please select one or many condition");
      return;
    }
    generatePassword(data, range);
  };

  return (
    <div className="container">
      {password && <PasswordClipboard password={password} />}
      <div className="form">
        <div className="lengthLable">
          <h4>Length</h4>
          <h4>
            <strong>{range}</strong>
          </h4>
        </div>
        <input
          type="range"
          className="range"
          value={range}
          min={6}
          max={18}
          onChange={(e) => setRange(e.target.value)}
        />
        <h3>Conditions</h3>
        <CheckCondition submitCondition={getAppliedConditions} />
      </div>
    </div>
  );
};

export default PasswordBuilder;
