export default function Card(props) {
  const price = [1, 2, 3, 4];

  return (
    <main className="container-fluid row mt-3 m-0 text-center">
      {props.infoHotel.map((item) => (
        <div className="col-md-3 col-sm-12 mt-5">
          <div className="card">
            <img src={item.photo} className="card-img-top" alt={item.slug} />
            <div className="card-body row">
              <h5 className="card-title text-truncate">{item.name}</h5>
              <p className="card-text text-justify itemDescription">
                {item.description}
              </p>

              <div className="form-group col-12 mt-3">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <label
                    className="form-control text-truncate"
                    type="text"
                    id="1"
                  >
                    {item.city}, {item.country}
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fas fa-bed"></i>
                  </span>
                  <label className="form-control" type="text" id="2">
                    {item.rooms}
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-control price">
                  {price.map((i) => {
                    return i <= item.price ? (
                      <i className="fas fa-dollar-sign dollar p-1"></i>
                    ) : (
                      <i className="fas fa-dollar-sign fa-disabled dollar p-1"></i>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 p-0">
              <a
                href="#"
                className="btn btn-success btn-lg d-block mt-2 font-weight-bold"
              >
                Reservar
              </a>
            </div>
          </div>
        </div>
      ))}
      ;
    </main>
  );
}
