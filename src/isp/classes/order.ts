import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this.messaging.sendMessage(
      `Seu pedido com ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `Cliente: ${this.customer.getName()} - ${this.customer.getIDN()}`,
    );
  }
}
