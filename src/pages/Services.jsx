import Layout from "../components/Layout";

function Services() {
  return (
    <Layout>

            <section className="py-20 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Our Services
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-t-4 border-cyan-500">
        <div className="text-4xl mb-4">🔐</div>
        <h3 className="text-2xl font-bold text-cyan-600 mb-3">
          Cybersecurity
        </h3>
        <p className="text-gray-600">
          Advanced protection, threat monitoring, and secure infrastructure
          to keep your business safe 24/7.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-t-4 border-cyan-500">
        <div className="text-4xl mb-4">💻</div>
        <h3 className="text-2xl font-bold text-cyan-600 mb-3">
          Software Development
        </h3>
        <p className="text-gray-600">
          We build modern websites, mobile apps, and enterprise systems
          tailored to your business needs.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300 border-t-4 border-cyan-500">
        <div className="text-4xl mb-4">☁️</div>
        <h3 className="text-2xl font-bold text-cyan-600 mb-3">
          Cloud Solutions
        </h3>
        <p className="text-gray-600">
          Scalable cloud infrastructure, deployment, and maintenance
          for modern businesses.
        </p>
      </div>

    </div>
  </div>
</section>

     

    </Layout>
  );
}

export default Services;