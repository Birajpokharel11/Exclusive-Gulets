import { Button } from '@material-ui/core';
import React from 'react';

const Recommedation = () => {
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
          {yachts.map((yacht) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={yacht.slug}>
              <Link to={`/yachts/${yacht.slug}`}>
                <div className="gems">
                  <div className="gems-img">
                    <img
                      src={
                        yacht && yacht.main_image.slider.url
                          ? yacht.main_image.slider.url
                          : subblog1
                      }
                      className="img-responsive"
                      alt="subblog"
                    />
                  </div>
                  <div className="gems-content">
                    <p className="title">{yacht && yacht.name}</p>
                    <div className="location">
                      <div className="icon">
                        <InlineSvg
                          svg={locationPin}
                          fill="#f7b654"
                          className="location-pin"
                        />
                      </div>
                      <p>
                        {yacht &&
                          yacht.sailing_countries &&
                          yacht.sailing_countries.map((e) => e.name).join(', ')}
                      </p>
                    </div>
                    <p className="txt">
                      {yacht &&
                        yacht.about &&
                        parse(yacht.about.substr(0, 200) + '...')}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {!!next_page && (
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="load-moregems">
                <div className="gems-content" style={{ textAlign: 'center' }}>
                  <p className="title">
                    Load more
                    <br />
                    luxury Gulets
                  </p>
                  <p className="txt">Go on... be curious</p>
                  <Button title="More" onClick={this.handlePagination} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="background-vector other-grms-vector">
        <img src={vtr1} className="img-responsive" alt="Blog vector4" />
      </div>
    </section>
  );
};

export default Recommedation;
