import React, { useEffect, useState } from "react";
import UsePasswordChecker from "../hooks/UsePasswordChecker";

const PasswordClipboard = ({ password }) => {
  const [isCopy, setIsCopy] = useState(false);
  const { checkPasswordStrength, statusMsg } = UsePasswordChecker();
  useEffect(() => {
    if (password) {
      setIsCopy(false);
      checkPasswordStrength(password);
    }
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
      {statusMsg && <small>{statusMsg}</small>}
    </>
  );
};

export default PasswordClipboard;
