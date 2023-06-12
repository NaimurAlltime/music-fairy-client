import moment from "moment/moment";
import { useEffect, useState } from "react";

const MyEnrolledClasses = () => {
  const [enrolledClass, setEnrollClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => setEnrollClass(data));
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-3xl uppercase font-semibold text-center mb-5">
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
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Enrollment Date</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {enrolledClass.map((item, index) => (
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
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>${item.price}</td>
                <td>{moment(item.date).format("MMMM Do YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
