import React, { useState } from "react";

function Tree({ data, setFile }) {
  const [expaned, setExpanded] = useState({});
  const handleExpansion = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const handleAdd = (fileType, id) => {};
  return (
    <div>
      {data.map((ele, index) => (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleExpansion(ele.id);
              }}
            >
              {ele.isFolder ? "📁" : "📄"} {ele.name}
            </h1>
            <div>
              &nbsp; &nbsp;
              {ele.isFolder && (
                <div>
                  <small>
                    <button onClick={() => handleAdd("folder", ele.id)}>
                      {" "}
                      New Folder +
                    </button>
                  </small>{" "}
                  &nbsp;
                  <small>
                    <button onClick={() => handleAdd("file", ele.id)}>
                      {" "}
                      New File +
                    </button>
                  </small>
                </div>
              )}
            </div>
          </div>

          {ele.children && expaned[ele.id] && (
            <>
              <h3
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  fontSize: "10px",
                }}
              >
                <Tree key={ele.parentId} data={ele.children} />
              </h3>
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default Tree;
