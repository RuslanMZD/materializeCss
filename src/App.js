import React, { isValidElement } from 'react';
import M from "materialize-css";
import Slider from './components/Slider';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/Navbar';



 //import './App.css';

const App =()=>{

return(
  <div className="container">
    <Navbar />

    
    <div className="row"></div>

    <div className="row">
  <div className="col s12">
  <Slider />
  </div>
</div>

  <div className="row">
  <div className="col xl3 l3 m6 s12">
        <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <p>    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quae facere sit beatae quaerat laudantium ex quas numquam mollitia quo nemo distinctio nesciunt possimus suscipit magni minus repellat dignissimos aperiam!</p>


        </p>
      </div>

      <div className="col xl3 l3 m6 s12">
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <p>    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quae facere sit beatae quaerat laudantium ex quas numquam mollitia quo nemo distinctio nesciunt possimus suscipit magni minus repellat dignissimos aperiam!</p>


        </p>
      </div>


      <div className="col xl3 l3 m6 s12">
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <p>    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quae facere sit beatae quaerat laudantium ex quas numquam mollitia quo nemo distinctio nesciunt possimus suscipit magni minus repellat dignissimos aperiam!</p>


        </p>
      </div>

      <div className="col xl3 l3 m6 s12">
      <img style={{width:"100%"}} src="https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg"/>
        <p>    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quae facere sit beatae quaerat laudantium ex quas numquam mollitia quo nemo distinctio nesciunt possimus suscipit magni minus repellat dignissimos aperiam!</p>


        </p>
      </div>





  </div>


  </div>
)

}

export default App;
