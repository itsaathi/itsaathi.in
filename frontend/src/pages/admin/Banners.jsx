import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

const emptyForm = {
  title: "",
  subtitle: "",
  imageUrl: "",
  link: "/shop",
  order: 0,
  isActive: true,
};

export default function Banners() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const loadData = async () => {
    const data = await apiFetch("/api/admin/banners");
    setItems(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      order: Number(form.order || 0),
    };

    if (editingId) {
      await apiFetch(`/api/admin/banners/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
    } else {
      await apiFetch("/api/admin/banners", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    }

    setForm(emptyForm);
    setEditingId(null);
    loadData();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm({
      title: item.title || "",
      subtitle: item.subtitle || "",
      imageUrl: item.imageUrl || "",
      link: item.link || "/shop",
      order: item.order || 0,
      isActive: !!item.isActive,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this banner?")) return;
    await apiFetch(`/api/admin/banners/${id}`, { method: "DELETE" });
    loadData();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black">{editingId ? "Edit Banner" : "Add Banner"}</h2>
        <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
          <input className="rounded-2xl border p-3" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <input className="rounded-2xl border p-3" placeholder="Subtitle" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
          <input className="rounded-2xl border p-3" placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
          <input className="rounded-2xl border p-3" placeholder="Link" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} />
          <input className="rounded-2xl border p-3" placeholder="Order" value={form.order} onChange={(e) => setForm({ ...form, order: e.target.value })} />
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
        <h2 className="text-2xl font-black">All Banners</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item._id} className="overflow-hidden rounded-3xl border border-slate-200">
              <img src={item.imageUrl} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-black">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => handleEdit(item)} className="rounded-xl bg-sky-100 px-3 py-1 font-semibold text-sky-700">Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="rounded-xl bg-red-100 px-3 py-1 font-semibold text-red-700">Delete</button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-slate-500">No banners found</p>}
        </div>
      </div>
    </div>
  );
}