import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [blog, setBlog] = useState("");

  if (!user) {
    return (
      <p className="text-center mt-10">
        Please sign in to access the dashboard.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Write a Blog</h2>
      <textarea
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
        className="w-full p-3 mt-4 bg-gray-100 rounded-md"
        placeholder="Write your thoughts here..."
      />
      <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md">
        Publish
      </button>
    </div>
  );
};

export default Dashboard;
