import React, { useState } from 'react'
import Block from './Block';

function Sub(props) {
    const [header, setHeader] = useState(props.data.header);
    const [data, setData] = useState(props.data.data);
    // console.log(header,data,props.data)
    return (
        <>
            <div style={{ fontWeight: 600, fontSize: "33px" }}>
                {header}
            </div>

            <div style={{display : "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "dense", flexWrap : "wrap", flexDirection : "row", overflow : "auto", padding : "0.5rem",justifyContent : "center"}}>
            {data.map((ele,idx) => (
                <Block data = {ele} key = {idx}/>
            )) }
            </div>
        </>
    )
}

export default Sub
