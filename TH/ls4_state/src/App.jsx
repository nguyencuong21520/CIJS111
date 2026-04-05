import React, { useState } from 'react'
import FormInputInfo from './components/FormInputInfo'
import ShowInfo from './components/ShowInfo'
const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <h2>Bài 1</h2>
      <FormInputInfo setName={setName} setEmail={setEmail}/>
      <ShowInfo name={name} email={email}/>
    </div>
  )
}

export default App