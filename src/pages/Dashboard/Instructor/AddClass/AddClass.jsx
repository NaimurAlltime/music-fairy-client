import { useContext } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../../../providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const instructorName = user?.displayName;
    const email = user?.email;
    const availableSeats = form.availableSeats.value;
    const classImage = form.classImage.value;
    const price = form.price.value;
    const addClass = {
      name: name,
      instructorName: instructorName,
      instructorEmail: email,
      availableSeats: availableSeats,
      classImage: classImage,
      price: parseFloat(price),
      status: "pending",
    };
    console.log(addClass);

    // data fetching post api
    fetch("https://music-fairy-server-naimuralltime.vercel.app/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-full px-12">
      <h3 className="text-3xl font-bold text-center mb-3">Add New Class</h3>
      <form onSubmit={handleAddClass}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold text-lg">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            name="name"
            id="name"
            required
            className="input input-bordered w-full "
          />
        </div>
        <div className="md:flex my-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Instructor Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              defaultValue={user?.displayName}
              name="instructorName"
              id="instructorName"
              readOnly
              required
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full md:ml-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Instructor Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Instructor Email"
              defaultValue={user?.email}
              name="instructorEmail"
              id="instructorEmail"
              required
              readOnly
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex my-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Available Seats
              </span>
            </label>
            <input
              type="number"
              placeholder="Available Seats"
              className="input input-bordered w-full "
              name="availableSeats"
              id="availableSeats"
              required
            />
          </div>
          <div className="form-control w-full md:ml-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text font-semibold text-lg">
              Class Image
            </span>
          </label>
          <input
            type="text"
            name="classImage"
            id="classImage"
            placeholder="Image URL"
            className="input input-bordered w-full "
            required
          />
        </div>
        <input
          className="btn bg-[#088ae7] border-0 mt-3"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
