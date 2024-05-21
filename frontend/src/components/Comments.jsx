"use client";
import React, { useState, useEffect } from "react";
import fetchComment from './utils/fetchComment';

const Comments = ({ coffeeId  }) => {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    const getComments = async () => {
      const commentData = await fetchComment(coffeeId);
      setComments(commentData);
    };

    getComments();
  }, []);

  if (!comments) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="flex-1 overflow-auto" style={{ maxHeight: '400px' }}>
      {comments.map(comment => (
        <div key={comment.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
          <div><strong>{comment.nickName}</strong></div>
          <div>{comment.content}</div>
        </div>
      ))}
    </div>
  );
};
  
export default Comments;