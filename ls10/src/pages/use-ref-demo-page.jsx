import { useRef, useState } from 'react'

function UseRefPage() {
  const [normalValue, setNormalValue] = useState('')
  const [refValue, setRefValue] = useState('')
  const normalInput = useRef(null)
  const refInput = useRef(null)
  const previousRefValue = useRef('')

  const focusNormal = () => normalInput.current?.focus()
  const focusRef = () => refInput.current?.focus()

  const handleRefInput = (event) => {
    previousRefValue.current = refValue
    setRefValue(event.target.value)
  }

  return (
    <section className="compare">
      <div className="box">
        <h3>Without useRef</h3>
        <input ref={normalInput} value={normalValue} onChange={(e) => setNormalValue(e.target.value)} />
        <button onClick={focusNormal}>Focus input</button>
        <p>Cannot keep previous value without extra state.</p>
      </div>
      <div className="box">
        <h3>With useRef</h3>
        <input ref={refInput} value={refValue} onChange={handleRefInput} />
        <button onClick={focusRef}>Focus input</button>
        <p>Current: {refValue || '(empty)'}</p>
        <p>Previous by ref: {previousRefValue.current || '(empty)'}</p>
      </div>
    </section>
  )
}

export default UseRefPage
