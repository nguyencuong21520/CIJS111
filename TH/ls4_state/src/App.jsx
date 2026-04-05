import React, { useState } from 'react'
import FormInputInfo from './components/FormInputInfo'
import ShowInfo from './components/ShowInfo'
const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handeleSubmit = (name, email) => {
    setErrMsg('')

    //validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      setErrMsg('Email không hợp lệ')
      return
    }

    //validate name using regex
    const nameRegex = /^[a-zA-Z]+$/;
    if(!nameRegex.test(name)){
      setErrMsg('Tên không hợp lệ')
      return
    }

    setName(name)
    setEmail(email)
  }

  return (
    <div>
      <h2>Bài 1</h2>
      <FormInputInfo handeleSubmit={handeleSubmit}/>
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
      <ShowInfo name={name} email={email}/>
    </div>
  )
}

export default App