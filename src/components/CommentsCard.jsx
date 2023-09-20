import React, { useState, useEffect } from "react";

function CommentsCard() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000");

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (newComment) {
      const newCommentObj = {
        text: newComment,
        color: selectedColor,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setSelectedColor("#000");
    }
  };

  return (
    <div className="card">
      <h2>Comments</h2>
      <input
        type="text"
        placeholder="Enter comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={{ color: comment.color }}>
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsCard;
