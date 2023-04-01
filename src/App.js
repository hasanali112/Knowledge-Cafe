import "./App.css";
import logo from "../src/Images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
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
  const [watchTime, setWatchTime]=useState(0)
  const handleReadtime=(time)=>{
    const newTime= watchTime + time;
    setWatchTime(newTime);
  }

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCardInfos(data))
  },[])

  return (
    <div>
      <div className="knowledge-container">
          <div>
             {
              cardInfos.map(cardInfo=> <CardDetailInfo
              cardInfo={cardInfo}
              handleReadtime={handleReadtime}
              key={cardInfo.id}
              >  
              </CardDetailInfo>)
             }
        </div>
      <div>
        <h1 className="watch-container">Spent time on read: {watchTime}</h1>
        <h2>Bookmarked Blogs :</h2>
      </div>
    </div>
  </div>
  );
}

function CardDetailInfo ({cardInfo, handleReadtime}){
  return (
      <div className='card-detail'>
        <div className="card-info">
            <img className="card-info-img" src={cardInfo.img} alt="" />
             <div className="card-subinfo">
                 <img className="card-subinfo-img" src={logo} alt="" /> 
                   <div className="card-subinfo-title-body">
                        <h6 className="card-subinfo-titile1">{cardInfo.authorname}</h6>
                        <h5 className="card-subinfo-titile2">{cardInfo.Publish_Date}</h5> 
                    </div>
                  <h1  className="read-time">{cardInfo.read_time} min read <FontAwesomeIcon icon={faBookmark} /></h1>
             </div>
             <p className="blog-title">{cardInfo.blog_title}</p>
             <a onClick={()=>handleReadtime(cardInfo.read_time)} className="mark-as-read" href="/#">Mark as read</a>
        </div>
      </div>
  );
};
export default App;
