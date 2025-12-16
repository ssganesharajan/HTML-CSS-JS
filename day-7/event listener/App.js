function App1(){
  function handleClick(){
    console.log("Button clicked");
  }
  return(
    <button onClick={handleClick}>Click Me</button>
  );
}

export default App1;