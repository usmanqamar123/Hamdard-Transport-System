import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <div>
      <Router>
        <Header />
        <div className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  )
}

export default App
