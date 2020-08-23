export default function Filters(props) {
  const hoteles = props.infoHotel
    .map((item) => item.country)
    .filter((item, index, arr) => arr.indexOf(item) === index);
  return (
    <div id="filters" className="row p-3 m-0">
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-sign-in-alt"></i>
          </span>
          <input className="form-control" type="date" id="" />
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-sign-out-alt"></i>
          </span>
          <input className="form-control" type="date" id="" />
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-globe"></i>
          </span>
          <select className="form-control" name="provincia" id="country">
            <option>Todos los países</option>
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
          <select className="form-control" id="price">
            <option value="">Cualquier precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
      </div>
      <div className="form-group mt-1 mb-0">
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fas fa-bed"></i>
          </span>
          <select className="form-control" id="size">
            <option value="">Cualquier tamaño</option>
            <option value="small">Hotel pequeño</option>
            <option value="medium">Hotel mediano</option>
            <option value="large">Hotel grande</option>
          </select>
        </div>
      </div>
    </div>
  );
}
