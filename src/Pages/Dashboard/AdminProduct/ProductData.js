import shirt from '../../../Assets/products/shirt.jpg';
import tShirt from '../../../Assets/products/t-shirt.jpeg';
import jeans from '../../../Assets/products/pant.jfif';

const productData = [
    {
        name: "shirt",
        image: shirt,
        price: 100.00,
        quantity: 10,
        status: "active",
    },
    {
        name: "pant",
        image: jeans,
        price: 200.00,
        quantity: 20,
        status: "active",
    },
    {
        name: "t-shirt",
        image: tShirt,
        price: 300.00,
        quantity: 30,
        status: "active",
    }
];

export default productData;