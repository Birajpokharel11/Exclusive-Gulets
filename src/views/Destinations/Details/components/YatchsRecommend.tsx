import React from 'react';
import Link from 'next/link';

import DiscoverMore from '@components/DiscoverMore';

const Recommedation = ({ yachts, next_page }) => {
  return (
    <section
      className="section fix other-gems singl_bloggemg wow slideInUp"
      data-wow-duration="1s"
    >
      <div className="container">
        <div className="other-gems-cont-left">
          <div className="heading-destinations">
            <h1>EXCLUSIVE GULETS</h1>
            <p>A Selection of Yachts</p>
          </div>
        </div>
        <div className="row">
          {yachts.map((yacht, index) => (
            <div key={yacht.slug} className="col-lg-6 col-md-6 col-sm-12">
              <Link href={`/yachts/${yacht.slug}`}>
                <div className="gems">
                  <div className="gems-img">
                    <img
                      src={
                        yacht && yacht.main_image.slider.url
                          ? yacht.main_image.slider.url
                          : ''
                      }
                      className="img-responsive"
                      alt="subblog"
                    />
                  </div>
                  <div className="gems-content">
                    <p className="title">{yacht && yacht.name}</p>
                    <div className="location">
                      <div className="icon"></div>
                      <p>
                        {yacht &&
                          yacht.sailing_countries &&
                          yacht.sailing_countries.map((e) => e.name).join(', ')}
                      </p>
                    </div>
                    <p className="txt">
                      {yacht &&
                        yacht.about &&
                        yacht.about.substr(0, 200) + '...'}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {!!next_page && <DiscoverMore />}
        </div>
      </div>
      <div className="background-vector other-grms-vector">
        <img src="" className="img-responsive" alt="Blog vector4" />
      </div>
    </section>
  );
};

export default Recommedation;
