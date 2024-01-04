import { useNavigate } from "react-router-dom";

const NavigateSample = () => {
  const navigate = useNavigate();

  //뒤로가기
  const HandleGoBack = () => {
    navigate(-1);
  };

  //홈으로 이동
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={HandleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default NavigateSample;
