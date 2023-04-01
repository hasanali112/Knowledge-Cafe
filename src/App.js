import "./App.css";
import logo from "../src/Images/logo.jpg";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LoadCardData></LoadCardData>
    </div>
  );
}
//nav component
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-tittle">Knowledge Cafe</h1>
      <div className="nav-info">
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
        <a href="/login">Login</a>
        <img src={logo} alt="" />
      </div>
    </nav>
  );
}

//card component
function LoadCardData() {
  const [cardInfos, setCardInfos]= useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCardInfos(data))
  },[])

  return (
    <div className="card-detail">
      <div className="card-component">
          <div className="card-info">
             {
              cardInfos.map(cardInfo=> console.log(cardInfo))
             }
        </div>
      <div>
        <h1>Spent time on read</h1>
      </div>
    </div>
  </div>
  );
}


export default App;
