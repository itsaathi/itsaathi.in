import { Menu, UserCircle2 } from "lucide-react";

export default function AdminTopbar({ onMenuClick }) {
  const user = JSON.parse(localStorage.getItem("adminUser") || "{}");

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 md:px-6">
      <button
        onClick={onMenuClick}
        className="inline-flex rounded-xl border border-slate-300 p-2 md:hidden"
      >
        <Menu size={20} />
      </button>

      <div>
        <h2 className="text-xl font-black text-slate-900">Admin Dashboard</h2>
        <p className="text-sm text-slate-500">Manage your store easily</p>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
        <UserCircle2 size={22} className="text-slate-700" />
        <div className="hidden sm:block">
          <p className="text-sm font-bold text-slate-900">{user.name || "Admin"}</p>
          <p className="text-xs text-slate-500">{user.email || "admin@itsaathi.in"}</p>
        </div>
      </div>
    </header>
  );
}