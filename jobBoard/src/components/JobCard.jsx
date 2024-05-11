import React from "react";

export default function JobCard(props) {
 
  return (
    <>
    <div className="Card">
        <h3>
           {props.index+1}. {props.title}
        </h3>
        <div className="details">
            <small>
                By : {props.by}
            </small>
            <small>
                Applied By : {props.score} member
            </small>
            <small>
               Published On : {props.time ? new Date(props.time * 1000).toLocaleDateString() : 'NA'}
            </small>
        </div>
    </div>
    </>
  );
}
