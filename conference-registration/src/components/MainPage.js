import React from "react";

function MainPage({ onSelectPage }) {
  const buttonStyle = {
    display: "block",
    width: "80%",
    margin: "15px auto",
    padding: "12px 0",
    fontSize: 18,
    borderRadius: 6,
    border: "none",
    backgroundColor: "#4D7AFF",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        borderRadius: 8,
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#333" }}>Conference Registration - Main Page</h1>

      <button onClick={() => onSelectPage("create")} style={buttonStyle}>
        Product Create Page
      </button>

      <button onClick={() => onSelectPage("update")} style={buttonStyle}>
        Product Update Page
      </button>

      <button onClick={() => onSelectPage("list")} style={buttonStyle}>
        Product List Page
      </button>
    </div>
  );
}

export default MainPage;
