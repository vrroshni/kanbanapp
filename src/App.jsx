import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import TodoPage from './pages/TodoPage';
import  { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<TodoPage />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
