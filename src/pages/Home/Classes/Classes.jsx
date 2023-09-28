import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(
      "https://music-fairy-server-naimuralltime.vercel.app/popular/classes/approved"
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">Popular Classes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 mt-7 p-2 md:p-0">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
