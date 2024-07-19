import React, { useState } from "react";
import {
  CAPITAL_LETTERS,
  NUMBERS,
  SMALL_LETTERS,
  SPECIAL_CHARS,
} from "../constants/helper";

const UsePasswordChecker = () => {
  const [statusMsg, setStatus] = useState("");
  const containsAny = (str, items) => {
    return items.split("").some((item) => str.includes(item));
  };
  const checkPasswordStrength = (password) => {
    let status = "";
    if (!password) {
      return;
    }
    for (let i = 0; i < password.length; i++) {
      if (
        password.length >= 8 &&
        containsAny(SPECIAL_CHARS, password) &&
        containsAny(CAPITAL_LETTERS, password) &&
        containsAny(SMALL_LETTERS, password) &&
        containsAny(NUMBERS, password)
      ) {
        status ="Very strong";
      } else if (
        password.length >= 8 &&
        containsAny(SPECIAL_CHARS, password) ||
        containsAny(CAPITAL_LETTERS, password) ||
        containsAny(NUMBERS, password)
      ) {
        status = "Strong";
      } else if (password.length <= 6) {
        status = "Normal";
      } else {
        status ="Weak";
      }
    }
    setStatus(status)
  };
  return { checkPasswordStrength  , statusMsg};
};

export default UsePasswordChecker;
