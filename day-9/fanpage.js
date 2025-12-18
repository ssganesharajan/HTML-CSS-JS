import { useState } from "react";

export const RegistartionForm = () =>{
    const [details,setDetails]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        setDetails("Mr/Mrs" + e.target.username.value+"Born on"+e.target.dob.value+"from"+e.target.loation.value+"can be contacted at"+e.target.number.value+"joined in our fan club😊");
    }

    function handleSingin(e){
        e.preventDefault();
        alert("Login successful");
    }

    return(
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>UserName:</label></td>
                                <td><input type="text" id="username" name="username" required /></td>
                            </tr>
                            <tr>
                                <td><label>DOB:</label></td>
                                <td><input type="text" id="dob" name="dob" required /></td>
                            </tr>
                            <tr>
                                <td><label>Location:</label></td>
                                <td><input type="text" id="loc" name="location" required /></td>
                            </tr>
                            <tr>
                                <td><label>Contact:</label></td>
                                <td><input type="number" id="number" name="number" required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="joinbutton">JOIN</button>
                </form>
            </div>

            <div className="details">
                <h2>{details}</h2>
            </div>
            <div className="signup">
                <h1>Sign Up</h1>
                <form onSubmit={handleSingin}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Email:</label></td>
                                <td><input type="email" id="email" name="email" required /></td>
                            </tr>
                            <tr>
                                <td><label>Password:</label></td>
                                <td><input type="password" id="password" name="password" required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="joinbutton">Submit</button>
                </form>
            </div>
        </div>
    );
}