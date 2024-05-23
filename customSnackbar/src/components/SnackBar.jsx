import React from "react";
import {
  AiFillWarning,
  AiOutlineCheckCircle,
  AiOutlineStop,
} from "react-icons/ai";
import { FaInfo, FaRegWindowClose } from "react-icons/fa";

function SnackBar({
  type = "info",
  position = "top-left",
  message = "this is a message",
  onClose,
}) {
  const icons = {
    info: <FaInfo />,
    warning: <AiFillWarning />,
    success: <AiOutlineCheckCircle />,
    danger: <AiOutlineStop />,
  };

  return (
    <div className={`snackbarContainer bg-${type} ${position}`}>
      <div className="icon">{icons[type]}</div>
      <div className="message">{message}</div>
      <div className="cancel" onClick={onClose}>
        <FaRegWindowClose />
      </div>
    </div>
  );
}

export default SnackBar;
