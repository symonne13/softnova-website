import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl text-center max-w-4xl">

          <h1 className="text-5xl font-bold mb-4">
            Innovative Software Solutions
          </h1>

          <p className="text-lg mb-6">
            SoftNova Technologies provides software development,
            cybersecurity, cloud solutions, and IT consulting services
            to help businesses grow in the digital age.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

        </div>
      </section>

  
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose SoftNova
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Item 1 */}
      <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
        <p className="text-gray-600 text-sm">
          We deliver projects quickly without compromising quality.
        </p>
      </div>

      {/* Item 2 */}
      <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
        <div className="text-5xl mb-4">🔒</div>
        <h3 className="text-xl font-bold mb-2">Secure Systems</h3>
        <p className="text-gray-600 text-sm">
          Strong security practices to protect your data and systems.
        </p>
      </div>

      {/* Item 3 */}
      <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
        <div className="text-5xl mb-4">👨‍💻</div>
        <h3 className="text-xl font-bold mb-2">Expert Team</h3>
        <p className="text-gray-600 text-sm">
          Skilled developers and IT professionals at your service.
        </p>
      </div>

      {/* Item 4 */}
      <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
        <div className="text-5xl mb-4">📞</div>
        <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
        <p className="text-gray-600 text-sm">
          We are always available to support your business needs.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
            <p className="mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">30+</h3>
            <p className="mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
            <p className="mt-2">Support</p>
          </div>

        </div>
      </section>

    </Layout>
  );
}

export default Home;