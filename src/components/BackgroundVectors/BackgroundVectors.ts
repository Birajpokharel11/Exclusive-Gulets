import React from 'react';

import vector4 from '../../assets/images/icons/vector4.png';
import vector2 from '../../assets/images/Blog/blog-vector2.svg';
import vector3 from '../../assets/images/Blog_single/vector3.svg';
import vectorblog1 from '../../assets/images/Blog_single/wheel-vector.svg';

export const BackgroundVectors = () => {
  return (
   <>
     <div className="background-vector offer-news-vector" id="destination_vctr2">
       <img src={vector2} className="img-responsive" alt="Background vector art" />
     </div>
     <div className="background-vector offer-news-vector" id="destination_vctr3">
       <img src={vector3} className="img-responsive" alt="Background vector art" />
     </div>
     <div className="background-vector offer-news-vector" id="destination_vctr1">
       <img src={vector2} className="img-responsive" alt="Background vector art" />
     </div>
     <div className="background-vector background-vector-wheel">
       <img src={vectorblog1} className="img-responsive" alt="vector blog1" />
     </div>

     <div className="background-vector background-vector4">
       <img src={vector4} className="img-responsive" alt="vector blog1" />
     </div>
     <div className="background-vector background-vector-wheel2">
       <img src={vectorblog1} className="img-responsive" alt="vector blog1" />
     </div>
   </>
  );
};

export default BackgroundVectors;
