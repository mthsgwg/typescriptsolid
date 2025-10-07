/*
  Interface Segregation Principle (ISP)
  Muitas interfaces específicas são melhores do que uma interface única e geral.
*/

import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCard = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Matheus',
  'Faria',
  '111.111.111-11',
);
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa',
  '222.222.222/0001-11',
);
const order = new Order(
  shoppingCard,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCard.addItem(new Product('Camisa', 49.9));
shoppingCard.addItem(new Product('Caderno', 9.9));
shoppingCard.addItem(new Product('Lápis', 1.59));
console.log(shoppingCard.items);
shoppingCard.removeItem(1);
console.log(shoppingCard.items);

console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDiscount());
order.checkout();
