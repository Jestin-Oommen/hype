import {React} from "react";
import "../CSS FILES/Gender_store.css";
import menmodel from '../IMAGES/men-model.jpg';
import womenmodel from '../IMAGES/women-model.jpg';
// Navigation import
import { useNavigate } from 'react-router-dom';


export default function GenderStore() {

  // For Navigation
  const navigate = useNavigate();

  const showMenProducts = () => {
    navigate('/Mens', );
  }

  const showWomenProducts = () => {
    navigate('/Womens');
  }

  return (
    <>
      <div className="gender_shop">
        <div className="mens">
          <div className="img">
            <img src={menmodel} alt="mensimage" />
          </div>
          <div>
            <button className="btn-gender" onClick={showMenProducts}>SHOP MENS</button>
          </div>
        </div>
        <div className="womens">
          <div className="img">
            <img src={womenmodel} alt="womensimage"/>
          </div>
          <div>
            <button className="btn-gender" onClick={showWomenProducts}>SHOP WOMENS</button>
          </div>
        </div>
      </div>
    </>
  );
}
