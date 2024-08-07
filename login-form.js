import React from 'react';
import ReactDom from 'react-dom';
import './form.css';
import './validate'
function form(){
    
    return (<div id="formdiv">
        <span> <form  onsubmit="validate.js">
            username: <input id="username" type="text"  placeholder="username"/> <br/> <br/> 
            email: <input id="email" type="email" pattern="[^ @]*@[^ @]*" placeholder="email"/><br/> <br/>
            password: <input id="password" type="password" placeholder="password"/><br/> <br/>
            uploadimage <input type='file'/><br/> <br/>
            <button onClick="validate.js">Submit</button>
        </form> </span>
    </div>);
}
export default form;