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
    <div>
      <div>
          <div>
             {
              cardInfos.map(cardInfo=> <CardInfo 
              cardInfo={cardInfo}
              >  
              </CardInfo>)
             }
        </div>
      <div>
        <h1>Spent time on read</h1>
      </div>
    </div>
  </div>
  );
}

function CardInfo (props){
  const {img, Publish_Date, read_time, blog_title, authorname }= props.cardInfo;
  return (
      <div className='card-detail'>
        <div className="card-info">
            <img className="card-info-img" src={img} alt="" />
             <div className="card-subinfo">
                 <img className="card-subinfo-img" src={logo} alt="" /> 
                   <div className="card-subinfo-title-body">
                        <h6 className="card-subinfo-titile1">{authorname}</h6>
                        <h5 className="card-subinfo-titile2">{Publish_Date}</h5> 
                    </div>
             </div>
             <p className="blog-title">{blog_title} stars</p>
        </div>
      </div>
  );
};
export default App;
