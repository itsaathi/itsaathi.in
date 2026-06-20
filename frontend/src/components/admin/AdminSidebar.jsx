import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Shapes,
  Image,
  ShoppingCart,
  MessagesSquare,
  LogOut,
} from "lucide-react";

const links = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/categories", label: "Categories", icon: Shapes },
  { to: "/admin/banners", label: "Banners", icon: Image },
  { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { to: "/admin/contacts", label: "Contacts", icon: MessagesSquare },
];

export default function AdminSidebar() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    window.location.href = "/admin/login";
  };

  return (
    <aside className="w-full shrink-0 border-r border-slate-200 bg-slate-950 text-white md:w-72">
      <div className="border-b border-slate-800 px-6 py-6">
        <h1 className="text-2xl font-black tracking-wide">ITSAATHI</h1>
        <p className="mt-1 text-sm text-slate-400">Admin Panel</p>
      </div>

      <nav className="space-y-2 p-4">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-sky-500 text-white"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}