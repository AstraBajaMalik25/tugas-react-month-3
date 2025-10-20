import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
        <div style={{ border: '1px solid red', padding: '20px', margin: '20px', backgroundColor: '#ffe6e6' }}>
          <h2>Terjadi Kesalahan!</h2>
          <p>Maaf, ada yang tidak beres.</p>
        </div>
      );
    }


export default NotFound;
