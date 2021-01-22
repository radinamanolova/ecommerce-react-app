const INITIAL_STATE = {
  sections: [
    {
      title: 'makeup',
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80',
      id: 1,
      linkUrl: 'shop/makeup'
    },
    {
      title: 'fragrance',
      imageUrl: 'https://images.unsplash.com/photo-1586026000208-70a4847797b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
      id: 2,
      linkUrl: 'shop/fragrance'
    },
    {
      title: 'hair',
      imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80',
      id: 3,
      linkUrl: 'shop/hair'
    },
    {
      title: 'body',
      imageUrl: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/body'
    },
    {
      title: 'skin care',
      imageUrl: 'https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/skinCare'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;