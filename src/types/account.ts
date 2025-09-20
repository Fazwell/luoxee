// src/types/account.ts

export type Profile = {
    id: string
    name: string
    email: string
    phone: string
    profileCompletion: number
  }
  
  export type Addresses = {
    id: string
    street: string
    city: string
    country: string
    postalCode: string
  }
  
  export type Order = {
    id: string
    status: string
    total: number
    date: string
  }
  
  export type OverviewProps = {
    profile: Profile
    addresses: Addresses[]
    orders: Order[]
  }
  
  export type OrdersProps = {
    orders: Order[]
  }
  
  export type ProfileProps = {
    profile: Profile
  }
  
  export type AddressProps = {
    addresses: Addresses[]
  }
  