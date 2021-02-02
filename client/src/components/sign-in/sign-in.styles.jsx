import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const SignInButton = styled(CustomButton)`
  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const SignInGoogleButton = styled(CustomButton)`
  @media screen and (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;