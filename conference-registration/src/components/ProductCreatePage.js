import React, { useState } from "react";

function ProductCreatePage() {
  // Define state for each form field
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [productCategory, setProductCategory] = useState("Electronics");
  const [productDescription, setProductDescription] = useState("");

  // Handle Save button click
  const saveProduct = () => {
    // Simple validation
    if (!productName) {
      alert("Product name is required.");
      return;
    }
    if (!productCode) {
      alert("Product code is required.");
      return;
    }

    // For now, just log the data to console
    const data = {
      productName,
      productCode,
      releaseDate,
      productCategory,
      productDescription,
    };
    console.log("Saving product:", data);

    // Clear form after save
    setProductName("");
    setProductCode("");
    setReleaseDate("");
    setProductCategory("Electronics"); 
    setProductDescription("");
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        width: 600,
        borderRadius: 5,
        padding: 20,
        margin: "10px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "blue" }}>Product Create Page</h1>

      <label>Product Name</label>
      <br />
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <br />

      <label>Product Code</label>
      <br />
      <input
        type="text"
        value={productCode}
        onChange={(e) => setProductCode(e.target.value)}
        placeholder="Product Code"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <br />

      <label>Release Date</label>
      <br />
      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <br />

      <label>Product Category</label>
      <br />
      <select
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      >
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
        <option>Home & Kitchen</option>
        <option>Toys & Games</option>
        <option>Health & Beauty</option>
      </select>
      <br />

      <label>Product Description</label>
      <br />
      <textarea
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        placeholder="Product Description"
        rows={4}
        style={{ width: "100%", padding: 8, marginBottom: 20 }}
      ></textarea>
      <br />

      <button
        onClick={saveProduct}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Save
      </button>
    </div>
  );
}

export default ProductCreatePage;
