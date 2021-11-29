import './App.css';
import {useEffect, useState} from "react";
import PostData from './PostData/index';


function App() {
  const [posts, setData]= useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(json => setData(json));
  });

  return (
    <div >
      <PostData posts={posts}/>
    </div>
  );
}

export default App;
