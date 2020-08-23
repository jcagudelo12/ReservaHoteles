class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="col-12 p-0">
        <div className="col-12 p-3">
          <h1 className="text-center text-white">Reserva de Hoteles</h1>
          <p className="text-center text-white">
            Desde el&nbsp;
            {/* {moment(props.startDateLong).format("dddd")},
          <b> {moment(props.startDateLong).format("LL")} </b>
          hasta el&nbsp; {props.endDayOfWeek},<b>{props.endDateLong}</b> */}
            {/* {checkIn.active ? (
            <React.Fragment>
              {"Desde el "}
              <HeaderDate
                day={getHeaderDay(checkIn.day)}
                date={checkIn.date}
                month={getHeaderMonth(checkIn.month)}
                year={checkIn.year}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              {checkOut.active ? "" : "Elige tu próximo destino"}
            </React.Fragment>
          )}
          {checkOut.active && dateCheckOut >= dateCheckIn ? (
            <React.Fragment>
              {checkIn.active ? " hasta el " : "Hasta el "}
              <HeaderDate
                day={getHeaderDay(checkOut.day)}
                date={checkOut.date}
                month={getHeaderMonth(checkOut.month)}
                year={checkOut.year}
              />
            </React.Fragment>
          ) : (
            ""
          )} */}
          </p>
        </div>
      </header>
    );
  }
}
export default Header;
