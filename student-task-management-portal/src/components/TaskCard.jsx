function TaskCard({title,value,status}) {
    return (
        <div className="task-card">
            <h3>{title}</h3>

            <p>{value}</p>

            <p>{status}</p>
        </div>
    );
}

export default TaskCard;