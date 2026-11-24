type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled"


interface IMenuItem {
    readonly id: string,
    title: string,
    price: number,
    tags?: string[],
    label(): string,
}

interface IOrderItem {
    menuItemId: string,
    title: string,
    price: number,
    quantity: number,
    comment?: string,
}

const menu: IMenuItem[] = [
  {
    id: "m1",
    title: "Капучино",
    price: 250,
    label() {
      return `${this.title} — ${this.price} ₽`;
    },
  },
  {
    id: "m2",
    title: "Круассан",
    price: 180,
    label() {
      return `${this.title} — ${this.price} ₽`;
    },
  },
  {
    id: "m3",
    title: "Чизкейк",
    price: 320,
    label() {
      return `${this.title} — ${this.price} ₽`;
    },
  },
];


//2

interface IOrderItem {
  menuItemId: string;
  title: string;
  price: number;
  quantity: number;
  comment?: string;
}

function itemTotal(item: IOrderItem): number {
  return item.price * item.quantity;
}

const item: IOrderItem = {
  menuItemId: "m1",
  title: "Капучино",
  price: 250,
  quantity: 2,
};

console.log(itemTotal(item)); // 500

//3

interface ICustomer {
    name: string,
    phone: string,
}

interface IOrder {
    id: string,
    customer: ICustomer,
    items: IOrderItem[],
    status: OrderStatus,
    createdAt: string,
}

function orderTotal(order: IOrder): number {
    return order.items.reduce((total, item) => total + itemTotal(item), 0);
}

const order: IOrder = {
  id: "o1",
  customer: {
    name: "Анна",
    phone: "+79991234567",
  },
  items: [
    {
      menuItemId: "m1",
      title: "Капучино",
      price: 250,
      quantity: 2,
    },
    {
      menuItemId: "m2",
      title: "Круассан",
      price: 180,
      quantity: 1,
    },
  ],
  status: "new",
  createdAt: "2026-11-24T10:00:00Z",
};

console.log(orderTotal(order));
console.log(order.id);
console.log(order.status);
console.log(order.customer.name);
console.log(order.items[0].title);
console.log(order.items[0].comment);


function canAfford(wallet: { balance: number, currency: string }, price: number): boolean {
  return wallet.balance >= price;
}

const wallet = { balance: 500, currency: "RUB" };

console.log(canAfford(wallet, 300));
canAfford({ balance: 500, currency: "RUB" }, 300);

