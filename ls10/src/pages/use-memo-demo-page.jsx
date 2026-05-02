import { useMemo, useState } from 'react'

function UseMemoPage() {
  const [number, setNumber] = useState(30000)
  const [theme, setTheme] = useState('light')

  const expensiveNoMemo = () => {
    let total = 0
    for (let i = 0; i < number * 200; i += 1) total += i
    return total
  }

  const expensiveWithMemo = useMemo(() => {
    let total = 0
    for (let i = 0; i < number * 200; i += 1) total += i
    return total
  }, [number])

  return (
    <section className="compare">
      <div className="box">
        <h3>Without useMemo</h3>
        <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value || 0))} />
        <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Theme: {theme}</button>
        <p>Expensive result: {expensiveNoMemo()}</p>
        <p>Recalculate on every render.</p>
      </div>
      <div className="box">
        <h3>With useMemo</h3>
        <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value || 0))} />
        <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Theme: {theme}</button>
        <p>Expensive result: {expensiveWithMemo}</p>
        <p>Only recalculate when number changes.</p>
      </div>
    </section>
  )
}

export default UseMemoPage
