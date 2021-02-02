import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    margin: 15px auto;

    > *:first-child {
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1024px) {
    width: 850px;
  }
`;