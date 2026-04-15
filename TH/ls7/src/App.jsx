
import { ConfigProvider } from 'antd'
import Register from './components/Register'

function App() {


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1f4d6e',
          colorBorder: '#7da2bd',
          borderRadius: 4,
        },
        components: {
          Input: {
            algorithm: true,
          },
        },
      }}
    >
      <main className="min-h-screen bg-slate-100 px-4 py-10">
        <Register />
      </main>
    </ConfigProvider>
  )
}

export default App
