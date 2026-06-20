import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../../lib/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.user));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-black text-slate-900">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to manage ITSAATHI</p>

        {error && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="mt-6 grid gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-sky-600 disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}