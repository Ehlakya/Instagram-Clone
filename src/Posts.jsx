import React from "react";
import { posts } from "../db/db";

const Feed = () => {
  return (
    <div className="">
      {posts.map((post) => (
        <div key={post.id} className="my-3 ">
          <div className="d-flex">
            <img src={post.user.profile} alt="profile_pic" className="dp rounded-circle" />
            <span>{post.user.username}</span>
          </div>

          <img src={post.image} alt="Post" className="image" />
          <div>
            <p><strong>{post.user.username}</strong> {post.caption}</p>
            <p>❤️ {post.likes} likes</p>

            <div className="comments">
              {post.comments.map((c, index) => (
                <p key={index}>
                  <strong>{c.username}</strong> {c.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
