import React from "react";
import "../CSS/DropDown.css";
import axios from "axios";
//import Rect from "../Components/Rect";
import Board from "../Components/Board";
import Dashboard from "../Components/Dashboard";
import PlantImage from "./PlantImage";


function require() {
  axios
    .get("https://irkzvvl9m8.execute-api.us-east-1.amazonaws.com/dev/plants?gardenId=1")
    .then(function(response) {
      console.log(response);
      console.log(response.data);
      console.log(response.data.body[1].lumens);
      this.state.data = response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  return null;
}

function Dropdown() {

  //setInterval(function(){ document.location.reload(true); }, 1000);
  require();
  return (
    <React.Fragment>
      <div className="menu">
          <img className="iconRose" src="https://purepng.com/public/uploads/large/11232131312312-eke.png" alt="icon"></img>
          <h1 className="h1">The Smart Garden</h1>
      </div>
      <div className="mainDiv">
        <br></br>
        
        {/* <h5>Lucas Vieira, Marina Lacerda, Vinicius Romão</h5> */}
        <select>
          
  <option >Hortelã</option>
  <option >Suculenta</option>
  <option >Cacto</option>
  <option >Lírio</option>
  </select>
        
        <Board plantId="4"/>
        <PlantImage className="plantImage" plantId ="3"></PlantImage>
        <Dashboard lumens="2"></Dashboard>
      </div>
    </React.Fragment>
  );
}
export default Dropdown;
