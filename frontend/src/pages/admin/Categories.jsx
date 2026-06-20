import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

const emptyForm = {
  name: "",
  slug: "",
  description: "",
  isActive: true,
};

export default function Categories() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const loadData = async () => {
    const data = await apiFetch("/api/admin/categories");
    setItems(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await apiFetch(`/api/admin/categories/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(form),
      });
    } else {
      await apiFetch("/api/admin/categories", {
        method: "POST",
        body: JSON.stringify(form),
      });
    }

    setForm(emptyForm);
    setEditingId(null);
    loadData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await apiFetch(`/api/admin/categories/${id}`, { method: "DELETE" });
    loadData();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name || "",
      slug: item.slug || "",
      description: item.description || "",
      isActive: !!item.isActive,
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black">{editingId ? "Edit Category" : "Add Category"}</h2>
        <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
          <input className="rounded-2xl border p-3" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="rounded-2xl border p-3" placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <textarea className="rounded-2xl border p-3" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
            Active
          </label>
          <button className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">
            {editingId ? "Update" : "Save"}
          </button>
        </form>
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black">All Categories</h2>
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div key={item._id} className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.slug}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} className="rounded-xl bg-sky-100 px-3 py-1 font-semibold text-sky-700">Edit</button>
                <button onClick={() => handleDelete(item._id)} className="rounded-xl bg-red-100 px-3 py-1 font-semibold text-red-700">Delete</button>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-slate-500">No categories found</p>}
        </div>
      </div>
    </div>
  );
}