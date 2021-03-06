import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, CollectionTitle, CollectionItemsContanier } from './collection.styles';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{ title }</CollectionTitle>
      <CollectionItemsContanier>
        { items.map(item => (
          <CollectionItem key={ item.id } item={ item } />
        )) }
      </CollectionItemsContanier>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);