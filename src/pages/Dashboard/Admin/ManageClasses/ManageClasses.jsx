import { useState } from "react";
import Swal from "sweetalert2";
import useClasses from "../../../../hooks/useClasses";

const ManageClasses = () => {
  const [classes, , refetch] = useClasses();
  const [feedbackClass, setFeedbackClass] = useState({});

  const handleApproved = (item) => {
    // update admin role
    fetch(`http://localhost:5000/classes/approved/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class approved successful!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  console.log(feedbackClass._id);

  const handleDenied = (item) => {
    // update admin role
    fetch(`http://localhost:5000/classes/denied/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class denied successful, please feedback!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      {/* feedback modal start */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Opinion your feedback</h3>
          <form>
            <textarea
              cols="45"
              rows="4"
              placeholder="feedback here"
              className="textarea mt-4 textarea-bordered border-info textarea-md w-full"
              type="text"
              id="feedback"
              name="feedback"
            ></textarea>
            <input
              className="btn btn-info btn-xs mt-3"
              type="submit"
              value="Send"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      {/* feedback modal end */}

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
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {classes.map((item, index) => (
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
                <td>{item.availableSeats}</td>
                <td>${item.price}</td>
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
                <td className="flex flex-col-reverse gap-1">
                  {/* <button
                  onClick={() => handleFeedback(item)}
                  className="btn btn-xs btn-success"
                >
                  Feedback
                </button> */}

                  {/* The button to open modal */}
                  <label
                    onClick={() => setFeedbackClass(item)}
                    htmlFor="my_modal_6"
                    className="btn btn-xs btn-success"
                  >
                    Feedback
                  </label>

                  <button
                    onClick={() => handleDenied(item)}
                    disabled={
                      item.status === "denied" || item.status === "approved"
                    }
                    className="btn btn-xs bg-red-500"
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleApproved(item)}
                    className="btn btn-xs btn-info"
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                  >
                    Approve
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

export default ManageClasses;
