//import hotelsData from "../data";

export default function Header(props) {
  //moment.locale("es");
  // const { checkIn, checkOut } = props;
  // const getHeaderDay = (code) => {
  //   const days = [
  //     "Domingo",
  //     "Lunes",
  //     "Martes",
  //     "Miércoles",
  //     "Jueves",
  //     "Viernes",
  //     "Sábado",
  //   ];
  //   return days[code];
  // };

  // const getHeaderMonth = (code) => {
  //   const months = [
  //     "Enero",
  //     "Febrero",
  //     "Marzo",
  //     "Abril",
  //     "Mayo",
  //     "Junio",
  //     "Julio",
  //     "Agosto",
  //     "Septiembre",
  //     "Octubre",
  //     "Noviembre",
  //     "Diciembre",
  //   ];
  //   return months[code];
  // };

  // const dateCheckIn = new Date(
  //   checkIn.year,
  //   checkIn.month,
  //   checkIn.date,
  //   0,
  //   0,
  //   0
  // );
  // const dateCheckOut = new Date(
  //   checkOut.year,
  //   checkOut.month,
  //   checkOut.date,
  //   0,
  //   0,
  //   0
  // );

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
const HeaderDate = ({ day, date, month, year }) => (
  <span>
    {day}, {date} de {month} de {year}
  </span>
);
