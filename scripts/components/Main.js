export default function Main(props) {
  const price = hotelsData
    .map((item) => item.price)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort();

  const {
    filteredByCountry,
    filteredByPrice,
    filteredBySize,
    filteredByFrom,
    filteredByTo,
  } = props;

  const countrySelection =
    filteredByCountry == ""
      ? hotelsData
      : hotelsData.filter((item) => {
          return item.country == filteredByCountry;
        });

  const PriceSelection =
    filteredByPrice == ""
      ? countrySelection
      : countrySelection.filter((item) => {
          return item.price == Number(filteredByPrice);
        });

  const SizeSelection =
    filteredBySize == ""
      ? PriceSelection
      : PriceSelection.filter((item) => {
          if (filteredBySize == "Hotel pequeño") {
            return item.rooms <= 10;
          } else if (filteredBySize == "Hotel mediano") {
            return item.rooms > 10 && item.rooms <= 20;
          } else if (filteredBySize == "Hotel grande") {
            return item.rooms > 20;
          } else {
            return item.rooms;
          }
        });

  let fechaInputFrom = moment(filteredByFrom).startOf("day").add(1, "days");
  const fromSelection =
    filteredByFrom == ""
      ? SizeSelection
      : SizeSelection.filter((item) => {
          let dateHotel = moment(item.availabilityFrom).valueOf();
          let fechaInput = moment(fechaInputFrom).valueOf();
          let diferenciaHoraria = moment(dateHotel).diff(
            moment(fechaInput),
            "days"
          );
          if (diferenciaHoraria <= 0) {
            return item.availabilityFrom;
          }
        });

  let fechaInputTo = moment(filteredByTo).startOf("day").add(1, "days");
  const finalArray =
    filteredByTo == ""
      ? fromSelection
      : fromSelection.filter((item) => {
          let dateHotel = moment(item.availabilityTo).valueOf();
          let fechaInput = moment(fechaInputTo).valueOf();
          let diferenciaHoraria = moment(dateHotel).diff(
            moment(fechaInput),
            "days"
          );
          if (
            diferenciaHoraria >= 0 &&
            moment(filteredByFrom) < moment(filteredByTo)
          ) {
            return item.availabilityTo;
          }
        });

  return (
    <main className="container-fluid row m-0 text-center">
      {finalArray.length > 0 ? (
        finalArray.map((item) => (
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
                      id="lblCity"
                    >
                      {item.city}, {item.country}
                    </label>
                  </div>
                </div>
                <div className="form-group col-12">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fas fa-bed"></i>
                    </span>
                    <label
                      className="form-control text-truncate"
                      type="text"
                      id="lblSize"
                    >
                      {item.rooms} habitaciones
                    </label>
                  </div>
                </div>
                <div className="col-md-8 offset-md-2">
                  <div className="form-control price" id="priceContainer">
                    {price.map((i, index) => {
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
        ))
      ) : (
        <div className="col-md-6 mt-3">
          <h3 className="">
            Oops! No se encontraron hoteles con los filtros ingresados, intenta
            cambiando los filtros de búsqueda.
          </h3>
        </div>
      )}
    </main>
  );
}
