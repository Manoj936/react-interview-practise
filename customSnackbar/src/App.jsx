import React from "react";
import "./App.css";
import useSnackbar from "./hooks/useSnackbar";

function App() {
  const { trigger, NotificationComp } = useSnackbar();
  const props = {
    duration: 3000,
  };

  const getRandomString= () =>{
    const strings = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right"
    ];
  
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  }
  return (
    <>
      <div className="container">
        <div
          className="card"
          onClick={() =>
            trigger({
              ...props,
              type: "success",
              position: getRandomString(),
              message: "You are getting success",
            })
          }
        >
          SUCCESS
        </div>
        <div
          className="card"
          onClick={() =>
            trigger({
              ...props,
              type: "info",
              position:  getRandomString(),
              message: "You are getting info",
            })
          }
        >
          INFO
        </div>
        <div
          className="card"
          onClick={() =>
            trigger({
              ...props,
              type: "warning",
              position:  getRandomString(),
              message: "You are getting warning",
            })
          }
        >
          WARNING
        </div>
        <div
          className="card"
          onClick={() =>
            trigger({
              ...props,
              type: "danger",
              position:  getRandomString(),
              message: "You are getting danger",
            })
          }
        >
          DANGER
        </div>
      </div>
      <NotificationComp />
    </>
  );
}

export default App;
