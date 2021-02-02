import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
`;

export const CartItemImageContainer = styled.div`
  width: 40%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CartItemDetailsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 15px;
`;

export const CartItemName = styled.span`
  font-size: 16px;
`;

export const CartItemPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
