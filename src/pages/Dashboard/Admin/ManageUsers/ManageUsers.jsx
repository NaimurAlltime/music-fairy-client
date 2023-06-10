import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  //   const [users, setUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["students"], async () => {
    const res = await axiosSecure.get("/students");
    return res.data;
  });

  const handleMakeInstructor = (user) => {
    // update admin role
    fetch(`http://localhost:5000/students/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    // update admin role
    fetch(`http://localhost:5000/students/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="md:ml-14">
      <div className="uppercase font-semibold h-[65px]">
        <h3 className="text-3xl text-center">Manage Users </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[892px]">
          {/* head */}
          <thead className="uppercase bg-[#0d96f1]">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th className="text-center">Action</th>
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
                <td>{user?.role || "student"}</td>
                <td className="text-center">
                  {user.role === "instructor" ? (
                    <button disabled className="btn btn-info btn-sm">
                      Make Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-info btn-sm"
                    >
                      Make Instructor
                    </button>
                  )}
                  {user.role === "admin" ? (
                    <button disabled className="btn ml-3 btn-info btn-sm">
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn ml-3 btn-info btn-sm"
                    >
                      Make Admin
                    </button>
                  )}
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
