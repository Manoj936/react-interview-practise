import React, { useState } from "react";
import useCommentHook from "../hooks/useCommentHook";

const CommentComponent = ({ comment, addLikes, addReply, removeCmnt , addDislike }) => {
  const [reply, setReply] = useState("");
  const [isReplyClicked, setIsRepliedClicked] = useState(false);

  const applyReply = (id, content) => {
    if (content) {
      setReply("");
      setIsRepliedClicked(!isReplyClicked);
      addReply(id, content);
    }
  };
  const deleteCmnt = (id) => {
    removeCmnt(id);
  };
  return (
    <div key={comment.id} className="cmnt-container">
      <h2>{comment.content}</h2>

      <h4>Likes : {comment?.likes} </h4>
      <h4>Dislikes : {comment?.dislikes} </h4>

      <h4>Posted On : {new Date(comment?.timestamp).toLocaleDateString()}</h4>
      <button
        className="btn-action"
        onClick={() => setIsRepliedClicked(!isReplyClicked)}
      >
        {isReplyClicked ? "Hide Reply" : "Reply"}
      </button>
      <button className="btn-action">Edit</button>
      <button className="btn-action" onClick={() => addLikes(comment.id)}>
        🤍
      </button>
      <button className="btn-action" onClick={() => addDislike(comment.id)}>
        👎
      </button>
      <button className="btn-action" onClick={() => deleteCmnt(comment.id)}>
        🗑️
      </button>
      {isReplyClicked && (
        <div className="comment-box">
          <textarea
            className="cmnt-box"
            rows={3}
            cols={300}
            name="reply"
            value={reply}
            onChange={(e) => setReply(e?.target?.value)}
          />
          <button
            type="button"
            onClick={() => applyReply(comment.id, reply)}
            className="btn"
          >
            Submit Reply
          </button>
        </div>
      )}
      {comment?.replies?.map((reply, id) => (
        <CommentComponent
          Key={id}
          comment={reply}
          addReply={addReply}
          addLikes={addLikes}
          addDislike={addDislike}
          removeCmnt={removeCmnt}
        />
      ))}
    </div>
  );
};

export default CommentComponent;
