import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "products", label: "Products" },
  { key: "categories", label: "Categories" },
  { key: "banners", label: "Banners" },
  { key: "orders", label: "Orders" },
  { key: "contacts", label: "Contacts" },
];

const initialProductForm = {
  title: "",
  slug: "",
  category: "",
  price: "",
  salePrice: "",
  stock: "",
  shortDescription: "",
  description: "",
  images: "",
  featured: false,
  isActive: true,
};

const initialCategoryForm = {
  name: "",
  slug: "",
  description: "",
  isActive: true,
};

const initialBannerForm = {
  title: "",
  subtitle: "",
  imageUrl: "",
  link: "",
  order: "",
  isActive: true,
};

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [productForm, setProductForm] = useState(initialProductForm);
  const [categoryForm, setCategoryForm] = useState(initialCategoryForm);
  const [bannerForm, setBannerForm] = useState(initialBannerForm);
  const [editingProductId, setEditingProductId] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState("");
  const [editingBannerId, setEditingBannerId] = useState("");

  const loadDashboard = async () => {
    try {
      const [dashboardData, productsData, categoriesData, bannersData, ordersData, contactsData] =
        await Promise.all([
          apiFetch("/api/admin/dashboard"),
          apiFetch("/api/admin/products"),
          apiFetch("/api/admin/categories"),
          apiFetch("/api/admin/banners"),
          apiFetch("/api/admin/orders"),
          apiFetch("/api/admin/contacts"),
        ]);

      setStats(dashboardData.stats);
      setProducts(productsData || []);
      setCategories(categoriesData || []);
      setBanners(bannersData || []);
      setOrders(ordersData || []);
      setContacts(contactsData || []);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const updateProductForm = (field, value) => {
    setProductForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateCategoryForm = (field, value) => {
    setCategoryForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateBannerForm = (field, value) => {
    setBannerForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetMessages = () => {
    setMessage("");
    setError("");
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    try {
      const payload = {
        ...productForm,
        price: Number(productForm.price || 0),
        salePrice: Number(productForm.salePrice || 0),
        stock: Number(productForm.stock || 0),
        images: productForm.images
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      if (editingProductId) {
        await apiFetch(`/api/admin/products/${editingProductId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        setMessage("Product updated successfully");
      } else {
        await apiFetch("/api/admin/products", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        setMessage("Product added successfully");
      }

      setProductForm(initialProductForm);
      setEditingProductId("");
      loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    try {
      const payload = {
        ...categoryForm,
      };

      if (editingCategoryId) {
        await apiFetch(`/api/admin/categories/${editingCategoryId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        setMessage("Category updated successfully");
      } else {
        await apiFetch("/api/admin/categories", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        setMessage("Category added successfully");
      }

      setCategoryForm(initialCategoryForm);
      setEditingCategoryId("");
      loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    try {
      const payload = {
        ...bannerForm,
        order: Number(bannerForm.order || 0),
      };

      if (editingBannerId) {
        await apiFetch(`/api/admin/banners/${editingBannerId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        setMessage("Banner updated successfully");
      } else {
        await apiFetch("/api/admin/banners", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        setMessage("Banner added successfully");
      }

      setBannerForm(initialBannerForm);
      setEditingBannerId("");
      loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await apiFetch(`/api/admin/${type}/${id}`, { method: "DELETE" });
      setMessage("Item deleted successfully");
      loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOrderStatusChange = async (id, status) => {
    try {
      await apiFetch(`/api/admin/orders/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
      loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleContactStatusChange = async (id, status) => {
    try {
      await apiFetch(`/api/admin/contacts/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
      loadDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div className="p-6 text-slate-600">Loading dashboard...</div>;
  }

  if (error && !stats) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Admin Panel</p>
            <h1 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">Dashboard</h1>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              localStorage.removeItem("adminUser");
              window.location.href = "/admin/login";
            }}
            className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Logout
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                activeTab === tab.key
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 shadow-sm"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {message && (
          <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {activeTab === "overview" && stats && (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {[
                { label: "Products", value: stats.totalProducts },
                { label: "Categories", value: stats.totalCategories },
                { label: "Orders", value: stats.totalOrders },
                { label: "Contacts", value: stats.totalContacts },
                { label: "Banners", value: stats.totalBanners },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <h2 className="mt-2 text-3xl font-black text-slate-900">{item.value}</h2>
                </div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <section className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-xl font-black text-slate-900">Recent Orders</h3>
                <div className="mt-4 space-y-3">
                  {orders.slice(0, 5).map((order) => (
                    <div key={order._id} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{order.customerName}</p>
                          <p className="text-sm text-slate-500">{order.phone}</p>
                        </div>
                        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-xl font-black text-slate-900">Recent Contacts</h3>
                <div className="mt-4 space-y-3">
                  {contacts.slice(0, 5).map((item) => (
                    <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          <p className="text-sm text-slate-500">{item.category}</p>
                        </div>
                        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">
                {editingProductId ? "Edit Product" : "Add Product"}
              </h3>
              <form onSubmit={handleProductSubmit} className="mt-4 space-y-3">
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Title" value={productForm.title} onChange={(e) => updateProductForm("title", e.target.value)} />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Slug" value={productForm.slug} onChange={(e) => updateProductForm("slug", e.target.value)} />
                <select className="w-full rounded-2xl border px-4 py-3" value={productForm.category} onChange={(e) => updateProductForm("category", e.target.value)}>
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                  ))}
                </select>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input type="number" className="w-full rounded-2xl border px-4 py-3" placeholder="Price" value={productForm.price} onChange={(e) => updateProductForm("price", e.target.value)} />
                  <input type="number" className="w-full rounded-2xl border px-4 py-3" placeholder="Sale Price" value={productForm.salePrice} onChange={(e) => updateProductForm("salePrice", e.target.value)} />
                </div>
                <input type="number" className="w-full rounded-2xl border px-4 py-3" placeholder="Stock" value={productForm.stock} onChange={(e) => updateProductForm("stock", e.target.value)} />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Image URLs (comma separated)" value={productForm.images} onChange={(e) => updateProductForm("images", e.target.value)} />
                <textarea className="w-full rounded-2xl border px-4 py-3" placeholder="Short description" value={productForm.shortDescription} onChange={(e) => updateProductForm("shortDescription", e.target.value)} />
                <textarea className="w-full rounded-2xl border px-4 py-3" placeholder="Description" value={productForm.description} onChange={(e) => updateProductForm("description", e.target.value)} />
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" checked={productForm.featured} onChange={(e) => updateProductForm("featured", e.target.checked)} />
                  Featured
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" checked={productForm.isActive} onChange={(e) => updateProductForm("isActive", e.target.checked)} />
                  Active
                </label>
                <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">Save Product</button>
              </form>
            </section>

            <section className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">Product List</h3>
              <div className="mt-4 space-y-3">
                {products.map((item) => (
                  <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.category?.name || item.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => { setProductForm({ ...initialProductForm, title: item.title, slug: item.slug, category: item.category?._id || item.category, price: item.price, salePrice: item.salePrice, stock: item.stock, shortDescription: item.shortDescription || "", description: item.description || "", images: item.images?.join(",") || "", featured: item.featured, isActive: item.isActive }); setEditingProductId(item._id); setActiveTab("products"); }} className="rounded-xl bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700">Edit</button>
                        <button onClick={() => handleDelete("products", item._id)} className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "categories" && (
          <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">{editingCategoryId ? "Edit Category" : "Add Category"}</h3>
              <form onSubmit={handleCategorySubmit} className="mt-4 space-y-3">
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Name" value={categoryForm.name} onChange={(e) => updateCategoryForm("name", e.target.value)} />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Slug" value={categoryForm.slug} onChange={(e) => updateCategoryForm("slug", e.target.value)} />
                <textarea className="w-full rounded-2xl border px-4 py-3" placeholder="Description" value={categoryForm.description} onChange={(e) => updateCategoryForm("description", e.target.value)} />
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" checked={categoryForm.isActive} onChange={(e) => updateCategoryForm("isActive", e.target.checked)} />
                  Active
                </label>
                <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">Save Category</button>
              </form>
            </section>
            <section className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">Category List</h3>
              <div className="mt-4 space-y-3">
                {categories.map((item) => (
                  <div key={item._id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                    <div>
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.slug}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setCategoryForm({ name: item.name, slug: item.slug, description: item.description || "", isActive: item.isActive }); setEditingCategoryId(item._id); }} className="rounded-xl bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700">Edit</button>
                      <button onClick={() => handleDelete("categories", item._id)} className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "banners" && (
          <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">{editingBannerId ? "Edit Banner" : "Add Banner"}</h3>
              <form onSubmit={handleBannerSubmit} className="mt-4 space-y-3">
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Title" value={bannerForm.title} onChange={(e) => updateBannerForm("title", e.target.value)} />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Subtitle" value={bannerForm.subtitle} onChange={(e) => updateBannerForm("subtitle", e.target.value)} />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Image URL" value={bannerForm.imageUrl} onChange={(e) => updateBannerForm("imageUrl", e.target.value)} />
                <input className="w-full rounded-2xl border px-4 py-3" placeholder="Link" value={bannerForm.link} onChange={(e) => updateBannerForm("link", e.target.value)} />
                <input type="number" className="w-full rounded-2xl border px-4 py-3" placeholder="Order" value={bannerForm.order} onChange={(e) => updateBannerForm("order", e.target.value)} />
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" checked={bannerForm.isActive} onChange={(e) => updateBannerForm("isActive", e.target.checked)} />
                  Active
                </label>
                <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">Save Banner</button>
              </form>
            </section>
            <section className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">Banner List</h3>
              <div className="mt-4 space-y-3">
                {banners.map((item) => (
                  <div key={item._id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.link}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setBannerForm({ title: item.title, subtitle: item.subtitle || "", imageUrl: item.imageUrl || "", link: item.link || "", order: item.order || 0, isActive: item.isActive }); setEditingBannerId(item._id); }} className="rounded-xl bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700">Edit</button>
                      <button onClick={() => handleDelete("banners", item._id)} className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "orders" && (
          <section className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
            <h3 className="text-xl font-black text-slate-900">Orders</h3>
            <div className="mt-4 space-y-3">
              {orders.map((order) => (
                <div key={order._id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{order.customerName}</p>
                      <p className="text-sm text-slate-500">{order.email} • {order.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="rounded-xl border px-3 py-2" value={order.status} onChange={(e) => handleOrderStatusChange(order._id, e.target.value)}>
                        <option>PENDING</option>
                        <option>CONFIRMED</option>
                        <option>SHIPPED</option>
                        <option>DELIVERED</option>
                        <option>CANCELLED</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "contacts" && (
          <section className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
            <h3 className="text-xl font-black text-slate-900">Contacts</h3>
            <div className="mt-4 space-y-3">
              {contacts.map((item) => (
                <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.email} • {item.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="rounded-xl border px-3 py-2" value={item.status} onChange={(e) => handleContactStatusChange(item._id, e.target.value)}>
                        <option>NEW</option>
                        <option>IN_PROGRESS</option>
                        <option>CLOSED</option>
                      </select>
                      <button onClick={() => handleDelete("contacts", item._id)} className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}