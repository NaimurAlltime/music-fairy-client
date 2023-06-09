import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignIn, updateUserProfile, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // create User With Email And Password
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been created successful!");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });

        //   update user profile
        navigate("/login");
        reset();
        logOut();
        updateUserProfile(loggedUser, data.name, data.photo);
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Sign In successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setSuccess("Google Sign In Successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-14">
          <img
            src="https://img.freepik.com/free-vector/playlist-concept-illustration_114360-2087.jpg?size=626&ext=jpg&ga=GA1.1.209329912.1680195530&semt=ais"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one capital letter and one special
                    character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPassword", {
                    validate: (match) => {
                      const password = getValues("password");
                      return match === password || "Passwords do not match!";
                    },
                  })}
                  type="password"
                  id="confirmPassword"
                  className="input input-bordered"
                />

                {errors.confirmPassword && (
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="form-control mt-5">
                <input
                  className="btn border-0 bg-gradient-to-r from-[#6dd5ed] to-[#1abade]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-red-400">{error}</p>
            <p className="text-center text-emerald-400">{success}</p>
            <p className="my-3 text-center">
              Already have an account?{" "}
              <Link className="text-blue-600 font-bold mb-0" to="/login">
                Login
              </Link>
            </p>
            <div className="divider mt-0">OR</div>
            <div className="text-center mt-0">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-info"
              >
                <FcGoogle className="text-3xl" /> Continue to Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
