import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 75%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-top: 50px;
    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 0;
  display: flex;    
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  span{
    color: darkgrey;
  }

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 25px;
`;

export const WarningContainer = styled.div`
  text-align: center;  
  margin-top: 20px;
  font-size: 16px;
  color: red;
`;