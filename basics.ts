type OrderStatus = "new" | "cooking" | "delivering" | "done" | "cancelled";
type Discount =  0 | 5 | 10 | 15;

function statusLabel(status: OrderStatus): string {
  switch (status) {
    case "new":
      return "Новый";
    case "cooking":
      return "Готовится";
    case "delivering":
      return "В доставке";
    case "done":
      return "Завершён";
    case "cancelled":
      return "Отменён";
  }
}


function orderTotal(price: number, quantity: number, deliveryFee: number = 0): number {
    return price * quantity + deliveryFee
}

function isFinalStatus(status: OrderStatus): boolean {
    if (status == "done" || status == "cancelled") {
        return true
    } else {
        return false
    }
}

function parseQuantity(raw: unknown): number | null {
    if (typeof raw !== "number" && typeof raw !== "string") {
    return null;
    }

    const quantity = Number(raw);

    if (Number.isInteger(quantity) && quantity > 0) {
        return quantity;
    }
  return null;
    
}

console.log(parseQuantity("2"));
console.log(parseQuantity(2));   
console.log(parseQuantity(2.5)); 
console.log(parseQuantity(-1));  

function applyDiscount(total: number, discount: Discount): number {
    return total - total * discount / 100
}

console.log(applyDiscount(120, 0));
console.log(applyDiscount(120, 10));
console.log(applyDiscount(120, 15));







