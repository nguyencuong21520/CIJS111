import React from 'react'

const FormInputInfo = () => {
  return (
    <>
    <form>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        </div>

        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default FormInputInfo