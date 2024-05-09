import React from "react";

export default function CustomProgressBar({ width }) {
  return (
    <>
      <div className="progressBarContainer">
        <div className="progress" style={{ width: `${width}%` }} />
      </div>
      <div style={{ textAlign: "center" }}>
        {" "}
        {width < 100 ? "Loading..." : "Completed"}
      </div>
    </>
  );
}
