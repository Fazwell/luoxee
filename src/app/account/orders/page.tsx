import Orders from "@/components/account/Order";

export default function Page() {
  return (
    <Orders
      orders={[
        {
            id: "1", date: "2025-09-01", status: "delivered", total: 120,
          
        },
        {
            id: "2", date: "2025-09-10", status: "pending", total: 75,
           
        },
      ]}
    />
  );
}
