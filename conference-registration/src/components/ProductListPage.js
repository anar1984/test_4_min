import React, { useState } from "react";

function ProductListPage({ products, onNavigate }) {
  const [filterCode, setFilterCode] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productCode.toLowerCase().includes(filterCode.toLowerCase())
  );

  const backButtonStyle = {
    marginTop: 20,
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,
  };

  const thStyle = {
    padding: "10px",
    border: "1px solid gray",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid gray",
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        width: 900,
        margin: "20px auto",
        padding: 20,
        borderRadius: 5,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "blue" }}>Product List Page</h1>

      <input
        type="search"
        placeholder="Type Product Code to Filter"
        value={filterCode}
        onChange={(e) => setFilterCode(e.target.value)}
        style={{
          width: "300px",
          padding: "8px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid gray",
        }}
      >
        <thead style={{ backgroundColor: "#ddd" }}>
          <tr>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Product Code</th>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Release Date</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "15px" }}>
                No products found.
              </td>
            </tr>
          ) : (
            filteredProducts.map((product, index) => (
              <tr key={product.productCode}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{product.productCode}</td>
                <td style={tdStyle}>{product.productName}</td>
                <td style={tdStyle}>{product.productCategory}</td>
                <td style={tdStyle}>{product.releaseDate}</td>
                <td style={tdStyle}>{product.productDescription}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button onClick={() => onNavigate("main")} style={backButtonStyle}>
        Back to Main Page
      </button>
    </div>
  );
}

export default ProductListPage;
