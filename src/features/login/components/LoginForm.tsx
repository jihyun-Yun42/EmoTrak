import { useNavigate } from "react-router-dom";
import { SIGN_UP_PAGE } from "../../../data/routes/urls";
import styled from "styled-components";
import Flex from "../../../components/Flex";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const navigate = useNavigate();

  const { loginInfo, submitFormHandler, changeInputHandler } = useLogin();

  return (
    <StFormWrapper>
      <form onSubmit={submitFormHandler}>
        <Flex gap={10}>
          <label>
            id
            <input
              type="text"
              name="email"
              value={loginInfo.email}
              onChange={changeInputHandler}
            />
          </label>
          <label>
            password
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={changeInputHandler}
            />
          </label>
          <button type="submit">로그인</button>
        </Flex>
      </form>

      <button type="button" onClick={() => navigate(SIGN_UP_PAGE)}>
        회원가입
      </button>
    </StFormWrapper>
  );
};

export default LoginForm;

export const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border: 1px solid;
  justify-content: center;
  align-items: center;
`;
