import { useState } from 'react'
import './App.css'
import MemoPage from './pages/memo-demo-page.jsx'
import UseCallbackPage from './pages/use-callback-demo-page.jsx'
import UseMemoPage from './pages/use-memo-demo-page.jsx'
import UseRefPage from './pages/use-ref-demo-page.jsx'

const hooks = ['useRef', 'memo', 'useMemo', 'useCallback']

function App() {
  const [activeHook, setActiveHook] = useState('useRef')

  const renderPage = () => {
    if (activeHook === 'useRef') return <UseRefPage />
    if (activeHook === 'memo') return <MemoPage />
    if (activeHook === 'useMemo') return <UseMemoPage />
    return <UseCallbackPage />
  }

  return (
    <main className="app">
      <h1>React Hooks Demo Pages</h1>
      <p className="subtitle">Each page compares without hook vs with hook.</p>

      <nav className="tabs">
        {hooks.map((hookName) => (
          <button
            key={hookName}
            className={activeHook === hookName ? 'tab active' : 'tab'}
            onClick={() => setActiveHook(hookName)}
          >
            {hookName}
          </button>
        ))}
      </nav>

      <section className="card">
        <h2>Page: {activeHook}</h2>
        <div className="hint">
          <span>Tip:</span> toggle theme button to trigger re-render and observe difference.
        </div>
      </section>
      {renderPage()}
    </main>
  )
}

export default App
