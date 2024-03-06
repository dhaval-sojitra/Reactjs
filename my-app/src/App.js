import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          margin: 5,
          marginBottom: 0
        }}
      >
        <p style={{ marginRight: "auto", marginLeft: "20px" }}>{props.name}</p>
        <button
          style={{
            marginLeft: "auto",
            marginRight: 20,
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer", // Change cursor to pointer on hover
            transition: "background-color 0.3s, color 0.3s" // Smooth transition for hover effect
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = "grey"; }} // Change background color on hover
          onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; }} // Reset background color on mouse leave
        >
          Copy
        </button>
      </div>
      <div
        style={{ backgroundColor: "grey", padding: 10, margin: 5, marginTop: 0 }}
      >
        <p padding="10px" style={{ color: "white", marginLeft: 20 }}>
         {props.command}
        </p>
      </div>
    </>
  );
}

export default App;
