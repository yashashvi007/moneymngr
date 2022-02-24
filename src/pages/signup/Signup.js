import styles from './Signup.module.css'

import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {

  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const {error , isPending , signup} = useSignup()

  const handleSubmit = (e)=>{
    e.preventDefault()
    signup(email , password , username)
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit} >
        <h2>SignUp</h2>
        <label>
          <span>User name : </span>
          <input
            type='text'
            onChange={(e)=> setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <span>Email : </span>
          <input 
            type='email'
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
           />
        </label>
        <label>
          <span>Password : </span>
          <input
            type='password'
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className='btn' >SignUp</button>}
        {isPending && <button className='btn' disabled >Loading...</button> }
        {error && <p>{error}</p> }
    </form>
  )
}
