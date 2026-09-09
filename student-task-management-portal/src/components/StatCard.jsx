function StatCard({title,name,value}) {
    return (
        <div className="stat-card">
            <h3>{title}</h3>
             <h3>{name}</h3>
            <h2>{value}</h2>
        </div>
    );
}

export default StatCard;