import React, { useState } from "react";
import MainPage from "./components/MainPage";
import ProductCreatePage from "./components/ProductCreatePage";
import ProductUpdatePage from "./components/ProductUpdatePage";
import ProductListPage from "./components/ProductListPage";

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.productCode === updatedProduct.productCode ? updatedProduct : p
      )
    );
  };

  let pageContent;
  switch (currentPage) {
    case "create":
      pageContent = (
        <ProductCreatePage onAddProduct={addProduct} onNavigate={setCurrentPage} />
      );
      break;

    case "update":
      pageContent = (
        <ProductUpdatePage
          products={products}
          onUpdateProduct={updateProduct}
          onNavigate={setCurrentPage}
        />
      );
      break;

    case "list":
      pageContent = (
        <ProductListPage products={products} onNavigate={setCurrentPage} />
      );
      break;

    default:
      pageContent = <MainPage onSelectPage={setCurrentPage} />;
  }

  return <div>{pageContent}</div>;
}

export default App;
