import React, { isValidElement } from 'react';
import M from "materialize-css";


import 'materialize-css/dist/css/materialize.min.css';



 const Reg=()=>{

return(
    <div className="container ">
    <div class="row ">
    <div class="col s12 m9">
      <div class="card hoverable ">
        <div class="card-image">
          <img src="https://klike.net/uploads/posts/2018-06/1528720172_1.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  </div>

)


}


export default Reg;