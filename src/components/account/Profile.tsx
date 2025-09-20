import { ProfileProps } from "@/types/account"

export default function Profile({ profile }: ProfileProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      {profile.phone && <p><strong>Phone:</strong> {profile.phone}</p>}
    </div>
  )
}
