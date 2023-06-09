const ClassCard = ({ item }) => {
  const { name, classImage, instructorName, availableSeats, price } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[380px] w-full object-cover"
          src={classImage}
          alt="music"
        />
      </figure>
      {/* <p className="bg-slate-900 text-white absolute right-0 px-4 py-1 mr-5 mt-3">
        Price: ${price}
      </p> */}
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
          <button className="btn btn-outline uppercase bg-slate-200 text-[#111] border-0 border-b-4 border-[#111] mb-14">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
