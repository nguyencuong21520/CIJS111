import { memo, useState } from 'react'

function SlowList({ items, title }) {
  let total = 0
  for (let i = 0; i < 3000000; i += 1) total += i
  return (
    <div className="box">
      <h3>{title}</h3>
      <p>Heavy calc result: {total % 9999}</p>
      <p>Items: {items.join(', ')}</p>
    </div>
  )
}

const MemoSlowList = memo(SlowList)

function MemoPage() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  const items = ['A', 'B', 'C']

  return (
    <section className="compare">
      <div className="box">
        <h3>Without memo</h3>
        <button onClick={() => setCount((v) => v + 1)}>Count: {count}</button>
        <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Theme: {theme}</button>
        <SlowList items={items} title="Re-render every parent update" />
      </div>
      <div className="box">
        <h3>With memo</h3>
        <button onClick={() => setCount((v) => v + 1)}>Count: {count}</button>
        <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Theme: {theme}</button>
        <MemoSlowList items={items} title="Skip render if props unchanged" />
      </div>
    </section>
  )
}

export default MemoPage
