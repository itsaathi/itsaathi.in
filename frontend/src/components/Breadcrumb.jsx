import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-sm text-slate-500">
        <Link to="/" className="hover:text-teal-600">
          Home
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-teal-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-800">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}