import "./App.css";
import Contador from "./components/Contador";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";
import TasksList from "./components/TasksList";
function App() {
  return (
    <div className="App">
      <CrudApi/>
      <br />
      <br />
      <br />
      <br />
      <hr/>
      <TasksList/>
      <br />
      <br />
      <br />
      <br />
      <hr/>
      <ShoppingCart />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <hr/>
      <Contador />
      <br />
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
}

export default App;
