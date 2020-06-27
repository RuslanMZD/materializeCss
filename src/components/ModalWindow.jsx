import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";



class ModalWindow extends React.Component{
 
componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
      });

    
}
 
 
    render(){
return(
    <div className="modal" id="modal1">

<div class="modal-content ">
      {/* <h4 className="blue-text">КАКОЙТО ЗАГОЛОВОК</h4>
      <p className="blue-text text-darken-2">КАКОКЙТО ТЕКСТ</p> */}
    
<div className="row"> 
<div className="col s12">
    <div className="row">
    <div className="input-field  col s6">
    <i className="material-icons prefix blue-text ">add</i>
    <input id="first_name" type="text" className="validate"/>
    <label for="first_name">First Name</label>
      </div>
      <div class=" input-field col s6">
      <i className="material-icons prefix ">add</i>
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>

    </div>
    
    </div>

    </div>











    



    </div>



    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Diz</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>


  </div>
)

}}

export default ModalWindow;
