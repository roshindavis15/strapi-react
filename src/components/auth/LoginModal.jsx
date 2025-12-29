import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthModal = ({ isOpen, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState("login"); // login | signup
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const url =
        mode === "login"
          ? "https://strapi-production-77e6.up.railway.app/api/auth/local"
          : "https://strapi-production-77e6.up.railway.app/api/auth/local/register";

      const payload =
        mode === "login"
          ? {
              identifier: form.email,
              password: form.password,
            }
          : {
              username: form.username,
              email: form.email,
              password: form.password,
            };

      const res = await axios.post(url, payload);

      localStorage.setItem("token", res.data.jwt);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success(
        mode === "login"
          ? "Welcome back "
          : "Account created successfully 🎉"
      );

      onAuthSuccess();
      onClose();
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>
          ×
        </button>

        {/* HEADER */}
        <div className="auth-header">
          <h2>{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
          <p>
            {mode === "login"
              ? "Login to continue shopping"
              : "Join us and start shopping"}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === "signup" && (
            <div className="input-group">
              <label>Username</label>
              <input
                name="username"
                placeholder="John Doe"
                required
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              onChange={handleChange}
            />
          </div>

          <button className="auth-btn" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        {/* FOOTER */}
        <div className="auth-footer">
          {mode === "login" ? (
            <>
              <span>Don’t have an account?</span>
              <button onClick={() => setMode("signup")}>
                Create one
              </button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <button onClick={() => setMode("login")}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
