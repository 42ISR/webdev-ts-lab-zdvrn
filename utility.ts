type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled"

interface ICustomer {
  name: string
  phone: string
}

interface IOrderItem {
  menuItemId: string
  title: string
  price: number
  quantity: number
  comment?: string
}

interface IOrder {
  id: string
  customer: ICustomer
  items: IOrderItem[]
  status: OrderStatus
  createdAt: string
}

interface IMenuItem {
  readonly id: string
  title: string
  price: number
  tags?: string[]
  label(): string
}

const orders: IOrder[] = [
  {
    id: "o1",
    customer: { name: "Анна", phone: "+7 900 000-00-01" },
    items: [
      { menuItemId: "m1", title: "Капучино", price: 250, quantity: 2 },
      { menuItemId: "m2", title: "Круассан", price: 180, quantity: 1 },
    ],
    status: "new",
    createdAt: "2026-11-24T10:00:00",
  },
  {
    id: "o2",
    customer: { name: "Иван", phone: "+7 900 000-00-02" },
    items: [{ menuItemId: "m3", title: "Чизкейк", price: 320, quantity: 1 }],
    status: "delivering",
    createdAt: "2026-11-24T10:15:00",
  },
]

const menuItem: IMenuItem = {
  id: "m1",
  title: "Капучино",
  price: 250,
  label() {
    return `${this.title} — ${this.price} ₽`
  },
}



// function updateOrder(order: IOrder, patch: Partial<IOrder>): IOrder {

// }