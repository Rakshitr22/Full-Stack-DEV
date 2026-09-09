import "./App.css";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
function App(){
  return (
    <div>
       <Welcome/>
      <Navbar/>
      <Dashboard/>
    </div>
  );
}
export default App;