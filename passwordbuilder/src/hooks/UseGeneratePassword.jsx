import React, { useEffect, useState } from "react";
import {
  CAPITAL_LETTERS,
  NUMBERS,
  SMALL_LETTERS,
  SPECIAL_CHARS,
} from "../constants/helper";

const UseGeneratePassword = () => {
  const [password, setPassword] = useState("");

  const generatePassword = (conditions, length) => {
    let characters = "";

    let approvedConditions = conditions.filter((item) => item.status == true);

    for (let condition of approvedConditions) {
      switch (condition.title) {
        case "Include Capital Letter":
          characters += CAPITAL_LETTERS;
          break;
        case "Include Special Character":
          characters += SPECIAL_CHARS;
          break;
        case "Include small Letter":
          characters += SMALL_LETTERS;
          break;
        case "Include Number":
          characters += NUMBERS;
          break;
        default:
          break;
      }
    }

    let generatedPass = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      generatedPass += characters[index];
    }
    console.log(generatedPass, "generatedPass");
    setPassword(generatedPass);
  };
  return { password, generatePassword };
};

export default UseGeneratePassword;
