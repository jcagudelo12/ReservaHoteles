export default function Filters(props) {
  moment.locale("es");
  const {
    infoHotel,
    onChangeCountry,
    onChangeFrom,
    onChangeTo,
    onChangePrice,
    onChangeSize,
  } = props;

  const hoteles = infoHotel
    .map((item) => item.country)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const price = infoHotel
    .map((item) => item.price)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort();

  const size = infoHotel
    .map((item) => sizeIcon(item.rooms))
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort()
    .reverse();

  function priceIcon(valor) {
    let prices = "";
    for (let index = 0; index < valor; index++) {
      prices += "$";
    }
    return prices;
  }

  function sizeIcon(valor) {
    if (valor <= 10) {
      return "Hotel pequeño";
    } else if (valor > 10 && valor <= 20) {
      return "Hotel mediano";
    } else {
      return "Hotel grande";
    }
  }

  return (
    <div id="filters" className="row p-3 m-0">
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-sign-in-alt"></i>
          </span>
          <input
            className="form-control"
            type="date"
            id="dateTo"
            onChange={onChangeFrom}
            min={moment().format("YYYY-MM-DD")}
          />
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-sign-out-alt"></i>
          </span>
          <input
            className="form-control"
            type="date"
            id="dateFrom"
            onChange={onChangeTo}
            min={moment().format("YYYY-MM-DD")}
          />
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-globe"></i>
          </span>
          <select
            className="form-control"
            id="country"
            onChange={onChangeCountry}
          >
            <option value="0">Todos los países</option>
            {hoteles.map((item, index) => (
              <option
                key={`${index}-${item.slice(0, 3).toLowerCase()}`}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <select className="form-control" id="price" onChange={onChangePrice}>
            <option value="0">Cualquier precio</option>
            {price.map((item) => (
              <option value={item}>{priceIcon(item)}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-bed"></i>
          </span>
          <select className="form-control" id="rooms" onChange={onChangeSize}>
            <option value="0">Cualquier tamaño</option>
            {size.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
