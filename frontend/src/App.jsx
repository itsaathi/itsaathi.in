import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Cart from "./pages/Cart";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Categories from "./pages/admin/Categories";
import Banners from "./pages/admin/Banners";
import Orders from "./pages/admin/Orders";
import Contacts from "./pages/admin/Contacts";

import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="banners" element={<Banners />} />
        <Route path="orders" element={<Orders />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}