import React from "react";
import { suggestions } from "../db/db"; 

const Suggestions = () => {
  return (
    <>
    <div className="card p-3 border-0 rounded"> 
      <h5 className="card-title mb-3 text-secondary fw-semibold">
        Suggestions For You
      </h5>

      {suggestions.map((user) => (
        <div
          key={user.id}
          className="d-flex align-items-center mb-3 p-2 " //rounded hover-shadow-sm
        >
          <img
            src={user.profile}
            alt={user.username}
            className="rounded-circle me-3"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />
          <div>
            <h6 className="mb-0 fw-medium text-dark">{user.username}</h6>
            <small className="text-muted">@{user.username}</small>
          </div>
          <button className="test-primary ms-auto">Follow</button>
        </div>
      ))}
    </div>
    </>
    


    
  );
};


export default Suggestions;
