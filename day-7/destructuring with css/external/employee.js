import './App.css'

function Employee(props){
    return(
        <div className="employee">
        <h2>Name: {props.name}<br></br>Role: {props.roll}<br></br>Salary:INR {props.salary}</h2>
        </div>
    );
}

export default Employee;