import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-bg relative">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="noise-overlay" aria-hidden="true" />
    </main>
  )
}

export default App
