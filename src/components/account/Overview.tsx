import { OverviewProps } from "@/types/account"

export default function Overview({ profile, addresses, orders }: OverviewProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Hello {profile.name}</h2>
        <span className="text-sm text-gray-600">
          Signed in as: <strong>{profile.email}</strong>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-sm text-gray-500">Profile</h4>
          <p className="text-2xl font-semibold">{profile.profileCompletion}%</p>
          <p className="text-xs text-gray-400">COMPLETED</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">Addresses</h4>
          <p className="text-2xl font-semibold">{addresses.length}</p>
          <p className="text-xs text-gray-400">SAVED</p>
        </div>
      </div>

      <div className="mb-12">
        <h4 className="text-sm text-gray-500 mb-2">Recent orders</h4>
        {orders.length === 0 ? (
          <p className="text-gray-700">No recent orders</p>
        ) : (
          <ul className="space-y-2">
            {orders.slice(0, 3).map((order) => (
              <li key={order.id} className="text-sm">
                #{order.id} — {order.status} — ${order.total}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
