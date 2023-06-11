import {
  FaBookReader,
  FaCalendarAlt,
  FaHome,
  FaListUl,
  FaSchool,
  FaUsers,
} from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { HiViewGridAdd } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#088ae7]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 mt-10 text-lg uppercase">
          <img className="w-[60px] ml-24 mb-2" src="/logo.png" alt="" />
          <li className="text-4xl text-center font-bold">Music Fairy</li>
          <li className="text-2xl text-center font-semibold mb-7">
            Online School
          </li>

          {isAdmin ? (
            <>
              <li className="mt-10">
                <NavLink to="/dashboard/user-home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-classes">
                  <FaListUl /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Instructor Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/dashboard/add-class">
                  {" "}
                  <HiViewGridAdd /> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-classes">
                  <FaSchool />
                  My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mt-10">
                <NavLink to="/dashboard/student-home">
                  <FaHome /> Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-selected-classes">
                  <FaCalendarAlt /> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <GrCheckboxSelected /> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/instructors">
              {" "}
              <FaBookReader /> Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaSchool />
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
