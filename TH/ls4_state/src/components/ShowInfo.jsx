import React from 'react'

const ShowInfo = (props) => {
  const { name, email } = props;
  return (
    <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    </div>
  )
}

export default ShowInfo