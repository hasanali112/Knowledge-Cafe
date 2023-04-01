import './App.css';
import logo from '../src/Images/logo.jpg'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}
//nav component
function Navbar(){
  return(
    <nav className='navbar'>
       <h1 className='nav-tittle'>Knowledge Cafe</h1>
       <div className='nav-info'>
          <a href="/home">Home</a>
          <a href="/blog">Blog</a>
          <a href="/login">Login</a>
          <img src={logo} alt="" />
        </div>
    </nav>
  )
}

export default App;
