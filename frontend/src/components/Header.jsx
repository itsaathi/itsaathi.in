import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Search, ShoppingCart, Menu, X } from "lucide-react";
import { megaMenu } from "../data/menuData";
import logo from "../assets/logo.png";

const navLinkClass = ({ isActive }) =>
  `text-[15px] font-semibold tracking-wide transition ${
    isActive ? "text-slate-900" : "text-slate-800 hover:text-sky-600"
  }`;

export default function Header() {
  const [showMega, setShowMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-slate-200">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 lg:px-8">
          <Link to="/" className="shrink-0">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="IT Saathi"
                className="h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h2 className="text-xl font-black leading-none text-slate-700">
                  IT SAATHI
                </h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  Complete IT Accessories Market
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            <NavLink to="/" className={navLinkClass}>
              HOME
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
            >
              <button className="flex items-center gap-1 text-[15px] font-semibold tracking-wide text-slate-800 transition hover:text-sky-600">
                SHOP ALL
                <ChevronDown
                  size={16}
                  className={`transition ${showMega ? "rotate-180" : ""}`}
                />
              </button>

              {showMega && (
                <div className="absolute left-1/2 top-full z-50 mt-4 w-[1240px] -translate-x-1/2 rounded-none border border-slate-200 bg-[#f3f3f3] p-10 shadow-xl">
                  <div className="grid grid-cols-4 gap-10">
                    {megaMenu.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-[18px] font-bold uppercase text-slate-800">
                          {group.title}
                        </h3>
                        <div className="mt-3 h-[3px] w-9 bg-sky-500"></div>

                        <ul className="mt-5 space-y-3">
                          {group.items.map((item) => (
                            <li key={item}>
                              <Link
                                to="/shop"
                                className="text-[15px] uppercase text-slate-600 transition hover:text-sky-600"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              ABOUT US
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              CONTACT US
            </NavLink>

            <NavLink to="/blogs" className={navLinkClass}>
              BLOGS
            </NavLink>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex h-[42px] w-[230px] items-center justify-between rounded-full border border-slate-500 px-4">
              <input
                type="text"
                placeholder=""
                className="w-full border-none bg-transparent text-sm outline-none"
              />
              <Search size={21} className="text-slate-500" />
            </div>

            <Link
              to="/cart"
              className="relative text-slate-700 transition hover:text-sky-600"
            >
              <ShoppingCart size={30} />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[11px] font-bold text-white">
                0
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-[1280px] px-4 py-4">
            <div className="mb-4 flex h-[44px] items-center justify-between rounded-full border border-slate-300 px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-none bg-transparent text-sm outline-none"
              />
              <Search size={20} className="text-slate-500" />
            </div>

            <div className="flex flex-col gap-4">
              <NavLink to="/" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                HOME
              </NavLink>
              <NavLink to="/shop" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                SHOP ALL
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                ABOUT US
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                CONTACT US
              </NavLink>
              <NavLink to="/blogs" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                BLOGS
              </NavLink>
              <NavLink to="/cart" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                CART
              </NavLink>
            </div>

            <div className="mt-6 grid gap-6">
              {megaMenu.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-sm font-bold uppercase text-slate-800">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm uppercase text-slate-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}