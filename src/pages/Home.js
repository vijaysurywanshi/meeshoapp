import React from 'react';
import './Home.css';
import baner from '../Assets/baner.png';
import MeeshoAd from '../components/MeeeshoAd';
import Main from '../components/MainSection';

function Home() {
  return (
    <div className="container">
      {/* <img className="banner-image" src={baner} alt="Banner"  /> */}
      <div>
      <MeeshoAd />
      </div>
        <div>
          

      <Main />
        </div>
    </div>
  );
}

export default Home;
