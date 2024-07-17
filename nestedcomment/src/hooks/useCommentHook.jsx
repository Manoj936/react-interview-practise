import { useEffect, useState } from "react";

const useCommentHook = (initialComments) => {
  const [comments, setComments] = useState(initialComments);
  useEffect(() => {
    console.log({ comments });
  }, [comments, setComments]);
  const insertNode = (tree, commentId, content) => {
    return tree?.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [content , ...comment.replies],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const removeComment = (tree, commentId) => {
    return tree.filter((comment) => {
      if (comment.id === commentId) {
        return false;
      }
      if (comment.replies && comment.replies.length > 0) {
        comment.replies = removeComment(comment.replies, commentId);
      }
      return true;
    });
  };
  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      likes: 0,
      dislikes:0,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      );
    } else {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  };
  const manageVoteDislike = (tree, commentId) => {
    return tree?.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          dislikes: comment.dislikes + 1,
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: manageVoteDislike(comment.replies, commentId),
        };
      }
      return comment;
    });
  };
  const manageVoteLike = (tree, commentId) => {
    return tree?.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: manageVoteLike(comment.replies, commentId),
        };
      }
      return comment;
    });
  };
  const insertVote = (commentId) => {
    if (commentId) {
      setComments((prevComments) => manageVoteLike(prevComments, commentId));
    }
  };
  const insertDisLikes = (commentId) => {
    if (commentId) {
      setComments((prevComments) => manageVoteDislike(prevComments, commentId));
    }
  };
  const remove = (commentId) => {
    if (commentId) {
      setComments((prevComments) => removeComment(prevComments, commentId));
    }
  };
  return {
    comments,
    insertComment,
    insertVote,
    remove,
    insertDisLikes,
  };
};

export default useCommentHook;
