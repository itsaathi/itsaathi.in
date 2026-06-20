import Layout from "../components/Layout";

const posts = [
  {
    id: 1,
    title: "How to choose the right CCTV accessories for installation",
    excerpt: "A practical buying guide for CCTV tools, baluns, cables, and support accessories.",
  },
  {
    id: 2,
    title: "Top desktop and laptop accessories for regular resale",
    excerpt: "Useful accessory types that move fast in everyday IT demand.",
  },
  {
    id: 3,
    title: "Why networking tools and testers matter for technicians",
    excerpt: "A short overview of products that support better service and maintenance work.",
  },
];

export default function Blogs() {
  return (
    <Layout>
      <section className="mx-auto max-w-[1280px] px-4 py-14 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900">Blogs</h1>
        <p className="mt-3 text-slate-600">
          Helpful content for IT accessories, CCTV products, and business buyers.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 h-48 rounded-2xl bg-slate-100"></div>
              <h2 className="text-xl font-black text-slate-900">{post.title}</h2>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
              <button className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600">
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}