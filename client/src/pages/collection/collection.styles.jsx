import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 28px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContanier = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 50px;
  }

   @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    & > div {
      margin-bottom: 25px;
    }
  }
`;