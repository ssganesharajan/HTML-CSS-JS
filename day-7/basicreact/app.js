//This is very much case sensitive
import Karna from './ifile';
//import component from it's file

//it work's but need index.js file

const App=()=>{
  const x=58;
  return(
    <div>
      <p>warrior</p>
    <h1>{x}</h1>
    <Karna />
    <input type='text' id='ip'></input>
    <button onClick="alertbox" type="submit">click me</button>
    </div>
  );
}

export default App;
//export default component
//compoent name should be uppercase
