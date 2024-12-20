import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideDown } from "../../Utility/Animation";
import { SlideLeft } from "../../Utility/Animation";
import { SlideUp } from "../../Utility/Animation";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      description: "",
    });
  };

  const MapEmbed = () => (
    <div className="w-full" style={{ height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216779.05924310125!2d72.92563369020867!3d33.61619795457194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732285829750!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );

  return (
    <>
      <div className="bg-[#f9fafc] py-14 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Section 1: Heading and Description (30% width) */}
          <motion.div
            variants={SlideLeft(0.5)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 2 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full md:w-1/3 bg-[#f9fafc] shadow-md rounded-lg p-8 flex flex-col justify-center text-left"
          >
            <h1 className="text-4xl font-semibold text-primary mb-4">
              Get in Touch
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-2">
              We'd love to hear from you!
            </h2>
            <p className=" text-black font-semibold">
              Please fill out the form with your details and message. Our team
              will get back to you shortly.
            </p>
          </motion.div>

          {/* Section 2: Contact Form (70% width) */}
          <motion.div
                      variants={SlideUp(0.5)}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-full md:w-2/3 bg-[#f9fafc] shadow-md rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-[#f9fafc]  p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-[#f9fafc]  p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-[#f9fafc]  p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                  className="w-full  bg-[#f9fafc] p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <motion.div
      variants={SlideDown(1)}
      initial="hidden"
      animate="visible"
      className="w-full bg-white shadow-md rounded-lg ">
        <MapEmbed />
      </motion.div>
    </>
  );
}

export default ContactForm;
