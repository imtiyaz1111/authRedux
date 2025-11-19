import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { loginSuccess } from "../../redux/slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    try {
      const res = await axios.post(
        "https://tureappapiforreact.onrender.com/api/login",
        formData
      );

      dispatch(loginSuccess(res.data));
      toast.success("Login successful");

      localStorage.setItem("auth", JSON.stringify(res.data));

      navigate("/dashboard");
    } catch (err) {
      toast.error("Login failed");
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-2">Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          className="form-control mb-3"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">Login</button>

        <div className="text-center mt-2">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
