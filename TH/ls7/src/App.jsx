
import { ConfigProvider } from 'antd'

function App() {


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1f4d6e',
          borderRadius: 4
        },
      }}
    >
      <main className="min-h-screen bg-slate-100 px-4 py-10">

      </main>
    </ConfigProvider>
  )
}

export default App
