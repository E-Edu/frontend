import React, { Component } from "react";
import "./index.scss";

class Template extends Component {
    constructor(props) {
        super(props);
    }
    state = {};

    render() {
        return (
            <div>
                <form class="box" action="loginPop.html" method="post">
                    <div class="boxinhalt">
                        <h1 id="Headline"> L O G I N</h1>
                        <div class="input-box">
                            <input
                                type="text"
                                name=""
                                placeholder="Enter Email..."
                                class="input-field"
                                required
                            ></input>
                        </div>

                        <div class="input-box">
                            <input
                                type="password"
                                value=""
                                id="passwort"
                                placeholder="Enter Password..."
                                class="input-field"
                                required
                            ></input>

                            <span class="eye" onclick="changeVisibility()">
                                <i id="hide1" class="fa fa-eye"></i>
                                <i id="hide2" class="fa fa-eye-slash"></i>
                            </span>
                        </div>
                        <button id="google-login">
                            <img id="googleBild" src="google-logo.png"></img>{" "}
                            Log In with Google{" "}
                        </button>
                        <input
                            type="submit"
                            name=""
                            id="login"
                            class="button"
                            value="Log In"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Template;
