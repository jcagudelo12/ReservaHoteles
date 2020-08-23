import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "../scripts/components/Footer";
//import Main from "./components/Main";
import Card from "./components/Card";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     start: {
  //       active: false,
  //       day: 0,
  //       date: 0,
  //       month: 0,
  //       year: 0,
  //       value: "",
  //     },
  //     end: {
  //       active: false,
  //       day: 0,
  //       date: 0,
  //       month: 0,
  //       year: 0,
  //       value: "",
  //     },
  //     country: "",
  //     price: 0,
  //     size: "",
  //   };
  //   this.handleDateChange = this.handleDateChange.bind(this);
  //   this.handleCountryChange = this.handleCountryChange.bind(this);
  //   this.handlePriceChange = this.handlePriceChange.bind(this);
  //   this.handleSizeChange = this.handleSizeChange.bind(this);
  // }

  // handleDateChange(e) {
  //   // IF the value of an input change and is not null
  //   if (e.target.value) {
  //     const date = e.target.valueAsDate;
  //     this.setState({
  //       [e.target.name]: {
  //         active: true,
  //         day: date.getUTCDay(),
  //         date: date.getUTCDate(),
  //         month: date.getUTCMonth(),
  //         year: date.getUTCFullYear(),
  //         value: e.target.value,
  //       },
  //     });
  //   } else {
  //     this.setState({
  //       [e.target.name]: {
  //         active: false,
  //         day: 0,
  //         date: 0,
  //         month: 0,
  //         year: 0,
  //         value: "",
  //       },
  //     });
  //   }
  // }

  // handleCountryChange(e) {
  //   this.setState({ country: e.target.value });
  // }

  // handlePriceChange(e) {
  //   this.setState({ price: Number(e.target.value) });
  // }

  // handleSizeChange(e) {
  //   this.setState({ size: e.target.value });
  // }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Filters
          // onDateChange={this.handleDateChange}
          // onCountryChange={this.handleCountryChange}
          // onPriceChange={this.handlePriceChange}
          // onSizeChange={this.handleSizeChange}
          // activeCheckIn={this.state.start.active}
          // limitCheckOut={this.state.start.value}
          infoHotel={hotelsData}
        />
        {/* <Main
          checkIn={this.state.start}
          checkOut={this.state.end}
          country={this.state.country}
          price={this.state.price}
          size={this.state.size}
        /> */}
        <Card infoHotel={hotelsData} />
        <Footer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
