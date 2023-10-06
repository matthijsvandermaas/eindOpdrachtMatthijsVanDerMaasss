import React from 'react'
import Cubes2 from "../../components/cubes/Cubes2.jsx";
import './Login_Page.css'

// https://codesandbox.io/s/github/SinghDigamber/react-login-signup-ui-template/tree/master/?from-embed=&file=/src/index.css
function login(){

        return (
            <>
                <div className="outer-login-container">

                <Cubes2
                    button_5="inschrijven"
                    navigate_5="inschrijfformulier"
                    button_6="home"
                    navigate_6="/"
                />
                    <h1>Gezellig dat je er bent, kom je inschrijven of inloggen?</h1>
            <form className="form-content background-login">



                <div className="">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="">
                    <button type="submit" className="bttn">
                        inschrijven
                    </button>
                </div>

                <p className="">
                    Already registered <a href="/signin">login</a>
                </p>

            </form>
                </div>
            </>
        );
}
export default login;
