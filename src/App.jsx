import "./App.css";
import { Grafico } from "./components/Chart/Chart";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Tittle from "./components/Tittle/Tittle";

function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      <Tittle />
      <section className="dados">
        <Table />
        <Grafico />
      </section>
    </div>
  );
}

export default App;
