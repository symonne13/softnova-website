import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="text-white p-10 max-w-4xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-6">About SoftNova</h1>

        <p className="text-lg text-gray-200">
          SoftNova Technologies is a modern software company specializing in
          web development, cybersecurity, cloud systems, and IT consulting.
          We help businesses transform digitally with secure and scalable solutions.
        </p>

      </div>

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
    </Layout>
  );
}

export default About;