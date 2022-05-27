import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App2 = () => {
  
    const [data,setData]=useState([]);
    const [load,setLoad]=useState(10);


    const getData=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
        if(res)
        {
            console.log(res);
            setData(res.data)
        }
    }

    const load_data=()=>{
        setLoad(prev=>prev+10);
    }

    useEffect(()=>{
        getData()
    },[])
  
    return (
    <>
        {
            data.slice(0,load).map((item,index)=>{
                return(
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <p>{item.body}</p>
                    </div>
                )
            })
        }
        {
          load<data.length &&  <button onClick={load_data}>Load more...</button>
        }
    </>
  )
}

export default App2