//demo cleanup function with useEffect, demo setInterval
import { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)

    return () =>{
      clearInterval(interval)
    }
  }, [time])


  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App