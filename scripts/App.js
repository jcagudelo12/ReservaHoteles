import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "../scripts/components/Footer";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Filters infoHotel={hotelsData} />
        <Card infoHotel={hotelsData} />
        <Footer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
