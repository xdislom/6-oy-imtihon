import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Company from './components/Company'
import Career from './components/Career'
import Inner from './components/Inner'
import Templete from './components/Templete'
import Privacy from './components/Privacy'
import Blog from './components/Blog'
import BgInner from './components/BgInner'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/inner" element={<Inner />} />
        <Route path="/templete" element={<Templete />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bginner" element={<BgInner />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App