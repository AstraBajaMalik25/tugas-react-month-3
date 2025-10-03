import React from "react";

function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
    />
  );
}

export default Avatar;