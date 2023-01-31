import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MediaContext } from '../App.js';
const cheerio = require('cheerio');

function Block(props) {
  const [imgLink, setImageLink] = useState("https://c.saavncdn.com/659/Alfaazo-Hindi-2023-20230119171331-500x500.jpg");
  let value = useContext(MediaContext);
  let media = value.media;
  let setMedia = value.setMedia;

  (async function help() {
    if (props.data.link === "/home") {
      return;
    }
    let res = await axios.get(props.data.link);
    const result = res.data.split("<!--[if IEMobile 7 ]>")[1];
    // console.log(result);
    const $ = cheerio.load(result);
    let link = $('.c-content img').attr('src');
    if (link) setImageLink(link);
    // console.log(imgLink);
  })();

  async function play() {
    if(props.data.type === "song") console.log('play');
    // else return;
    try {
      let songIdData = await axios.get("https://95j4ul.sse.codesandbox.io/songId/" + props.data.name);
      let songMediaData = await axios.get("https://95j4ul.sse.codesandbox.io/songMediaUrl/" + songIdData.data.id);
      setMedia(songMediaData.data.songBaseUrl);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div onClick={play} style={{ cursor: "pointer", fontSize: "22px", display: "grid", gridAutoFlow: "dense", outlineStyle: "light", outlineWidth: "1.5px", margin: "10px", padding: "10px" }}>
      <div>
        <img width="100%" height="100%" src={imgLink} />
      </div>
      <div > {props.data.name}</div>
      <div > {props.data.type}</div>
      {/* <div> Link : {props.data.link}</div> */}
      <div>
        {/* {props.data.singerDetails.map((ele,idx) => (
            <div> {ele}</div>
        ))} */}
      </div>
    </div>
  )
}

export default Block;