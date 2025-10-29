import './App.css'
import Brands from './Components/Brands'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Pages/About'
import CuratedPicks from './Components/CuratedPicks'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <About />
      <CuratedPicks />

    </>
  )
}

export default App
