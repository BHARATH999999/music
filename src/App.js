import './App.css';
// import Navbar from './Components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Album from './Components/Album';
import Home from './Components/Home';
function App() {
  return (
    <>
      {/* <Router>
        <Album/>
        <Routes>
          <Route path='/' element={<Album />} />
          <Route path='/song' element={<Album />} />
          <Route path='/album' element={<Album />} />
          <Route path='/playlist' element={<Album />} />
          <Route path='/trending' element={<Album />} />

        </Routes>
      </Router> */}
      <>
        <Home/>
        {/* <Album /> */}
      </>
    </>
  );
}

export default App;
