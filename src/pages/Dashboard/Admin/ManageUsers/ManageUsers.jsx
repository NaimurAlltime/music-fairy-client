import { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleMakeAdmin = (user) => {
    // update admin role
    console.log(user);
  };

  return (
    <div className="md:ml-14">
      <div className="uppercase font-semibold h-[65px]">
        <h3 className="text-3xl">Total Users: {users.length} </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[892px]">
          {/* head */}
          <thead className="uppercase bg-[#D1A054]">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-square bg-orange-500 border-0 btn-sm"
                    >
                      <FaUserShield className="text-white p-[6px] text-3xl" />
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-square bg-red-700 border-0 btn-sm">
                    <RiDeleteBinLine className="text-white p-[6px] text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
