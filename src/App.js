import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserSignIn } from './components/UserSignIn'
import { UserSignUp } from './components/UserSignUp'
import { MoneyTransaction } from './components/MoneyTransaction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserSignIn />
  },
  {
    path: '/sign-in',
    element: <UserSignIn />
  },
  {
    path: '/sign-up',
    element: <UserSignUp />
  },
  {
    path: '/money-transactions',
    element: <MoneyTransaction />
  }
])

function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App
