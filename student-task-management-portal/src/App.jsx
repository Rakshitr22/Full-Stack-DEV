import "./App.css";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import{Routes,Route} from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
function App(){
  const [tasks, setTasks] = useState([
          {
              id:1,
              title:"Learn React",
              description:"Understanding Components",
              status: "Completed"
          },
          {
              id:2,
              title:"Learn JavaScript",
              description:"Understanding Variables, Functions",
              status: "Pending"
          },
          {  id:3,
              title:"Learn MongoDB",
              description:"Understanding Databases",
              status: "Pending"
          }])
          
  return (
    <div>
      <Navbar />
      <Routes>0
        <Route path="/" element={<Dashboard tasks={tasks} />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="/tasks/:id" 
        element={<TaskDetails />} />
      </Routes>

    </div>
  );
}

export default App;