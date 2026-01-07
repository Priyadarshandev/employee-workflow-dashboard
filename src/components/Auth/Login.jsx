import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    setError('')
    setLoading(true)

    handleLogin(email, password)

    setLoading(false)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={submitHandler} className='flex flex-col items-center'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
          />

          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
          />

          {error && (
            <p className='text-red-500 text-sm mt-3'>{error}</p>
          )}

          <button
            disabled={loading}
            className='mt-7 text-white bg-emerald-600 hover:bg-emerald-700 font-semibold text-lg py-2 px-8 w-full rounded-full disabled:opacity-60'
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
