import shirt from '../../../Assets/products/shirt.jpg';
import tShirt from '../../../Assets/products/t-shirt.jpeg';
import jeans from '../../../Assets/products/pant.jfif';

const orderData = [
    {
        id: 1,
        productName: 'shirt',
        showRoomAddress: 'Dhaka, BD',
        customerName: 'John Doe',
        customerEmail: 'john@gmail.com',
        customerPhone: '01700000000',
        customerAddress: 'Dhaka, Bangladesh',
        image: shirt,
        price: 100.00,
        quantity: 2,
    },
    {
        id: 2,
        productName: 't-shirt',
        showRoomAddress: 'Dhaka, BD',
        customerName: 'Alex',
        customerEmail: 'alex@gmail.com',
        customerAddress: 'Dhaka, Bangladesh',
        customerPhone: '01700000000',
        image: tShirt,
        price: 200.00,
        quantity: 3,
    },
    {
        id: 3,
        productName: 'jeans',
        showRoomAddress: 'Dhaka, BD',
        customerName: 'Carry',
        customerEmail: 'carry@gmail.com',
        customerAddress: 'Dhaka, Bangladesh',
        customerPhone: '01700000000',
        image: jeans,
        price: 300.00,
        quantity: 4,
    }
]

export default orderData;