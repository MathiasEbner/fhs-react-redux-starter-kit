import { create } from 'zustand'
import produce from 'immer'

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
    },
    updateTransaction: async (id) => {
      const response = await fetch(`http://localhost:3001/money-transaction/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paidAt: (new Date()).toISOString()
        })
      })
      const updatedTransaction = await response.json()
      set(
        produce((draft) => {
          const transactionIndex = draft.transactions.findIndex((transaction) => transaction.id === id)
          if (transactionIndex !== -1) {
            draft.transactions[transactionIndex] = updatedTransaction
          }
        })
      )
    },
    createTransaction: async (creditorId, debitorId, amount, paidAt) => {
      const response = await fetch('http://localhost:3001/money-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          creditorId,
          debitorId,
          amount,
          paidAt
        })
      })
      const createdTransaction = await response.json()
      set(
        produce((draft) => {
          draft.transactions.push(createdTransaction)
        })
      )
    }
  }
}
)
