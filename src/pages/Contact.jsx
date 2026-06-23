import { useState } from "react";
import Layout from "../components/Layout";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <Layout>

      <div className="max-w-6xl mx-auto p-6 text-white">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h1>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-xl">

            <input
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg"
            />

            <input
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 mb-4 border rounded-lg"
            />

            <button className="bg-cyan-500 text-white w-full py-3 rounded-lg hover:bg-cyan-600">
              Send Message
            </button>

          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <FaPhone /> +254725560621
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope /> info@softnova.com
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt /> Nairobi, Kenya
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 text-2xl mt-6">

              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />

            </div>

          </div>

        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254725560621"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl text-white text-2xl hover:bg-green-600"
      >
        <FaWhatsapp />
      </a>

    </Layout>
  );
}

export default Contact;