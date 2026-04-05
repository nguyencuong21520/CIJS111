import React from 'react'

const FormInputInfo = (props) => {
  const { setName, setEmail } = props;
  const handeleSubmit = (e) => {
    e.preventDefault();

    setName(e.target.name.value);
    setEmail(e.target.email.value);
  }
  return (
    <>
    <form onSubmit={handeleSubmit}>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        </div>

        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default FormInputInfo