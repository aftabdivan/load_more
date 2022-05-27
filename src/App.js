import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


const App = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(10);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, [])

  const loadData = () => {
    setLoad((prev) => prev + 20)
  }

  return (
    <>
      <div className="data_div">
        {data.slice(0, load).map((item, index) => {
          {/* console.log(data.length) */}
          console.log(load)

          return (
            <div className="inner" key={index}>
              <h1>{item.id}</h1>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          )
        })
        }
       
       
         {
             load < data.length && <button onClick={loadData}>Load more...</button>
           }
      </div>
    </>
  );
};

export default App;
