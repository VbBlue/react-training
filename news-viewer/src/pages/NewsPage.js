import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const data = useParams();
  const category = data.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
