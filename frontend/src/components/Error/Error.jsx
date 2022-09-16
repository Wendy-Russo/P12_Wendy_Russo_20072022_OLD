import React, { useState, useEffect }  from 'react';
import './Error.scss';

/**
 * Can create 4 different nutrient cards with different colors, icons, units and quantities (see maquette)
 * @param {object} props - must have both "props.nutrient" and "props.quantity" propreties 
 * @returns {object} returns the created JSX object 
 */
function NutrientCard(props) {
  
    return(
  
      <div className='error-container'>
        <span className='error-message'>
            error, couldn't fetch data from backend
        </span>
      </div>

    )
  }

export default NutrientCard
