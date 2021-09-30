import React from 'react';
import Link from 'next/link';

import DiscoverMore from '@components/DiscoverMore';

const Recommendation = ({ destinations, next_page }) => {
  return (
    <section
      className="section fix other-gems destina_gems"
      data-wow-duration="1s"
    >
      <div className="container">
        <div className="other-gems-cont-left">
          <div className="heading-destinations">
            <h1>DESTINATIONS</h1>
            <p>Discover secret locations around the world</p>
          </div>
        </div>
        <div className="row">
          {destinations
            .filter((d) => d.title.toLowerCase() !== 'destinations')
            ?.map((destination, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                <Link href={`/destinations/${destination.slug}`}>
                  <div className="gems">
                    <div className="gems-img">
                      <img
                        src={destination.featured_image.url}
                        srcSet={`${destination.featured_image.url} 300w, ${destination.featured_image.url} 768w, ${destination.featured_image.url} 1280w`}
                        className="img-responsive"
                        alt="caribbean"
                      />
                    </div>
                    <div
                      className="gems-content"
                      style={{ textAlign: 'center' }}
                    >
                      <p className="title">{destination.title}</p>
                      <p className="txt">{destination.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {!!next_page && <DiscoverMore />}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
