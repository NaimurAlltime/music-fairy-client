import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("User Login Successful!");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Sign In successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // store user data in database
        const saveStudent = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://music-fairy-server-naimuralltime.vercel.app/students", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveStudent),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
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
              <h1 className="text-2xl text-center font-bold">Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
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
                    placeholder="password"
                    name="password"
                    id="password"
                    {...register("password", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="form-control mt-5">
                    <input
                      className="btn border-0 bg-gradient-to-r from-[#6dd5ed] to-[#1abade]"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </div>
              </form>
              <p className="text-center text-red-400">{error}</p>
              <p className="text-center text-emerald-400">{success}</p>
              <p className="my-4 text-center">
                New to Music Fairy?{" "}
                <Link className="text-blue-600 font-bold" to="/sign-up">
                  SignUp
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
    </div>
  );
};

export default Login;
