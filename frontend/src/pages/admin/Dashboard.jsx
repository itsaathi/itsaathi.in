import { useEffect, useState } from "react";
import { apiFetch } from "../../lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await apiFetch("/api/admin/dashboard");
        setStats(data.stats);
        setRecentOrders(data.recentOrders || []);
        setRecentContacts(data.recentContacts || []);
      } catch (err) {
        setError(err.message);
      }
    };

    loadDashboard();
  }, []);

  if (error) return <div className="text-red-600">{error}</div>;
  if (!stats) return <div>Loading dashboard...</div>;

  const cards = [
    { label: "Products", value: stats.totalProducts },
    { label: "Categories", value: stats.totalCategories },
    { label: "Orders", value: stats.totalOrders },
    { label: "Contacts", value: stats.totalContacts },
    { label: "Banners", value: stats.totalBanners },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <div key={card.label} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{card.label}</p>
            <h3 className="mt-2 text-3xl font-black text-slate-900">{card.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <h3 className="text-xl font-black text-slate-900">Recent Orders</h3>
          <div className="mt-4 space-y-3">
            {recentOrders.length === 0 ? (
              <p className="text-sm text-slate-500">No recent orders</p>
            ) : (
              recentOrders.map((item) => (
                <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-bold text-slate-900">{item.customerName}</p>
                  <p className="text-sm text-slate-500">
                    {item.status} • ₹{item.totalAmount}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <h3 className="text-xl font-black text-slate-900">Recent Contacts</h3>
          <div className="mt-4 space-y-3">
            {recentContacts.length === 0 ? (
              <p className="text-sm text-slate-500">No recent contacts</p>
            ) : (
              recentContacts.map((item) => (
                <div key={item._id} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">
                    {item.category} • {item.phone}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}