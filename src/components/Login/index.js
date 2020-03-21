import React, { Component } from 'react';
import './index.scss';

class Template extends Component {
	constructor(props) {
		super(props);
	}
	state = {};
	/** Method to switch between visibility and non-visibility
	 * @public
	*/
	changeVisibility(){
		let x=document.getElementById("passwort");
		let y=document.getElementById("hide1");
		let z=document.getElementById("hide2");
		
		if(x.type ==='password'){
			x.type="text";
			y.style.display = "block";
			z.style.display = "none";
		} else{
			x.type="password";
			y.style.display = "none";
			z.style.display = "block";
			
		}
	
	};


	render() {
		return (
		<div>
			
			<form className="box" action = "loginPop.html" method="post">
        	<div className="boxinhalt">
    
        		<h1 id = "Headline"> L O G I N</h1>
				
      			<div className="input-box">
        			<input type="text" name="" placeholder="Enter Email..." className="input-field" required></input>
            	</div>
				
        		<div className="input-box"> 
           
           			<input type="password" value="" id="passwort" placeholder="Enter Password..."  className="input-field" required></input>
					
            		<span className="eye" onclick="changeVisibility()">
                		<i id="hide1"className="fa fa-eye"></i>
                		<i id="hide2"className="fa fa-eye-slash" ></i>
            		</span>

       			</div>
				
       			<button id="google-login"><img id="googleBild" src="google-logo.png"></img> Log In with Google </button>
       			<input type="submit" className="" id= "login" className="button" value="Log In"></input>         
      		</div>
    		</form>

		</div>);
	}
}

export default Template;
