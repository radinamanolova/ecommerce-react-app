import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 36px;
  height: 36px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  bottom: 5px;
`;