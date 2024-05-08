import React, { useEffect, useState } from "react";

export default function LightGrid() {
  const [checkLight, setCheckLight] = useState([]);
  const GRID_CONFIG = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const addLight = (index) => {
    if (checkLight.includes(index)) {
      return;
    }
    setCheckLight((prevVal) => [...prevVal, index]);
  };

  useEffect(() => {
    let interval;
    if (
      checkLight.length ===
      GRID_CONFIG.flat(1).filter((item) => item !== 0).length
    ) {
      interval = setInterval(() => {
        setCheckLight((prevVal) => {
          if (prevVal.length > 0) {
            const newArr = [...prevVal];
            newArr.pop();
            return newArr;
          }
          clearInterval(interval);
          return prevVal;
        });
      }, 1000);
      
    }
  }, [checkLight]);

  return (
    <>
      <div className="container">
        <div className="grid">
          {GRID_CONFIG.flat(1).map((item, index) => {
            return item ? (
              <button
                className={`cell ${checkLight.includes(index) ? "active" : ""}`}
                key={index}
                onClick={() => addLight(index)}
              >
                {""}
              </button>
            ) : (
              <span key={index} />
            );
          })}
        </div>
      </div>
    </>
  );
}
