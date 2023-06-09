const InstructorItem = ({ item }) => {
  const { name, image, email } = item;
  return (
    <div className="flex flex-col-reverse items-center">
      <div className="text-center mt-3">
        <h3 className="text-xl font-semibold"> {name} </h3>
        <p> {email} </p>
      </div>
      <img
        className="h-[260px] w-[260px] rounded-full object-cover bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1"
        src={image}
        alt=""
      />
    </div>
  );
};

export default InstructorItem;
