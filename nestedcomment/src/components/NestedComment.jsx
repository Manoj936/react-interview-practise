import React, { useState } from "react";
import useCommentHook from "../hooks/useCommentHook";
import CommentComponent from "./CommentComponent";

const NestedComment = ({ comments }) => {
  const [comment, setComment] = useState("");

  const {
    comments: commentsData,
    insertComment,
    insertVote,
    insertDisLikes,
    remove
  } = useCommentHook(comments);
  const handleCmntChange = (e) => {
    setComment(e?.target?.value);
  };
  const submitPrimaryCmnt = () => {
    insertComment(undefined, comment);
    setComment("");
  };

  const addReply = (id, content) => {
    if (content) {
      insertComment(id, content);
    }
  };
  const addLikes = (id) => {
    insertVote(id);
  };
const addDislike = (id)=>{
    insertDisLikes(id);
}
 const removeCmnt = (id)=>{
    remove(id)
 }

  return (
    <div className="container">
      <div className="comment-box">
        <textarea
          className="cmnt-box"
          rows={5}
          cols={400}
          name="comment"
          value={comment}
          onChange={handleCmntChange}
        />
        <button type="button" className="btn" onClick={submitPrimaryCmnt}>
          Add Comment
        </button>
      </div>
      {/* Render existing comments */}

      {commentsData?.map((comment, id) => (
        <CommentComponent
          Key={id}
          comment={comment}
          addReply={addReply}
          addLikes={addLikes}
          addDislike={addDislike}
          removeCmnt={removeCmnt}
        />
      ))}
    </div>
  );
};

export default NestedComment;
