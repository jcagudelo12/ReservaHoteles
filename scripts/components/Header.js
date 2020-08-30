export default function Header(props) {
  moment.locale("es");
  const { filteredByFrom, filteredByTo } = props;
  if (filteredByFrom == "" && filteredByTo == "") {
    return (
      <header className="col-12 p-0">
        <div className="col-12 p-3">
          <h1 className="text-center text-white">Reserva de Hoteles</h1>
          <p className="text-center text-white">
            Establezca una fecha de entrada y salida
          </p>
        </div>
      </header>
    );
  } else {
    return (
      <header className="col-12 p-0">
        <div className="col-12 p-3">
          <h1 className="text-center text-white">Reserva de Hoteles</h1>
          <p className="text-center text-white">
            {filteredByFrom !== "" ? (
              <React.Fragment>
                Desde el&nbsp; {moment(filteredByFrom).format("dddd")},
                <b>&nbsp;{moment(filteredByFrom).format("LL")}&nbsp;</b>
              </React.Fragment>
            ) : (
              "-- Establezca fecha de ingreso --"
            )}

            {filteredByTo !== "" ? (
              <React.Fragment>
                &nbsp;hasta el&nbsp; {moment(filteredByTo).format("dddd")},
                <b>&nbsp;{moment(filteredByTo).format("LL")}&nbsp;</b>
              </React.Fragment>
            ) : (
              "-- establezca fecha de salida --"
            )}
          </p>
        </div>
      </header>
    );
  }
}
