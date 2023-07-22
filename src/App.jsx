import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import TodoPage from './pages/TodoPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<TodoPage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
