const Details = ({inclusives, exclusives, location}) => {
  return (
    <div>
      <h5 className="details-header center">Details</h5>
      <div className="underline"></div>
      <div className="depature">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow " data-aos="fade-down-left">
            <div className="box-width-lg-470">
              <p>Depature & return</p>
            </div>
          </div>
          <div
            className="col-lg-6 text-center wow "
            data-aos="fade-down-right "
          >
            <ul className="text-start">
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="inclusives">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow " data-aos="fade-down-left">
            <div className="box-width-lg-470">
              <p>Prices inclusives</p>
            </div>
          </div>
          <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
            <ul className="text-start price-list-inclusive">
              {
                inclusives && inclusives.map(({listItem,id})=>{
                  return(
                    <li key={id}>{listItem}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="exclusives">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 wow " data-aos="fade-down-left">
            <div className="box-width-lg-470">
              <p>Prices exclusives</p>
            </div>
          </div>
          <div className="col-lg-6 text-center wow " data-aos="fade-down-right">
            <ul className="text-start price-list-exclusive">
            {
                exclusives  && exclusives.map(({listItem,id})=>{
                  return(
                    <li key={id}>{listItem}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
