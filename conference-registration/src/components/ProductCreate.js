 
// Define the ProductCreatePage component which receives two props:
 
function ProductCreate() {

  // Define styles for the "Back to Main Page" button
  const backButtonStyle = {
    marginTop: 15,
    marginLeft:15,
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 16,
  };

  // The JSX returned by the component - the form UI
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4", // Light gray background for the form container
        width: 600, // Fixed width
        borderRadius: 5, // Rounded corners
        padding: "20px 40px 20px 20px", // Inner spacing
        margin: "10px auto", // Center horizontally with margin top/bottom
        fontFamily: "Arial, sans-serif", // Font styling
      }}
    >
      {/* Title of the page */}
      <h1 style={{ color: "blue" }}>Product Create Page</h1>

      {/* Label for product name input */}
      <label>Product Name</label>
      <br />
      {/* Input field bound to productName state */}
      <input
        type="text"
        placeholder="Product Name"
        style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
      />
      <br />

      {/* Label for product code input */}
      <label>Product Code</label>
      <br />
      {/* Input field bound to productCode state */}
      <input
        type="text"
        placeholder="Product Code"
        style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
      />
      <br />

      {/* Label for release date input */}
      <label>Release Date</label>
      <br />
      {/* Date input bound to releaseDate state */}
      <input
        type="date"
        style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
      />
      <br />

      {/* Label for category selection */}
      <label>Product Category</label>
      <br />
      {/* Select dropdown bound to productCategory state */}
      <select
        style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
      >
        {/* Options for category */}
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
        <option>Home & Kitchen</option>
        <option>Toys & Games</option>
        <option>Health & Beauty</option>
      </select>
      <br />

      {/* Label for product description */}
      <label>Product Description</label>
      <br />
      {/* Textarea bound to productDescription state */}
      <textarea
        placeholder="Product Description"
        rows={4} // Number of visible text lines
        style={{ width: "100%", padding: 8, marginBottom: 20 }} // Styling
      ></textarea>
      <br />

      {/* Save button triggers saveProduct function */}
      <button
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

      {/* Back button triggers navigation back to Main Page */}
      <button  style={backButtonStyle}>
        Back to Main Page
      </button>
    </div>
  );
}

export default ProductCreate; // Export component for use in other files
