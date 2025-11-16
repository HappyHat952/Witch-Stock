import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Neighborhood from './pages/neighborhood/Neighborhood'
import Home from './pages/Home'
import Person from './pages/person/Person'
import PageNotFound from './pages/PageNotFound'



function App() {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Neighborhood />} />
            <Route path="/home" element={<Home />} />
            <Route path="/person/:id" element={<Person />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </>);
}

export default App
