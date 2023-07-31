import { React } from 'react';
import '../CSS FILES/Cat.css';
import Category from '../JS FILES/Category';
import img1 from '../IMAGES/Hoodie.png';
import img2 from '../IMAGES/Long.png';
import img3 from '../IMAGES/Tee.png';
import img4 from '../IMAGES/Over.png';
import women_hoodie from '../IMAGES/women_hoodie.jpg';
import women_os from '../IMAGES/women_os.jpg';
import women_ls from '../IMAGES/women_ls.jpg';
import women_re from '../IMAGES/women_reg.jpg';
import { useNavigate } from 'react-router-dom';

export default function Cat(props) {
  // Fetch the gender via url(from gender page to here)
  const { gender } = props;

  return (
    <>
      <div className="header">
        <h4 className="title">CATEGORIES</h4>

        {gender === 'Mens' && (
          <>
            <div className="image1 ">
              <Category
                imgsrc={img1}
                category="HOODIES"
                type="Hoodies"
                gender={gender}
              />
              <Category
                imgsrc={img2}
                category="LONG SLEEVES"
                type="Long_Sleeves"
                gender={gender}
              />
            </div>
            <div className="image2">
              <Category
                imgsrc={img3}
                category="REGULAR TEES"
                type="Regular"
                gender={gender}
              />
              <Category
                imgsrc={img4}
                category="OVER SIZED T-SHIRT"
                type="Oversized"
                gender={gender}
              />
            </div>
          </>
        )}

        {gender === 'Womens' && (
          <>
            <div className="image1 ">
              <Category
                imgsrc={women_hoodie}
                category="HOODIES"
                type="Hoodies"
                gender={gender}
              />
              <Category
                imgsrc={women_ls}
                category="LONG SLEEVES"
                type="Long_Sleeves"
                gender={gender}
              />
            </div>
            <div className="image2">
              <Category
                imgsrc={women_re}
                category="REGULAR TEES"
                type="Regular"
                gender={gender}
              />
              <Category
                imgsrc={women_os}
                category="OVER SIZED T-SHIRT"
                type="Oversized"
                gender={gender}
              />
            </div>
          </>
        )}

        {(!gender || (gender !== 'Mens' && gender !== 'Womens')) && (
          <>
            <div className="image1 ">
              <Category
                imgsrc={img1}
                category="HOODIES"
                type="Hoodies"
              />
              <Category
                imgsrc={img2}
                category="LONG SLEEVES"
                type="Long_Sleeves"
              />
            </div>
            <div className="image2">
              <Category
                imgsrc={img3}
                category="REGULAR TEES"
                type="Regular"
              />
              <Category
                imgsrc={img4}
                category="OVER SIZED T-SHIRT"
                type="Oversized"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
