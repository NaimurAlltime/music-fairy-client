import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [classes] = useClasses();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut successful!.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li className="text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link to="/all-instructors">Instructors</Link>
      </li>
      <li className="text-lg">
        <Link to="/all-classes">Classes</Link>
      </li>

      <li className="text-lg">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/my-selected-classes">
          <FaShoppingCart className="text-2xl w-6 h-6" />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-2 dark:border-gray-900">
            +{cart?.length || 0}
          </div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl md:text-3xl font-semibold"
          >
            <img className="w-[45px]" src="/logo.png" alt="" />
            Music Fairy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                data-tooltip-id="user-name"
                data-tooltip-content={user.displayName}
                style={{ width: "56px", height: "53px" }}
                src={user.photoURL}
                className="mr-3 rounded-full"
              />
              <Tooltip id="user-name" />
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-info"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn px-5 border-0 bg-[#6dd5ed]">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
