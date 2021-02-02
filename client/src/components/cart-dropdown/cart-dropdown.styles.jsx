import styled, { css } from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const scrollbarStyle = css`
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 390px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ${scrollbarStyle}
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: darkgrey;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
