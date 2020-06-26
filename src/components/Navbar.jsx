import React, { isValidElement } from 'react';
import M from "materialize-css";
import logo from "../logo.png"

import 'materialize-css/dist/css/materialize.min.css';





class Navbar extends React.Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }
render(){
return(
  
    <nav>
        <div className="container">
    <div className="nav-wrapper e040fb purple accent-2">
<a href="#" className="brand-logo"><img style={{width:"60px", height:"60px"}} src={logo}></img></a>
      <a href="#"  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">format_align_center</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/dashboard">Home</a></li>
        <li><a href="/reg">Registration</a></li>
        <li><a href="/auth">Autorizaition</a></li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="/dashboard">Home</a></li>
        <li><a href="/reg">Registration</a></li>
        <li><a href="/auth">Autorizaition</a></li>
      </ul> 

    </div>
    </div>
  </nav>

)

}}

export default Navbar;
