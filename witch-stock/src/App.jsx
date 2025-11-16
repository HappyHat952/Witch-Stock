import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Neighborhood from './pages/Neighborhood'
import Home from './pages/Home'
import Person from './pages/Person'
import TokenView from './pages/TokenView'
import PageNotFound from './pages/PageNotFound'
function App() {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Neighborhood />} />
            <Route path="/home" element={<Home />} />
            <Route path="/person/:name" element={<Person />} />
            <Route path="/token/:name" element={<TokenView />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </>);
}

export default App
