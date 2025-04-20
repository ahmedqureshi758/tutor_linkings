import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInPage from "../../SignIn/SignInPage/SignInpage";
const SignUpPage = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    subject: "", // Only for teachers (optional enhancement)
    profile: null,  // File field
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profile: file });
  };

  const handleSubmit = async (event) => {
    console.log("I am called")
    event.preventDefault();
    const formPayload = new FormData();
    formPayload.append("fullname", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("password", formData.password);
    formPayload.append("role", userType);

    if (formData.profile) {
      formPayload.append("profile", formData.profile);
    }
   
    try { 
      console.log("Form Data Contents:");
 
  const response = await axios.post("http://localhost:11000/api/Student/signup", formPayload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
   console.log("respose is : ",response.data.data);


   if(response.data.statusCode==200)
   {

    navigate("/signin")
    alert("singed up successfully")
  
    
    //naviage 
   
    
   }
   
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to sign up");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#ffcf3a] to-[#0063ff] py-12">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Create an Account</h2>

        {/* Role Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select Role</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-3 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select your role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>



          {/* File Upload Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Upload File</label>
            <input
              type="file"
              name="profile"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up as {userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : "User"}
            </button>
          </div>
        </form>

        {/* Sign-in Redirect */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
