import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  // Restore session on refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data || null)
    }
  }, [])

  const handleLogin = (email, password) => {
    const { admin } = getLocalStorage()

    // Admin login
    if (
      email === admin[0].email &&
      password === admin[0].password
    ) {
      setUser('admin')
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )
      return
    }

    // Employee login
    const employee = userData?.find(
      (emp) => emp.email === email && emp.password === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          data: employee,
        })
      )
      return
    }

    // Invalid credentials
    alert('Invalid email or password')
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'employee' && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App
