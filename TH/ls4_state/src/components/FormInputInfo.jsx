import React from 'react'

const FormInputInfo = (props) => {
  const { handeleSubmit } = props;

  const onSubmitForm = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    handeleSubmit(name, email)
  }


  return (
    <>
    <form onSubmit={onSubmitForm}>
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