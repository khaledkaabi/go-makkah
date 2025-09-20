import './App.css'
import ContextSection from './components/contextSection'
import Footer from './components/footer'
import FooterBottom from './components/footerBottom'
import Navbar from './components/Navbar'
import ProcessSection from './components/processSection'
import SolutionSection from './components/solutionSection'

function App() {

  return (
    <>
      <Navbar />
      <div className='md:min-h-[300px] border-t border-gray-100'>
        <img className='md:w-full md:h-full' src='/home-section-1.png'/>
      </div>
      <ContextSection />
      <SolutionSection />
      <ProcessSection />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default App
