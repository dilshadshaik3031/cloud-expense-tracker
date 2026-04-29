import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      console.log(response.data);

      alert("Registration Successful");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;