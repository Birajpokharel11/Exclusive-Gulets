import React from 'react';

const Content = () => {
  return (
    <section
      id="destinationpage-content"
      className="section fix destinationpage-content"
    >
      <div className="container">
        <div className="row mtp">
          <div className="col-lg-12 col-md-12 padding-lr">
            <p className="main-sec_destionp">
              {featured_destination.content &&
                parse(featured_destination.content)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
