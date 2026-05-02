import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Gắn cây React vào #root trong index.html. StrictMode bật thêm kiểm tra (dev) để phát hiện lỗi tiềm ẩn.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
