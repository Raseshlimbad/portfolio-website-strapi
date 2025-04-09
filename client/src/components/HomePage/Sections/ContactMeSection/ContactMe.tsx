'use client'

import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion
import ContactInfo from "./components/ContactInfo";
import FormField from "./components/FormField";
import ContactImage from "./components/ContactMeImage";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({ submitted: true, loading: false });

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus({ submitted: false, loading: false });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      id="contact"
      className="max-w-[1500px] mx-8 md:mx-20 2xl:mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 items-center"
      initial={{ opacity: 0 }} // Fade in the entire container initially
      animate={{ opacity: 1 }} // Final state: fully visible
      transition={{ duration: 0.6 }} // Animation duration
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Contact Info */}
        <motion.div
          className="flex flex-col space-y-6 md:border-r border-gray-200 md:pr-6"
          initial={{ opacity: 0, x: -50 }} // Start off-screen from left with low opacity
          animate={{ opacity: 1, x: 0 }} // Animate to visible and normal position
          transition={{ duration: 0.6 }}
        >
          <ContactInfo
            phone="+1 (234) 567-890"
            email="contact@example.com"
            address="New York, USA"
            website="www.example.com"
          />
        </motion.div>

        {/* Middle Section: Contact Form */}
        <motion.div
          className="md:border-r border-gray-200 md:pr-6"
          initial={{ opacity: 0, y: 50 }} // Start lower than its final position
          animate={{ opacity: 1, y: 0 }} // Animate to its final position
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 md:text-left">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FormField
                label="Your Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={<User size={18} className="text-indigo-400" />}
                placeholder="John Doe"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <FormField
                label="Email Address"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={<Mail size={18} className="text-indigo-400" />}
                placeholder="example@domain.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FormField
                label="Your Message"
                type="textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                icon={<MessageSquare size={18} className="text-indigo-400" />}
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={formStatus.loading}
              className="w-full flex items-center justify-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-70"
              initial={{ scale: 0.95, opacity: 0 }} // Start with a small and faded button
              animate={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {formStatus.loading ? "Sending..." : "Send Message"}
              <Send size={18} className="ml-2" />
            </motion.button>
          </form>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }} // Start with off-screen and low opacity
          animate={{ opacity: 1, x: 0 }} // Animate to visible and at normal position
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactImage />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
