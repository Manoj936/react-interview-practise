import React, { useEffect, useState } from "react";

const PasswordClipboard = ({ password }) => {
  const [isCopy, setIsCopy] = useState(false);
  useEffect(() => {
    setIsCopy(false);
  }, [password]);
  const copyPass = () => {
    navigator.clipboard.writeText(password);
    setIsCopy(true);
  };
  return (
    <>
      <div className="passwordsec">
        <h4>{password}</h4>
        <div className="submitbtn">
          <button type="button" onClick={copyPass}>
            {isCopy ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordClipboard;
