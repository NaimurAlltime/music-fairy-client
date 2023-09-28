const Category = ({ category }) => {
  const { categoryName, logo, classesAvailable } = category;
  // console.log(category);
  return (
    <div className="mt-10">
      <div className="">
        <img
          className="w-36 h-36 p-4 rounded-md border border-indigo-300"
          src={logo}
          alt=""
        />
      </div>
      <h2 className="mt-4 text-xl font-medium">
        {categoryName} ({classesAvailable}){" "}
      </h2>
      {/* <p className="mt-2">{classesAvailable} Classes Available</p> */}
    </div>
  );
};

export default Category;
