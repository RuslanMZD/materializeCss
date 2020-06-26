import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";



class Slider extends React.Component{
 
componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('.slider');
        let instances = M.Slider.init(elems, {});
      });
    
}
 
 
    render(){
return(
  <div className="full-width">

<div className="slider">
    <ul className="slides">
      <li>
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <div className="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <div className="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>


  </div>
)

}}

export default Slider;
