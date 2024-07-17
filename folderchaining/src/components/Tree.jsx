import React, { useEffect, useState } from "react";

function Tree({ data, setFile }) {

    
  const [expaned, setExpanded] = useState({});
  const handleExpansion = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const getIds = () => {
    return Math.ceil(Math.random() * 10000);
  };
  useEffect(() => {
    console.log(data, setFile);
  }, [data, setFile]);
  const handleAdd = (fileType, id) => {
    const promt = window.prompt(`Please specify ${fileType} name`);
    if (promt) {
      const isFolder = fileType === "folder" ? true : false;
    } else {
      return false;
    }
  };
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
              &nbsp; &nbsp; &nbsp; &nbsp;
              {ele.isFolder && (
                <div style={{ marginBottom: "10px" }}>
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
