import LoginPage from './screens/Login';
import './App.css';
import StoreBoundary from './store';

function App() {

  return (
    <div className='h-screen'>
      <StoreBoundary>
        <LoginPage />
      </StoreBoundary>
    </div>
  )
}

export default App;
