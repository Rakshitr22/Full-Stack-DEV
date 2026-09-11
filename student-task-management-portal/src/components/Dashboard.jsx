import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from  "./AddTask";


function Dashboard(props) {
    
    function toggleTask(id){
        setTasks(
            props.tasks.map((task) => {
                if(task.id===id){
                    return{...task,
                        status: task.status === "Completed" 
                                        ? "Pending"
                                        :"Completed"
                    };
                }
                return task;
            })
        );
    }
    function addtask(newTask){
    props.setTasks([...tasks,newTask]);
        console.log("newtask:",newTask);

    }
    function DeleteTask(id){
         props.setTasks(
            props.tasks.filter(task => task.id !== id)
        );
        return tasks;
    }
    return  (
      <main>
            <div className="stats-container">
                <StatCard title="Total Tasks" value="10"/>
                <StatCard title="Completed" value="6"/>
                <StatCard title="Pending" value="4"/>
                
            </div>
<AddTask onaddTask={addtask} />
            <h2>Recent Tasks</h2>

            <div className="tasks-container">
                {props.tasks.map((task)=>(
                    <TaskCard key={task.id} id ={task.title} title={task.title} description={task.description} status={task.status} 
                    onToggle={()=>toggleTask(task.id)}
                    onDelete={()=>DeleteTask(task.id)} />
                ))};
            </div>

        </main>
    );
}

export default Dashboard;