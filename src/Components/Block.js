import React from 'react'

function Block(props) {
    console.log(props.data);
  return (
    <div style= {{fontSize : "27px", display : "grid", gridAutoFlow: "dense", outlineStyle: "light", outlineWidth: "1.5px", margin : "10px", padding: "10px"}}>
        <div>
            <img width = "100%" height = "100%" src="https://c.saavncdn.com/659/Alfaazo-Hindi-2023-20230119171331-500x500.jpg"/>
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

export default Block

// {
//     "type": "album",
//     "name": "Chaudhary",
//     "link": "/album/chaudhary/akENudbh6YM_",
//     "singerDetails": []
// }
