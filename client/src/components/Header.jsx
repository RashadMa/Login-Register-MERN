import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <h1 className="font-bold text-gray-100">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-gray-100">Home</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li className="text-gray-100">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
}
