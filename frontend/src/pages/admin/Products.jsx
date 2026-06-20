import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

const emptyForm = {
  title: "",
  slug: "",
  sku: "",
  brand: "",
  price: "",
  salePrice: "",
  stock: "",
  category: "",
  shortDescription: "",
  description: "",
  images: "",
  featured: false,
  isActive: true,
};

export default function Products() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const [products, cats] = await Promise.all([
        apiFetch("/api/admin/products"),
        apiFetch("/api/admin/categories"),
      ]);
      setItems(products);
      setCategories(cats);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm({
      title: item.title || "",
      slug: item.slug || "",
      sku: item.sku || "",
      brand: item.brand || "",
      price: item.price || "",
      salePrice: item.salePrice || "",
      stock: item.stock || "",
      category: item.category?._id || item.category || "",
      shortDescription: item.shortDescription || "",
      description: item.description || "",
      images: (item.images || []).join(", "),
      featured: !!item.featured,
      isActive: !!item.isActive,
    });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      ...form,
      price: Number(form.price || 0),
      salePrice: Number(form.salePrice || 0),
      stock: Number(form.stock || 0),
      images: form.images
        .split(",")
        .map((img) => img.trim())
        .filter(Boolean),
    };

    try {
      if (editingId) {
        await apiFetch(`/api/admin/products/${editingId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch("/api/admin/products", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      resetForm();
      loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await apiFetch(`/api/admin/products/${id}`, { method: "DELETE" });
    loadData();
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[420px,1fr]">
      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">
          {editingId ? "Edit Product" : "Add Product"}
        </h2>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="rounded-2xl border p-3" />
          <input name="slug" placeholder="Slug" value={form.slug} onChange={handleChange} className="rounded-2xl border p-3" />
          <input name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} className="rounded-2xl border p-3" />
          <input name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="rounded-2xl border p-3" />
          <select name="category" value={form.category} onChange={handleChange} className="rounded-2xl border p-3">
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="rounded-2xl border p-3" />
          <input name="salePrice" placeholder="Sale Price" value={form.salePrice} onChange={handleChange} className="rounded-2xl border p-3" />
          <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} className="rounded-2xl border p-3" />
          <input name="images" placeholder="Image URLs, comma separated" value={form.images} onChange={handleChange} className="rounded-2xl border p-3" />
          <textarea name="shortDescription" placeholder="Short Description" value={form.shortDescription} onChange={handleChange} className="rounded-2xl border p-3" />
          <textarea name="description" placeholder="Full Description" value={form.description} onChange={handleChange} className="rounded-2xl border p-3" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
            Featured
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} />
            Active
          </label>

          <div className="flex gap-3">
            <button className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">
              {editingId ? "Update" : "Save"}
            </button>
            <button type="button" onClick={resetForm} className="rounded-2xl border px-4 py-3 font-semibold">
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">All Products</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left text-slate-500">
                <th className="py-3">Title</th>
                <th className="py-3">Category</th>
                <th className="py-3">Price</th>
                <th className="py-3">Stock</th>
                <th className="py-3">Status</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-3 font-semibold">{item.title}</td>
                  <td className="py-3">{item.category?.name || "-"}</td>
                  <td className="py-3">₹{item.price}</td>
                  <td className="py-3">{item.stock}</td>
                  <td className="py-3">{item.isActive ? "Active" : "Inactive"}</td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(item)} className="rounded-xl bg-sky-100 px-3 py-1 font-semibold text-sky-700">Edit</button>
                      <button onClick={() => handleDelete(item._id)} className="rounded-xl bg-red-100 px-3 py-1 font-semibold text-red-700">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-6 text-center text-slate-500">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}