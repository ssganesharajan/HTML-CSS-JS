function Employee(props){
    return(
        <div style={{gap:"20px",backgroundColor:"skyblue",textAlign:"center",padding:"10px",width:"300px",margin:"10px",borderRadius:"30px",border:"red 3px solid"}}>
        <h3>Name: {props.name}</h3>
        <h3>Role: {props.roll}</h3>
        <h3>Salary:INR {props.salary}</h3>
        </div>
    );
}

export default Employee;