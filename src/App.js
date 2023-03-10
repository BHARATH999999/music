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
  const [media, setMedia] = useState(JSON.parse(localStorage.getItem('patalu')) || ['https://aac.saavncdn.com/772/7d120511a717125960545ff982ed6d55_320.mp4']);
  const value = {
    media: media,
    set : set
  }
  
  function set(data){
    if(media[0] === data) return;
    let media1 = media;
    media.unshift(data);
    setMedia(media1);
    console.log(media1);
    localStorage.setItem('patalu', JSON.stringify(media));
    window.location.reload(false)
  }

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
