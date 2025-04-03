import { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 bg-gray-800 text-white rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mt-2 bg-gray-800 text-white rounded-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Send Message
        </button>
        {success && <p className="text-green-500 mt-2">Message sent!</p>}
      </form>
    </section>
  );
};

export default Contact;
