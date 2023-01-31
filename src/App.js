import { data } from 'cheerio/lib/api/attributes';
import React, { useState } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Album from './Components/Album';
import Home from './Components/Home';
import Music from './Components/Music';
export const MediaContext = React.createContext();

function App() {
  const [media, setMedia] = useState('https://aac.saavncdn.com/772/7d120511a717125960545ff982ed6d55_320.mp4');
  const value = {
    media: media,
    setMedia : (data) => setMedia(data)
  }
  // console.log(value);

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
        <MediaContext.Provider value={value}>
          <Home />
          <Music />
        </MediaContext.Provider>
        {/* <Album /> */}
      </>
    </>
  );
}

export default App;
