import React, { useState } from 'react'
import "../css/Home.css"
export default function Home() {
    const [text, settext] = useState("Deep");
    const change = () => {
        // let newText = text.toUpperCase();
        let val = text;
        if (val === 'Deep') {
            settext('singh')
        }
        else {
            settext('Deep')
        }

    }

    return (
        <div style={{ marginTop: '2rem' }} >
            <h2 > {text}   </h2> <br />
            <button className='btn btn-success' onClick={change} > click here</button>
        </div>
    )
}
