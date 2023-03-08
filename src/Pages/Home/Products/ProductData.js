import shirt from '../../../Assets/products/shirt.jpg';
import tShirt from '../../../Assets/products/t-shirt.jpeg';
import jeans from '../../../Assets/products/pant.jfif';

const ProductData = [
    {
        id: 1,
        title: 'Shirt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: shirt,
        price: 19.99,
        category: 'fashion'
    },
    {
        id: 2,
        title: 'T-Shirt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: tShirt,
        price: 29.99,
        category: 'fashion'
    },
    {
        id: 3,
        title: 'Jeans',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: jeans,
        price: 39.99,
        category: 'fashion'
    },
];

export default ProductData;