export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-black text-slate-800">IT SAATHI</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Trusted IT & CCTV accessories importer with product variety,
            wholesale support, and buyer-friendly service.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-800">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Home</li>
            <li>Shop All</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>+91 8006033345</li>
            <li>+91 9058042897</li>
            <li>Support@itsaathi.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800">Address</h4>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Green Palace, Plot No 14 A, 80 Feet Rd, near UMA Mangalam Garden,
            Nagla Rambal, Kalindi Vihar, Agra, Uttar Pradesh 282006.
          </p>
        </div>
      </div>
    </footer>
  );
}