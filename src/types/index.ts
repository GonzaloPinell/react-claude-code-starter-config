// Product types para el sistema POS
export interface Product {
  id: string
  sku: string
  name: string
  price: number
  cost: number
  stock: number
  category: string
  taxRate: number
}

// User types
export interface User {
  id: string
  username: string
  role: 'admin' | 'manager' | 'supervisor' | 'cashier'
  active: boolean
}

// Todo type para el ejemplo
export interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}
