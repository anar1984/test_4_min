// Import React and the useState hook for managing component state
import React, { useState } from "react";

// Import individual page components
import MainPage from "./components/MainPage";
import ProductCreatePage from "./components/ProductCreatePage";
import ProductUpdatePage from "./components/ProductUpdatePage";
import ProductListPage from "./components/ProductListPage";

// Define the main App component
function App() {
  // State to track which page is currently active: 'main', 'create', 'update', 'list'
  const [currentPage, setCurrentPage] = useState("main");

  // State to store the list of product objects
  const [products, setProducts] = useState([]);

  // Function to add a new product to the existing list
  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]); // Append the new product to the existing list
  };

  // Function to update an existing product in the list by matching productCode
  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.productCode === updatedProduct.productCode ? updatedProduct : p
      )
    );
  };

  // Declare a variable to hold the page content to be rendered
  let pageContent;

  // Conditional rendering based on the currentPage value
  switch (currentPage) {
    case "create":
      // Show the ProductCreatePage if user is creating a product
      pageContent = (
        <ProductCreatePage
          onAddProduct={addProduct}           // Pass the addProduct function to handle product creation
          onNavigate={setCurrentPage}         // Pass the function to navigate between pages
        />
      );
      break;

    case "update":
      // Show the ProductUpdatePage if user is updating a product
      pageContent = (
        <ProductUpdatePage
          products={products}                 // Pass the current list of products to populate update form
          onUpdateProduct={updateProduct}     // Pass the function that updates a product
          onNavigate={setCurrentPage}         // Pass the navigation function to switch pages
        />
      );
      break;

    case "list":
      // Show the ProductListPage to display all products
      pageContent = (
        <ProductListPage
          products={products}                 // Pass the current list of products to be listed
          onNavigate={setCurrentPage}         // Pass the navigation function for going back or forward
        />
      );
      break;

    default:
      // Default to showing the main landing page
      pageContent = (
        <MainPage
          onSelectPage={setCurrentPage}       // Pass the function that lets MainPage trigger page changes
        />
      );
  }

  // Render the chosen page content inside a root <div>
  return <div>{pageContent}</div>;
}

// Export the App component as default export so it can be used in index.js
export default App;
