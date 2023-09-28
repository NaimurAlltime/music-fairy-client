import Categories from "../../Categories/Categories";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <div className="max-w-screen-xl mx-auto mt-4">
        <Classes></Classes>
      </div>
      <div className="max-w-screen-xl mx-auto mt-24">
        <Instructors></Instructors>
      </div>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
