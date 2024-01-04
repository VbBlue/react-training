import NewsPage from "./pages/NewsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
