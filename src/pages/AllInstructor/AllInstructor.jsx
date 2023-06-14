import { useEffect, useState } from "react";
import InstructorItem from "./../Home/Instructors/InstructorItem";

const AllInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://music-fairy-server-naimuralltime.vercel.app/allinstructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="my-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
        {instructors.map((item) => (
          <InstructorItem key={item._id} item={item}></InstructorItem>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
