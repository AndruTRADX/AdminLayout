import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/Dashboard";
import Products from "./app/Products";
import Categories from "./app/Categories";
import Brands from "./app/Brands";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
