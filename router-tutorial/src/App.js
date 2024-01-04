import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import NavigateSample from "./NavigateSample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/navigate">navigate 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/navigate" element={<NavigateSample />} />
      </Routes>
    </div>
  );
};

export default App;
