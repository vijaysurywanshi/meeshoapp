import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ReplayIcon from '@mui/icons-material/Replay';
import './MeeshoAd.css';
import meshoad from '../Assets/meshoad.png';
import playstore from '../Assets/playstore.png';


const MeeshoAd = () => {
  return (
    <div className="meesho-ad">
      <div className="meesho-text">
        <h1>Lowest Prices <br /> Best Quality Shopping</h1>
        <div className="meesho-icons">
          <div className="icon">
            <LocalShippingIcon fontSize="large" />
            <span>Free Delivery</span>
          </div>
          <div className="icon">
            <PaymentIcon fontSize="large" />
            <span>Cash on Delivery</span>
          </div>
          <div className="icon">
            <ReplayIcon fontSize="large" />
            <span>Easy Returns</span>
          </div>
        </div>
        <Button 
          variant="contained"
          color="secondary"
          className="meesho-button"
        >
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN&pli=1" > <img className="playstore" src={playstore} alt="icon" />
          Download the Meesho App
            </a>
        </Button>
      </div>
      <div className="meesho-images">
        <img src={meshoad} alt="Meesho Makeover" />
      </div>
    </div>
  );
};

export default MeeshoAd;
