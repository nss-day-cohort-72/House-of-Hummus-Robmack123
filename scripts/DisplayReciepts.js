export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=entrees&_expand=sides&_expand=vegetables")
    const orders = await fetchResponse.json();

    console.log(orders)
    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.entrees.price + order.vegetables.price + order.sides.price;
            return `<div> Receipt #${order.id} = ${orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>`;
        }
    ).join("");

    return ordersHTML
}