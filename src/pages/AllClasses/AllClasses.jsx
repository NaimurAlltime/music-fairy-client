import { useEffect, useState } from "react";

import ClassCard from "../Home/Classes/ClassCard";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      "https://music-fairy-server-naimuralltime.vercel.app/classes/approved"
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="my-10 max-w-screen-xl mx-auto p-2 md:p-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
