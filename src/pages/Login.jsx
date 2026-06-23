import { useState } from "react";
import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh] px-4">

        {/* FIXED CARD (fully visible now) */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md z-10">

          <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
            Login
          </h2>

          <input
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button className="bg-cyan-500 text-white w-full py-3 rounded-lg hover:bg-cyan-600 transition">
            Sign In
          </button>

        </div>
      </div>
    </Layout>
  );
}

export default Login;