import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const MySelectedClasses = () => {
  const [cart, refetch] = useCart();
  // work reduce
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete api to database
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <h2 className="text-3xl uppercase font-semibold text-center">
        My Selected Classes
      </h2>
      <div className="uppercase font-semibold flex h-[65px] justify-evenly items-center">
        <h3 className="text-3xl">Total Selected Class: {cart.length} </h3>
        <h3 className="text-3xl">Total Price: ${totalPrice.toFixed(2)} </h3>
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
              <th>Instructor</th>
              <th>Price</th>
              <th>A. Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {cart.map((item, index) => (
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
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn text-white btn-xs bg-red-600"
                  >
                    Delete
                  </button>
                  <Link to="/dashboard/payment">
                    <button className="btn text-white btn-xs ml-2 bg-[#0d96f1]">
                      Pay Now
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
