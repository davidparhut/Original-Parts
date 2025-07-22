import img1 from "../assets/product-17434-228x228.png";

const products = [
    {
        id: 1,
        title: 'Дисплей iPhone 15 Pro Max оригінал',
        price: 14000,
        type: 'Дисплей',
        frontImg: img1,
        inStock: true,
        category: 'iphone-15-pro-max',
    },
    {
        id: 2,
        title: 'Акумулятор iPhone 15 Pro Max',
        price: 1800,
        type: 'Акумулятор',
        frontImg: '/src/assets/product-17434-228x228.png',
        inStock: false,
        category: 'iphone-15-pro-max',
    },
    {
        id: 3,
        title: 'Камера iPhone 15 Pro',
        price: 2100,
        type: 'Камера',
        frontImg: '/src/assets/product-17434-228x228.png',
        inStock: true,
        category: 'iphone-15-pro',
    },
    // Додай інші товари...
];

export default products;
