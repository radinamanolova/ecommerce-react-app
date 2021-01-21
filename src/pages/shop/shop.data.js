const SHOP_DATA = [
  {
    id: 1,
    title: 'Makeup',
    routeName: 'makeup',
    items: [
      {
        id: 1,
        name: 'Liquid Foundation',
        imageUrl: 'https://images.unsplash.com/photo-1566733015703-b89a6389ff18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        price: 59
      },
      {
        id: 2,
        name: 'Setting Powder',
        imageUrl: 'https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 39
      },
      {
        id: 3,
        name: 'Bronzer Palette',
        imageUrl: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        price: 49
      },
      {
        id: 4,
        name: 'Blush',
        imageUrl: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 29
      },
      {
        id: 5,
        name: 'Highlighter',
        imageUrl: 'https://images.unsplash.com/photo-1580694500583-21a6189e6b56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 27
      },
      {
        id: 6,
        name: 'Nude Eye Shadow Palette',
        imageUrl: 'https://images.unsplash.com/photo-1583931537180-7d26921260e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 120
      },
      {
        id: 7,
        name: 'Pink Eye Shadow Palette',
        imageUrl: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 90
      },
      {
        id: 8,
        name: 'Volumizing Mascara',
        imageUrl: 'https://images.unsplash.com/photo-1512207159096-c2c91b1dfadd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
        price: 18
      },
      {
        id: 9,
        name: 'Lipstick Collection',
        imageUrl: 'https://images.unsplash.com/photo-1570088727237-68500d217455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
        price: 45
      },
      {
        id: 10,
        name: 'Brush Set - 6 Piece',
        imageUrl: 'https://images.unsplash.com/photo-1556774943-97545845b53e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1124&q=80',
        price: 21
      }
    ]
  },
  {
    id: 2,
    title: 'Fragrance',
    routeName: 'fragrance',
    items: [
      {
        id: 11,
        name: 'D&G 3 L’IMPERATRICE Eau de Toilette',
        imageUrl: 'https://images.unsplash.com/photo-1544468266-6a8948003cd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80',
        price: 85
      },
      {
        id: 12,
        name: 'GABRIELLE CHANEL ESSENCE Eau de Parfum',
        imageUrl: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
        price: 140
      },
      {
        id: 13,
        name: 'CHANELN°5 L’EAU',
        imageUrl: 'https://images.unsplash.com/photo-1581954725292-be19419dbed8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        price: 110
      },
      {
        id: 14,
        name: 'CHANCE Eau de Toilette',
        imageUrl: 'https://images.unsplash.com/photo-1572577515722-f9d7ec0d5daa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        price: 90
      },
      {
        id: 15,
        name: 'Gucci Guilty Love Pour Femme Eau de Parfum',
        imageUrl: 'https://images.unsplash.com/photo-1583606613898-cba9aeac8c05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=673&q=80',
        price: 99
      },
      {
        id: 16,
        name: 'AERIN Gardenia Rattan & AERIN Waterlily Sun',
        imageUrl: 'https://images.unsplash.com/photo-1519493490532-9641938d51b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 270
      },
      {
        id: 17,
        name: 'Valentino Eau de Parfum',
        imageUrl: 'https://images.unsplash.com/photo-1512303712963-792b49bff940?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=921&q=80',
        price: 100
      },
      {
        id: 18,
        name: 'Laurissi Eau de Poème',
        imageUrl: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        price: 149
      },
      {
        id: 19,
        name: 'Givenchy LInterdit Eau de Parfum',
        imageUrl: 'https://images.unsplash.com/photo-1578996834254-13d1b661a5ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        price: 95
      },
      {
        id: 20,
        name: 'CHANEL COCO NOIR',
        imageUrl: 'https://images.unsplash.com/photo-1594036436267-2750a8ab2ae2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 109
      }
    ]
  },
  {
    id: 3,
    title: 'Hair',
    routeName: 'hair',
    items: [
      {
        id: 21,
        name: 'Mad About Waves and Mad About Curls Pack',
        imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2015&q=80',
        price: 45
      },
      {
        id: 22,
        name: 'Thicken & Restore Bamboo Fibers Shampoo',
        imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 39
      },
      {
        id: 23,
        name: 'Restorative Hair Mask',
        imageUrl: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=950&q=80',
        price: 15
      },
      {
        id: 24,
        name: 'Hair Wash',
        imageUrl: 'https://images.unsplash.com/photo-1593560369164-8f3a8facd0e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
        price: 12
      },
      {
        id: 25,
        name: 'Banana Truly Nourishing Hair Mask',
        imageUrl: 'https://images.unsplash.com/photo-1560780372-d973eeff6b7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
        price: 19
      },
      {
        id: 26,
        name: '3 Pack Curology - Shampoo, Cleanser & Rich Moisturizer',
        imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        price: 89
      },
      {
        id: 27,
        name: '3 Pack Shampoo',
        imageUrl: 'https://images.unsplash.com/photo-1567899483052-b1048044ef1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
        price: 65
      }
    ]
  },
  {
    id: 4,
    title: 'Body',
    routeName: 'body',
    items: [
      {
        id: 28,
        name: 'Shower Gel',
        imageUrl: 'https://images.unsplash.com/photo-1584949514123-474cfa705dfe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        price: 10
      },
      {
        id: 29,
        name: 'Body Oil',
        imageUrl: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        price: 25
      },
      {
        id: 30,
        name: 'Balancing Body Balm & Moisturising Mask',
        imageUrl: 'https://images.unsplash.com/photo-1566812303232-cb17247721ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2075&q=80',
        price: 39
      },
      {
        id: 31,
        name: 'Coconut Body Mist',
        imageUrl: 'https://images.unsplash.com/photo-1592343530102-bb0f284c6d3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 17
      },
      {
        id: 32,
        name: 'Body Lotion',
        imageUrl: 'https://images.unsplash.com/photo-1594311431552-1cde4f4d1891?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        price: 26
      },
      {
        id: 33,
        name: 'Foot Cream Argan',
        imageUrl: 'https://images.unsplash.com/photo-1609963824634-455bfd8dd243?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        price: 8
      },
      {
        id: 34,
        name: 'Instant Self Tanning Lotion',
        imageUrl: 'https://images.unsplash.com/photo-1571656435734-d9aff3357ba6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2017&q=80',
        price: 38
      },
      {
        id: 35,
        name: 'Body Scrub',
        imageUrl: 'https://images.unsplash.com/photo-1606204681680-52ba1577f9c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1850&q=80',
        price: 15
      },
      {
        id: 36,
        name: 'Soap Bar',
        imageUrl: 'https://images.unsplash.com/photo-1556037914-bc3c9094e061?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
        price: 5
      },
      {
        id: 37,
        name: '3 Pack Handcrafted Soap',
        imageUrl: 'https://images.unsplash.com/photo-1603533626742-33eb83df8091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
        price: 12
      }
    ]
  },
  {
    id: 5,
    title: 'Skin Care',
    routeName: 'skin-care',
    items: [
      {
        id: 38,
        name: 'Balancing Toner',
        imageUrl: 'https://images.unsplash.com/photo-1561920723-e0c68a4fe723?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1921&q=80',
        price: 14
      },
      {
        id: 39,
        name: 'Hydrating Toner',
        imageUrl: 'https://images.unsplash.com/photo-1571965251146-d5c7e73f1f8c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1901&q=80',
        price: 16
      },
      {
        id: 40,
        name: 'Silky Cleansing Oil',
        imageUrl: 'https://images.unsplash.com/photo-1563804447971-6e113ab80713?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        price: 29
      },
      {
        id: 41,
        name: 'Intensive Repairing Serum-In-Cream',
        imageUrl: 'https://images.unsplash.com/photo-1559251400-45e1df4acb03?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1900&q=80',
        price: 78
      },
      {
        id: 42,
        name: 'Clarifying Face Wash & Brightening Scrub',
        imageUrl: 'https://images.unsplash.com/photo-1564594206491-26734df9237f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        price: 55
      },
      {
        id: 43,
        name: 'Vitamin C Serum',
        imageUrl: 'https://images.unsplash.com/photo-1564594228700-4b5ae46c70c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=801&q=80',
        price: 120
      },
      {
        id: 44,
        name: 'The Ordinary Skin Care Pack',
        imageUrl: 'https://images.unsplash.com/photo-1582103645388-b85304592cb0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        price: 68
      },
      {
        id: 45,
        name: 'Face Mist',
        imageUrl: 'https://images.unsplash.com/photo-1591135108731-615592cf231b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
        price: 11
      },
      {
        id: 46,
        name: 'La Roche-Posay Effaclar',
        imageUrl: 'https://images.unsplash.com/photo-1586179743731-499b255c22b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        price: 36
      },
      {
        id: 47,
        name: 'Super Glow Serum',
        imageUrl: 'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80',
        price: 47
      }
    ]
  }
];

export default SHOP_DATA;