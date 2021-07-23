import "./App.css";
import NavbarComponent from "./components/navbar";
import BodyComponent from "./components/bodyComponent";
import ModalComponent from "./components/modalComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BodyComponent />
      <ModalComponent />
    </div>
  );
}

export default App;
