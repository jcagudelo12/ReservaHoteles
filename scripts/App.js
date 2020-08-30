import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "../scripts/components/Footer";
import Card from "./components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      price: "",
      size: "",
      dateFrom: "",
      dateTo: "",
    };
    // this.handleHeaderChangeFrom = this.handleHeaderChangeFrom.bind(this);
    // this.handleHeaderChangeTo = this.handleHeaderChangeTo.bind(this);
    // this.handleChangeCountry = this.handleChangeCountry.bind(this);
  }
  handleChangeCountry(e) {
    this.setState({ country: e.target.value });
  }
  handleHeaderChangeFrom(e) {
    let fecha = e.target.value;
    this.setState({
      dateFrom: fecha.valueOf(),
    });
  }

  handleHeaderChangeTo(e) {
    let fecha = e.target.value;
    this.setState({
      dateTo: fecha.valueOf(),
    });
  }

  handleChangePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleChangeSize(e) {
    this.setState({ size: e.target.value });
  }

  render() {
    const { country, price, size, dateFrom, dateTo } = this.state;
    return (
      <React.Fragment>
        <Header filteredByFrom={dateFrom} filteredByTo={dateTo} />
        <Filters
          infoHotel={hotelsData}
          onChangeCountry={this.handleChangeCountry}
          onChangeFrom={this.handleHeaderChangeFrom}
          onChangeTo={this.handleHeaderChangeTo}
          onChangePrice={this.handleChangePrice}
          onChangeSize={this.handleChangeSize}
        />
        <Card
          infoHotel={hotelsData}
          // filteredByCountry={country}
          // filteredByDolar={price}
          // filteredByBed={size}
          // filteredByFrom={dateFrom}
          // filteredByTo={dateTo}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
