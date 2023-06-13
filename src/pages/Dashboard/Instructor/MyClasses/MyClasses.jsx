import useAuth from "../../../../hooks/useAuth";
import useClasses from "../../../../hooks/useClasses";

const MyClasses = () => {
  const { user } = useAuth();
  const [classes] = useClasses();

  const instructorClasses = classes.filter(
    (allClass) => allClass.instructorEmail === user?.email
  );

  return (
    <div className="w-full">
      <div className="uppercase font-semibold flex h-[65px] justify-evenly items-center">
        <h3 className="text-3xl text-center">My Classes </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full md:w-[892px] md:ml-14">
          {/* head */}
          <thead className="uppercase bg-[#0d96f1]">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>
                Total Enrolled
                <br />
                Students
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {instructorClasses.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.classImage} alt="food" />
                      </div>
                    </div>
                    <p>{item.name}</p>
                  </div>
                </td>

                <td>${item.price}</td>
                <td>{item.availableSeats}</td>
                <td
                  className={
                    item.status === "pending"
                      ? "text-yellow-600"
                      : item.status === "denied"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {item.status}
                </td>
                <td>{0}</td>
                <td>
                  <button className="btn btn-xs bg-green-500">Feedback</button>
                  <button className="btn btn-xs btn-info ml-2">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
