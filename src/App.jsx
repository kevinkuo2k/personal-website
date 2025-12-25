import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Highlights from './pages/Highlights'

function App() {
    return (
        <div className="min-h-screen bg-primary-bg">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/highlights" element={<Highlights />} />
            </Routes>
        </div>
    )
}

export default App
