export const Formone=()=>{
    return(
        <div>
            <form>
                <input type="text"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Formone;

//Direct export:
//In industry for multiple purpose especially for a developer to make export export easy we use this.
//Direct export works only with arrow function.
//When import write the component name in curly bracket in index .js like "import {Formone} from './formone';"