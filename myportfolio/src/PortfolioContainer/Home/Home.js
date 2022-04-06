import React from 'react'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Navbar  from './Navbar/Navbar';
import "./Home.css"

const Home = () => {
    return (
      <>
        <div className="home-container" id ="home">
          <Navbar/>
          <Profile/>
          <Footer/>
            
        </div>
      </>
      
    )
}

export default Home
