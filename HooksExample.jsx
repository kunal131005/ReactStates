import React, { useEffect, useState } from 'react'

const HooksExample = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('Red')
    const [msg, setMsg] = useState("")
    const [posts, setPost] = useState([])


    // Re-Render ke baad hume agar user ko koi msg dikhana hai ki bhai aapki website shi se kaam kar rhi hai to iska use karte hai yeh jitni baar page re-render hoga utni baar msg show karega
    useEffect(()=>{
        // console.log("Response Mountain!")
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            res.json();
        })
        .then((data)=>{
            setPost(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
    return (
        <div>
            <h1>Hooks Example</h1>
            <h2>Button clicked {count} times</h2>
            <button type="submit" onClick={() => {
                setCount(count + 1)
            }}>Click</button>
            <hr />
            <button type="submit" onClick={() => {
                setColor('Blue')
            }}>{color}</button>
            <hr />
            <input type="text" onChange={(e) => {
                setMsg(e.target.value)
            }} />
            <h2>{msg}</h2>
            <hr />
            <h2>Posts</h2>
            {
                posts.map((post)=>(
                <li>{post.title}</li>

                )
                )
            }
        </div>
    )
}

export default HooksExample;
