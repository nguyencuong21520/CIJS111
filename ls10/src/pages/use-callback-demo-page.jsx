import { memo, useCallback, useState } from 'react'

const ButtonNormal = ({ onAction, label }) => <button onClick={onAction}>{label}</button>
const ButtonMemo = memo(({ onAction, label }) => <button onClick={onAction}>{label}</button>)

function UseCallbackPage() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  const normalHandler = () => setCount((v) => v + 1)
  const memoHandler = useCallback(() => setCount((v) => v + 1), [])

  return (
    <section className="compare">
      <div className="box">
        <h3>Without useCallback</h3>
        <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Theme: {theme}</button>
        <ButtonNormal onAction={normalHandler} label={`Count: ${count}`} />
        <p>Function recreated every render.</p>
      </div>
      <div className="box">
        <h3>With useCallback + memo child</h3>
        <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Theme: {theme}</button>
        <ButtonMemo onAction={memoHandler} label={`Count: ${count}`} />
        <p>Stable function reference for memoized child.</p>
      </div>
    </section>
  )
}

export default UseCallbackPage
