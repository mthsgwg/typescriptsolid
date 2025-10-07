import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCard = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency);
shoppingCard.addItem(new Product('Camisa', 49.9));
shoppingCard.addItem(new Product('Caderno', 9.9));
shoppingCard.addItem(new Product('Lápis', 1.59));
console.log(shoppingCard.items);
shoppingCard.removeItem(1);
console.log(shoppingCard.items);

console.log(shoppingCard.total());
order.checkout();
