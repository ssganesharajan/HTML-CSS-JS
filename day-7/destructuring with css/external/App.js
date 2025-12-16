import Employee from "./employee";

function App1(){
  return(
    <div> 
      <Employee name="GANESHARAJAN" roll="SCIENTIST" salary={50000} />
      <Employee name="GANESHARAJAN" roll="OS DEVELOPER" salary={500000} />
      <Employee name="GANESHARAJAN" roll="ETHICAL HACKER" salary={5000000} />
    </div>
  );
}

export default App1;