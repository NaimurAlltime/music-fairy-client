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
      <Classes></Classes>
      <Instructors></Instructors>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
