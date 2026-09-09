import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashboard() {
    const tasks=[{title:"DSA",value:"all concepts",status:"DONE"},
        {title:"Java",value:"all concepts",status:"DONE"},{title:"DATABASE",value:"all concepts",status:"DONE"}];
    return (
        <main>

            <div className="stats-container">
                <StatCard title={"Total Tasks"}
                value ={"10"}/>
                <StatCard title={"Completed"}
                value={"6"} />
                <StatCard title={"Pending"}
                value={"4"} />
                <StatCard title={"Time Taken"}
                value={"1hr"}/>
            </div>

            <h2>Recent Tasks</h2>

            <div className="tasks-container">
                <TaskCard title={"DSA"}
                value={"all concepts"}
                status={"DONE"}/>
                <TaskCard title={"JAVA"}
                value={"all concepts"}
                status={"DONE"}/>
                <TaskCard title={"DATABASE"}
                value={"all concepts"}
                status={"PENDING"} />
            </div>

        </main>
    );
}

export default Dashboard;