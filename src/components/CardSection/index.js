import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cards from '../Cards/index'
import { useResize } from '../../../hooks/useResize'
import './index.scss'

function CardSection({ title = "Perfect Location Matches Perfect Experience", subtitle = "", cardsData, bgColor = "#FFF" }) {
   const [windowWidth] = useResize();

   return (
      <section style={{
         backgroundColor: bgColor,
         display: cardsData && cardsData.length ? 'block' : 'none'
      }} className='home-newsAndBlogs' hidden={false}>
         <div className='container-lg p-mob-0'>
            <div className="d-flex justify-content-center p-mob-15">
               <h2 className={`section-title text-center stripped`}>
                  {title}
               </h2>
            </div>

            <p className={`section-paragraph text-center p-mob-15`}>
               {subtitle}
            </p>

            <Cards windowWidth={windowWidth}
               cardsheading="blogs/"
               cardsData={cardsData}
            />

            <div className="section-button-indent p-mob-15">
               <div className="d-flex justify-content-center">
                  <Link className="btn-theme-common btn-theme-filled--blue sm-wide" to={`/blogs`}>

                     See All News & Blogs
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CardSection