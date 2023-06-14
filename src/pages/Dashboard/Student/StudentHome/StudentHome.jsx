import useAuth from "../../../../hooks/useAuth";

const StudentHome = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col-reverse items-center">
      <div className="text-center mt-3">
        <h3 className="text-xl font-semibold">Name: {user?.displayName}</h3>
        <p>Email: {user?.email}</p>
      </div>
      <img
        className="h-[230px] w-[230px] rounded-full object-cover bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 p-1"
        src={user?.photoURL}
        alt=""
      />
    </div>
  );
};

export default StudentHome;
