import React, { useState } from "react";

function ProductUpdatePage({ products, onUpdateProduct, onNavigate }) {
  const [productCodeSearch, setProductCodeSearch] = useState("");
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [productCategory, setProductCategory] = useState("Electronics");
  const [productDescription, setProductDescription] = useState("");

  const getProductInfo = () => {
    if (!productCodeSearch) {
      alert("Please enter a product code to search.");
      return;
    }

    const product = products.find(
      (p) => p.productCode.toLowerCase() === productCodeSearch.toLowerCase()
    );

    if (!product) {
      alert("Product not found.");
      return;
    }

    setProductName(product.productName);
    setProductCode(product.productCode);
    setReleaseDate(product.releaseDate);
    setProductCategory(product.productCategory);
    setProductDescription(product.productDescription);
  };

  const updateProductHandler = () => {
    if (!productName) {
      alert("Product name is required.");
      return;
    }
    if (!productCode) {
      alert("Product code is required.");
      return;
    }

    const updated = {
      productName,
      productCode,
      releaseDate,
      productCategory,
      productDescription,
    };

    onUpdateProduct(updated);
    alert("Product updated successfully!");
    onNavigate("list");

    setProductCodeSearch("");
    setProductName("");
    setProductCode("");
    setReleaseDate("");
    setProductCategory("Electronics");
    setProductDescription("");
  };

  const backButtonStyle = {
    marginTop: 15,
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,
    marginRight: 10,
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        width: 600,
        borderRadius: 5,
        padding: '20px 40px 20px 20px',
        margin: "10px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "blue" }}>Product Update Page</h1>

      <label>Product Code to Search</label>
      <br />
      <input
        type="text"
        value={productCodeSearch}
        onChange={(e) => setProductCodeSearch(e.target.value)}
        placeholder="Enter product code"
        style={{ width: "100%", padding: 8, marginBottom: 15 }}
      />
      <button
        onClick={getProductInfo}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          marginBottom: 20,
        }}
      >
        Find Product
      </button>

      <hr></hr>

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

      <button onClick={updateProductHandler} style={backButtonStyle}>
        Update
      </button>

      <button onClick={() => onNavigate("main")} style={backButtonStyle}>
        Back to Main Page
      </button>
    </div>
  );
}

export default ProductUpdatePage;
