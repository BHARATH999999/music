import axios from 'axios'
import React, { useState } from 'react'
import Sub from './Sub';

function Home() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('session')) || undefined);

    async function help() {
        let res = await axios.get('https://95j4ul.sse.codesandbox.io/homePageDetails');
        // console.log(res.data);
        setData(res.data);
        localStorage.setItem('session', JSON.stringify(res.data));
    }

    if(data === undefined) help();
    return (
        <div>
            {
                data ? data.map((ele,idx) => (
                    <Sub data = {ele} key = {idx}/>
                )) : "Loading...😊"
            }
        </div>
    )
}

export default Home
