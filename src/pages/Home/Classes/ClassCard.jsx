import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";
import useInstructor from "../../../hooks/useInstructor";
import { AuthContext } from "../../../providers/AuthProvider";

const ClassCard = ({ item }) => {
  const {
    _id,
    name,
    classImage,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
  } = item;
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin();
  const [instructor] = useInstructor();

  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    // console.log(item);

    // insert item to mongodb
    if (user && user.email) {
      const cartItem = {
        itemId: _id,
        name,
        classImage,
        instructorName,
        instructorEmail,
        availableSeats,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch update to cart item number
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Cart added successful",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Class select, please first Login now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  // className={
  //   item.status === "pending"
  //     ? "text-yellow-600"
  //     : item.status === "denied"
  //     ? "text-red-600"
  //     : "text-green-600"
  // }

  return (
    <div
      className={
        availableSeats == 0
          ? "card w-full bg-red-500 shadow-xl"
          : "card w-full bg-base-100 shadow-xl"
      }
    >
      <figure>
        <img
          className="h-[380px] w-full object-cover"
          src={classImage}
          alt="music"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title px-4 py-1 bg-[#111] text-white absolute bottom-[40%]">
          {name}
        </h2>
        <p className="text-lg font-semibold">
          Instructor Name: {instructorName}
        </p>
        <p className="text-lg font-semibold">
          Available Seats: {availableSeats}
        </p>
        <p className="text-lg font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart()}
            disabled={admin || instructor || availableSeats == 0}
            className="btn btn-outline uppercase bg-slate-200 text-[#111] border-0 border-b-4 border-[#111] mb-14"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
