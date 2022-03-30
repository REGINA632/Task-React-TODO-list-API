import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routs from "./Routs";
import TodoContextProveider from "./Context/TodoContextProveider";

function App() {
  return (
    <div className="App">
      <TodoContextProveider>
        <Routs />
      </TodoContextProveider>
    </div>
  );
}

export default App;
