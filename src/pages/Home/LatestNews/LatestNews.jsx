import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: latestNews = [] } = useQuery(["latestNews"], async () => {
    const res = await axiosSecure.get("/news");
    return res.data;
  });

  return (
    <div className="mt-16 mb-16 max-w-screen-xl mx-auto">
      <h3 className="text-3xl font-bold text-center">Latest News</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 p-2 md:p-0">
        {latestNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};
export default LatestNews;
