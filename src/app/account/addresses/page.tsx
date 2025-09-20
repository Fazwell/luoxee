import BackButton from "@/components/buttons/BackButton";
import Overview from "@/components/account/Overview";

export default function AddresessPage() {
  const mockProfile = { id: "2" ,name: "Ethan", email: "ethan@example.com", phone: "9999" ,profileCompletion: 80 };
  const mockAddresses = [
    { id: "1", street: "123 Freedom St", city: "Lilongwe", country: "Malawi" ,postalCode : "3422" },
  ];
  const mockOrders = [
    { id: "1001", status: "Shipped", total: 120 , date:"34:44:4"},
    { id: "1002", status: "Processing", total: 75 , date:"34:44:4"},
  ];

  return (
    <div>
      {/* Back button only shows on mobile */}
      <div className="md:hidden mb-4">
        <BackButton label="Back to Account" />
      </div>

      <Overview profile={mockProfile} addresses={mockAddresses} orders={mockOrders} />
    </div>
  );
}
