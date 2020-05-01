import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    if (!name || !room) e.preventDefault();
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="" type="text" className="joinInput" onChange={(e) => setName(e.target.value)} />
          <input placeholder="" type="text" className="joinInput mt-20" onChange={(e) => setRoom(e.target.value)} />
          <Link onClick={handleSubmit} to={`/chat?name=${name}&room=${room}`}>
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
