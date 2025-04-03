import { auth, signInWithGoogle, logout } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthButton = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default AuthButton;
