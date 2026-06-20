import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiFetch } from "../../../lib/api";

export default function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setIsValid(false);
        setLoading(false);
        return;
      }

      try {
        await apiFetch("/api/auth/me");
        setIsValid(true);
      } catch (error) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600">
        Verifying admin access...
      </div>
    );
  }

  if (!isValid) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}