const MyEnrolledClasses = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl uppercase font-semibold text-center">
        My Enrolled Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full md:w-[892px] md:ml-14">
          {/* head */}
          <thead className="uppercase bg-[#0d96f1]">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>A. Seats</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {/* {cart.map((item, index) => (
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
                  </div>
                </td>
                <td>{item.name}</td>
                <td>
                  <p>Name: {item.instructorName}</p>
                  <p>Email: {item.instructorEmail}</p>
                </td>
                <td>${item.price}</td>
                <td>{item.availableSeats}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
