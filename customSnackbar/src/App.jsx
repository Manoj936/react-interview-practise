import React from "react";
import "./App.css";
import useSnackbar from "./hooks/useSnackbar";

function App() {
  const { trigger, NotificationComp } = useSnackbar();
  const props = {
    duration: 3000,
  };

  return (
    <>
      <div className="container">
        <div
          className="card"
          onClick={() =>
            trigger({
              ...props,
              type: "success",
              position: "top-left",
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
              position: "top-left",
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
              position: "bottom-right",
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
              position: "bottom-left",
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
