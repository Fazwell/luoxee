import Profile from "@/components/account/Profile";

export default function Page() {
  return (
    <Profile profile={{ id: "233", name: "John Doe", email: "john@example.com", phone: "+265 999 000 000" , profileCompletion: 20}} />
  );
}
