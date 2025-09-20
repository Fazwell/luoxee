import { OrdersProps } from "@/types/account"

export default function Orders({ orders }: OrdersProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="border p-4 rounded">
              <div className="flex justify-between">
                <span>Order #{order.id}</span>
                <span className="font-medium">${order.total}</span>
              </div>
              <p className="text-sm text-gray-500">{order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
