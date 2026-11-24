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

const orders: IOrder[] = [
  {
    id: "o1",
    customer: { name: "Анна", phone: "+7 900 000-00-01" },
    items: [{ menuItemId: "m1", title: "Капучино", price: 250, quantity: 2 }],
    status: "new",
    createdAt: "2026-11-24T10:00:00",
  },
  {
    id: "o2",
    customer: { name: "Иван", phone: "+7 900 000-00-02" },
    items: [{ menuItemId: "m2", title: "Круассан", price: 180, quantity: 1 }],
    status: "delivering",
    createdAt: "2026-11-24T10:15:00",
  },
  {
    id: "o3",
    customer: { name: "Мария", phone: "+7 900 000-00-03" },
    items: [{ menuItemId: "m3", title: "Чизкейк", price: 320, quantity: 1 }],
    status: "done",
    createdAt: "2026-11-24T09:40:00",
  },
  {
    id: "o4",
    customer: { name: "Пётр", phone: "+7 900 000-00-04" },
    items: [{ menuItemId: "m2", title: "Круассан", price: 180, quantity: 3 }],
    status: "new",
    createdAt: "2026-11-24T10:20:00",
  },
]

//2

function filterByStatus(orders: IOrder[], status: OrderStatus): IOrder[] {
  return orders.filter((order) => order.status === status);
}

console.log(filterByStatus(orders, "new"))

//3

// function findOrder(orders: IOrder[], id: string): IOrder | undefined {
//     if (orders.find((order) => order.id === id)) {
//         console.log(id)
//     } else {
//         console.log("Заказ не найден")
//     }
// }

function findOrder(orders: IOrder[], id: string): IOrder | undefined {
  return orders.find((order) => order.id === id);
}

const foundOrder = findOrder(orders, "o1");

if (foundOrder) {
  console.log(foundOrder.id);
} else {
  console.log("Заказ не найден");
}

console.log(findOrder(orders, "o1"))
console.log(findOrder(orders, "m1"))


function countByStatus(orders: IOrder[]): Record<OrderStatus, number> {
  const counts: Record<OrderStatus, number> = {
    new: 0,
    cooking: 0,
    delivering: 0,
    done: 0,
    cancelled: 0,
  };

  for (const order of orders) {
    counts[order.status] += 1;
  }

  return counts;
}


type Delivery = 
   | {kind: "pickup"}
   | {kind: "courier"; address: string; fee: number}



function deliveryCost(delivery: Delivery): number {
        if (delivery.kind == "courier") {
            return delivery.fee
        } else {
            return 0
        }
   }

console.log(deliveryCost({ kind: "pickup" }))
console.log(deliveryCost({ kind: "courier", address: "ул. Ленина, 5", fee: 150 }))

function deliveryLabel(delivery: Delivery): string {
        if (delivery.kind === "pickup") {
    return "Самовывоз";
  }
    return `Курьер: ${delivery.address}`;
}
console.log(deliveryLabel({ kind: "pickup" }));
console.log(deliveryLabel({ kind: "courier", address: "ул. Ленина, 5", fee:150 }));