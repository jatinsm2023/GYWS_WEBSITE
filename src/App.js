import './App.css';
import Home from './Components/Homepage/Home';
import { BrowserRouter } from 'react-router-dom';

// import MemberNav from './Components/Members Page/MemberNavbar/MemberNav.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    {/* <MemberNav/> */}
    </>
  );
}

export default App;