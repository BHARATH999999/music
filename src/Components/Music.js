import React, {useContext, useState} from 'react'
import "../Styles/Audio1.css"
import {MediaContext} from '../App.js';

function Music() {
    let value = useContext(MediaContext);
    const [med, setMed] = useState(value.media[0]);

    return (
        <div className="navbar" >
            {/* background-color: rgba(43, 3, 246, 0.4); */}
            <div style={{ display: "flex", justifyContent: "center", height: "100%", paddingBottom: "20px" }}>
                <img src = {require("../media/back.png")}/>
                <audio controls style={{ backgroundColor: "rgba(43, 3, 246, 0.4" }}>
                    <source src={med}></source>
                </audio>
                <img src = {require("../media/next.png")}/>
            </div>
        </div>
    )
}

export default Music
