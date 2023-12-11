import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              className="w-full p-3 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              className="w-full p-3 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full p-3 border rounded bg-gray-100"
              placeholder="Enter your password"
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded focus:outline-none focus:shadow-outline-purple mb-4 transition-transform transform hover:scale-105"
          >
            {loading ? "Loading..." : "Register"}
          </button>

          <OAuth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Already have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-500">Login</span>
          </Link>
        </div>
        <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
      </div>
    </div>
  );
}
