import React from 'react';

const Recommendation = () => {
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
            ?.map((destination) => (
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link
                  to={`/destinations/${destination.slug}`}
                  key={destination.slug}
                >
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
          {!!next_page && (
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="load-moregems">
                <div className="gems-content" style={{ textAlign: 'center' }}>
                  <p className="title">
                    Discover more
                    <br />
                    Destinations
                  </p>
                  <p className="txt">Go on... be curious</p>
                  <Button title="More" onClick={this.handlePagination} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
