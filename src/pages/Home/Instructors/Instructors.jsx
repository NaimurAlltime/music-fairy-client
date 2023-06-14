import { useEffect, useState } from "react";
import InstructorItem from "./InstructorItem";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      "https://music-fairy-server-naimuralltime.vercel.app/popular/instructors"
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="my-14">
      <h2 className="text-3xl font-bold text-center">Popular Instructors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
        {instructors.map((item) => (
          <InstructorItem key={item._id} item={item}></InstructorItem>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
