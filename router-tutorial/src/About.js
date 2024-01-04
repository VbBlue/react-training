import { useLocation } from "react-router-dom";
import queryString from "query-string";

const About = () => {
  const { search } = useLocation();
  const value = queryString.parse(search);

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {value.detail && <p>detail 값을 {value.detail}로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
