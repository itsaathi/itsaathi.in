import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition md:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed left-0 top-0 z-50 h-full w-72 transform transition md:static md:z-auto md:block md:w-auto md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSidebar />
      </div>

      <div className="flex min-h-screen flex-1 flex-col">
        <AdminTopbar onMenuClick={() => setOpen(true)} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}