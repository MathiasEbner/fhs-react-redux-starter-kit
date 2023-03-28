import { create } from 'zustand'

export const useUsers = create((set) => {
  return {
    users: [],
    fetchUsers: async (state) => {
      const response = await fetch('http://localhost:3001/user', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      set({ users: await response.json() })
    }
  }
})

// const useTransactions = create((set) => {

// })
