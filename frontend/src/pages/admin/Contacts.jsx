import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

const statuses = ["NEW", "IN_PROGRESS", "CLOSED"];

export default function Contacts() {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    const data = await apiFetch("/api/admin/contacts");
    setItems(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const updateStatus = async (id, status) => {
    await apiFetch(`/api/admin/contacts/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
    loadData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;
    await apiFetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    loadData();
  };

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black">Contacts</h2>
      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b text-left text-slate-500">
              <th className="py-3">Name</th>
              <th className="py-3">Phone</th>
              <th className="py-3">Category</th>
              <th className="py-3">Message</th>
              <th className="py-3">Status</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="border-b align-top">
                <td className="py-3 font-semibold">{item.name}</td>
                <td className="py-3">{item.phone}</td>
                <td className="py-3">{item.category}</td>
                <td className="py-3 max-w-xs">{item.message}</td>
                <td className="py-3">
                  <select
                    value={item.status}
                    onChange={(e) => updateStatus(item._id, e.target.value)}
                    className="rounded-xl border px-3 py-2"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="py-3">
                  <button onClick={() => handleDelete(item._id)} className="rounded-xl bg-red-100 px-3 py-1 font-semibold text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan="6" className="py-6 text-center text-slate-500">No contacts found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}