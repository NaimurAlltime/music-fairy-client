import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">
        Popular Classes {classes.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
