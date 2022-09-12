import React, { useState, useEffect }  from 'react';
import './NutrientCard.scss';


import caloriesIcon from  "../../../data/icons/calories.svg"
import proteinesIcon from "../../../data/icons/proteine.svg"
import glucidesIcon from  "../../../data/icons/glucides.svg"
import lipidesIcon from   "../../../data/icons/lipides.svg"

let color;
let iconToUse = proteinesIcon;
let unit;

async function fun() {
  return fetch("http://localhost:3000/user/12/")
    .then(response => response.json())
    .then(user => user.data)
    .then(data => {return data});
}

function NutrientCard(props) {

  const [userData,setUserData] = useState(0);

  /*useEffect(() => {
    fun().then(result => setUserData(result));
  });*/

  //console.log("CARD",userData);

  const NUTRIENT = props.nutrient;
  const QUANTITY = props.quantity;
  const UNIT = props.unit;

  switch (NUTRIENT) {
    case "calories":
      color = "red" ;
      iconToUse = caloriesIcon;
      unit = "kCal";
      break;
    case "proteines":
      color = "blue" ;
      iconToUse = proteinesIcon;
      unit = "g";
      break;
    case "glucides":
      color = "orange" ;
      iconToUse = glucidesIcon;
      unit = "g";
      break;
    case "lipides":
      color = "pink" ;
      iconToUse = lipidesIcon;
      unit = "g";
      break;
    default:
      color = "red" ;
      iconToUse = caloriesIcon;
      unit = "g";
      break;
  }

  return(

    <>
      <div className='card'>
        <div className={"iconContainer " + color}>
          <img className='nutrientIcon' src={iconToUse}/>
        </div>
        <p className='quantity'>{QUANTITY + unit}</p>
        <p className='nutrient'>{NUTRIENT[0].toUpperCase()+NUTRIENT.substring(1)}</p>
      </div>

    </>
  )
}

export default NutrientCard
