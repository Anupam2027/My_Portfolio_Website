import { useState } from "react";
import { db, collection, addDoc, Timestamp } from "../firebaseConfig";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        timestamp: Timestamp.now(),
      });
      setForm({ name: "", email: "", message: "" });
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section
      id="contact"
      className="pb-10 bg-gray-100 dark:bg-gray-900 transition duration-300"
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4 transition hover:shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-500 mt-2 font-medium">
              ✅ Message Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
