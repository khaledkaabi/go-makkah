import './App.css'
import Navbar from './components/Navbar'
import Home from './page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './page/Pofile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<Profile />} />
    </Routes>
  )
}

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
