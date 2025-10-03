import React from "react";

function Card(props) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;