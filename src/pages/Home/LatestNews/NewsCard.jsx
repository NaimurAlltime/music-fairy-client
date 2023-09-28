const NewsCard = ({ news }) => {
  const { title, img, date, posted_by, description } = news;
  return (
    <div className="card card-compact rounded-none w-full md:w-[360px] bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-full" src={img} alt="blog" />
      </figure>

      <div className="card-body">
        <div className="flex items-center">
          <p>
            <span className="font-medium text-lg">By,</span>{" "}
            <span className="font-medium text-lg text-info">{posted_by}</span>
          </p>
          <p>
            {" "}
            <span className="font-medium">Date:</span> {date}{" "}
          </p>
        </div>
        <h2 className="card-title"> {title} </h2>
        <p>{description.slice(0, 87)} ...</p>
        <div className="card-actions">
          <button className="btn btn-outline btn-info">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
