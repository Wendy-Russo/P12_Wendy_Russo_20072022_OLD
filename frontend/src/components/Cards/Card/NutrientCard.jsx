import React, { useState, useEffect }  from 'react';
import './NutrientCard.scss';


import caloriesIcon from  "../../../data/icons/calories.svg"
import proteinesIcon from "../../../data/icons/proteine.svg"
import glucidesIcon from  "../../../data/icons/glucides.svg"
import lipidesIcon from   "../../../data/icons/lipides.svg"

let color = -1;
let iconToUse = proteinesIcon;
let unit;


/**
 * 
 * Can create 4 different nutrient cards with different colors, icons, units and quantities (see maquette)
 * 
 * @param {object} props - must have both "props.nutrient" and "props.quantity" propreties 
 * 
 * @returns {object} returns the created JSX object 
 * 
 */
function NutrientCard(props) {

  const NUTRIENT = props.nutrient;
  const QUANTITY = props.quantity;  

  if(NUTRIENT && QUANTITY){
    
    
    
    //console.log(props)

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
  
      <div className='card'>
        <div className={"iconContainer " + color}>
          <img className='nutrientIcon' src={iconToUse}/>
        </div>
        <p className='quantity'>{QUANTITY + unit}</p>
        <p className='nutrient'>{NUTRIENT[0].toUpperCase()+NUTRIENT.substring(1)}</p>
      </div>

    )
  }

}

export default NutrientCard
