import React, { useState } from "react";
import SnackBar from "../components/SnackBar";

function useSnackbar() {
  const [notificationProps, setNotificationProps] = useState(null);
  let timer ;
  const trigger = (props) => {
    clearTimeout(timer)
    setNotificationProps(props);
    if (props.duration) {
      timer = setTimeout(() => {
        setNotificationProps(null);
      }, props.duration);
    }
  };

  const closeNotification = () => {
    setNotificationProps(null);
  };

  const NotificationComp = ()=>{
    return notificationProps ? (
      <div>
        <SnackBar {...notificationProps} onClose={closeNotification} />
      </div>
    ) :<div></div>;
  } 

  return { trigger, NotificationComp };
}

export default useSnackbar;
