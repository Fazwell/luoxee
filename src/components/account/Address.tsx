import { Addresses} from "@/types/account";

interface AddressProps {
  addresses: Addresses[];
}

export default function Address({ addresses }: AddressProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Saved Addresses</h1>
      <ul className="space-y-3">
        {addresses.map((addr) => (
          <li key={addr.id} className="border p-3 rounded">
            <p>{addr.street}</p>

            <p>{addr.city}, {addr.postalCode}, {addr.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
