import { Link } from "react-router";

const Navbar = ({ signedIn, setSignedIn }) => {
  const handleAuthClick = () => {
    setSignedIn((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          MyApp
        </Link>
        <ul className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/users"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Users
          </Link>
          <button
            onClick={handleAuthClick}
            className={`px-4 py-1 rounded ${
              signedIn
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } transition duration-300`}
          >
            {signedIn ? "Sign Out" : "Sign In"}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
