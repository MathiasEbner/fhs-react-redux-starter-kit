import { create } from 'zustand'

export const useUsers = create((set) => {
  return {
    users: [],
    fetchUsers: async () => {
      const response = await fetch('http://localhost:3001/user', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      set({ users: await response.json() })
    }
  }
})

export const useTransactions = create((set) => {
  return {
    transactions: [],
    fetchTransactions: async () => {
      const response = await fetch('http://localhost:3001/money-transaction', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      set({ transactions: await response.json() })
    }
    // updateTransaction: async (transaction) => {

    // }
  }
})
