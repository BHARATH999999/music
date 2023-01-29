import React from 'react';
// import axios from 'axios';

function Card(props) {
    console.log(props.data);
    // let link = props.link;
    // const imgLink = getImageLink(link);
    // async function getImageLink(link){
    //     // const res = await axios.get(link);

    // }
  return (
    <div>
      {/* <img src={"imgLink"}/> */}

      <h2>{props.data.type}</h2>
      <h1>{props.data.name}</h1>
      {props.data.singers.array.forEach((ele,idx)=>{
        <h3>{ele.data}</h3>
      })}
    </div>
  )
}

export default Card
