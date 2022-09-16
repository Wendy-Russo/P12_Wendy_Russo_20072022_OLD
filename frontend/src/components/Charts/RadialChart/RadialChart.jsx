import React from 'react';
import { select, text} from 'd3';
import "./RadialChart.scss";

const POLY_ANGLE = 2 * Math.PI / 6


/**
 * Creates a hexagon of the right size, must be used in an SVG path's "d" attribute
 * @param {number} reScale - will multiply the radius, usefull to scale the entire chart 
 * @param {number} radius - desired radius, in pixels
 * @returns {object} returns the created JSX object 
 */
function regularHexagon(reScale,radius) {

  const SIZE = reScale * radius;
  return `
  M${Math.sin(POLY_ANGLE*4) * SIZE},${Math.cos(POLY_ANGLE*4) * SIZE}
  L${Math.sin(POLY_ANGLE*5) * SIZE},${Math.cos(POLY_ANGLE*5) * SIZE}
  L${Math.sin(POLY_ANGLE*6) * SIZE},${Math.cos(POLY_ANGLE*6) * SIZE}
  L${Math.sin(POLY_ANGLE*7) * SIZE},${Math.cos(POLY_ANGLE*7) * SIZE}
  L${Math.sin(POLY_ANGLE*8) * SIZE},${Math.cos(POLY_ANGLE*8) * SIZE}
  L${Math.sin(POLY_ANGLE*9) * SIZE},${Math.cos(POLY_ANGLE*9) * SIZE}
  Z`
}

/**
 * Creates a radial (spider) chart for 6 types of performance , with a legend and no tooltip (see maquette)
 * @param {object} props - "props.perf.data" must be an array containing a "value" attribute for each performance type
 * @returns {object} returns the created JSX object 
 */
function RadialChart(props) {

  const PERFORMANCE = props.perf;
  const P_DATA = PERFORMANCE.data;

  const WIDTH = 200;
  const HEIGHT = 200;
  const TEXT_OFFSET_Y = 2.5;

  if(!document.querySelector("#radal-svg") && !(PERFORMANCE === -1)){

    const SCALE = 0.3;
    const SCALE_1 = P_DATA[0].value * SCALE; //BOTTOM RIGHT
    const SCALE_2 = P_DATA[1].value * SCALE;  //TOP RIGHT
    const SCALE_3 = P_DATA[2].value * SCALE;  //TOP
    const SCALE_4 = P_DATA[3].value * SCALE;  //TOP LEFT 
    const SCALE_5 = P_DATA[4].value * SCALE;  //BOTTOM LEFT
    const SCALE_6 = P_DATA[5].value * SCALE;  //BOTTOM

    const SVG = select(".radalChart-container")
      .append("svg")
      .attr("id","radal-svg")
      .attr("height","100%")
      .attr("width","100%")
      .attr("viewBox",`${-WIDTH/2} ${-HEIGHT/2} ${WIDTH} ${HEIGHT}`)
      .style("background","#282D30")
      .style("border-radius","5px")

    SVG
      .append("g")
      .append("path")
      .attr("d",regularHexagon(SCALE,250))
      .attr("stroke","white")
      .attr("fill","none")

    SVG
      .append("g")
      .append("path")
      .attr("d",regularHexagon(SCALE,187.5))
      .attr("stroke","white")
      .attr("fill","none")

    SVG
      .append("g")
      .append("path")
      .attr("d",regularHexagon(SCALE,125))
      .attr("stroke","white")
      .attr("fill","none")

    SVG
      .append("g")
      .append("path")
      .attr("d",regularHexagon(SCALE,62.5))
      .attr("stroke","white")
      .attr("fill","none")

    SVG
      .append("g")
      .append("path")
      .attr("d",regularHexagon(SCALE,31.25))
      .attr("stroke","white")
      .attr("fill","none")

    SVG
      .append("g")
      .append("path")
      .attr("d",`
        M${Math.sin(POLY_ANGLE*4) * SCALE_1},${Math.cos(POLY_ANGLE*4) * SCALE_1}
        L${Math.sin(POLY_ANGLE*5) * SCALE_2},${Math.cos(POLY_ANGLE*5) * SCALE_2}
        L${Math.sin(POLY_ANGLE*6) * SCALE_3},${Math.cos(POLY_ANGLE*6) * SCALE_3}
        L${Math.sin(POLY_ANGLE*7) * SCALE_4},${Math.cos(POLY_ANGLE*7) * SCALE_4}
        L${Math.sin(POLY_ANGLE*8) * SCALE_5},${Math.cos(POLY_ANGLE*8) * SCALE_5}
        L${Math.sin(POLY_ANGLE*9) * SCALE_6},${Math.cos(POLY_ANGLE*9) * SCALE_6}
      `)
      .attr("fill","#FF0101B2")

    const TEXT = SVG
      .append("g")
      .attr("class","radialChart-text")
      .attr("opacity","0.9")
      .style("font-size","10")
      .style("font-weight","500")
      .style("text-align","center")
      .attr("text-anchor", "middle")
      .attr("fill", "white")

    const TEXT_SCALE_X = 95;
    const TEXT_SCALE_Y = 85;

    TEXT
      .append("text")
      .attr("class","nutrient-description")
      .attr("dx",Math.sin(POLY_ANGLE*4) * TEXT_SCALE_X)
      .attr("dy",Math.cos(POLY_ANGLE*4) * TEXT_SCALE_Y + TEXT_OFFSET_Y)
      .text("Cardio")

      TEXT
      .append("text")
      .attr("class","nutrient-description")
      .attr("dx",Math.sin(POLY_ANGLE*5) * TEXT_SCALE_X)
      .attr("dy",Math.cos(POLY_ANGLE*5) * TEXT_SCALE_Y + TEXT_OFFSET_Y)
      .text("Energie")

    TEXT
      .append("text")
      .attr("class","nutrient-description")
      .attr("dx",Math.sin(POLY_ANGLE*6) * TEXT_SCALE_X)
      .attr("dy",Math.cos(POLY_ANGLE*6) * TEXT_SCALE_Y + TEXT_OFFSET_Y)
      .text("Endurance")

    TEXT
      .append("text")
      .attr("class","nutrient-description")
      .attr("dx",Math.sin(POLY_ANGLE*7) * TEXT_SCALE_X)
      .attr("dy",Math.cos(POLY_ANGLE*7) * TEXT_SCALE_Y + TEXT_OFFSET_Y)
      .text("Force")

    TEXT
      .append("text")
      .attr("class","nutrient-description")
      .attr("dx",Math.sin(POLY_ANGLE*8) * TEXT_SCALE_X)
      .attr("dy",Math.cos(POLY_ANGLE*8) * TEXT_SCALE_Y + TEXT_OFFSET_Y)
      .text("Vitesse")

    TEXT
      .append("text")
      .attr("class","nutrient-description")
      .attr("dx",Math.sin(POLY_ANGLE*9) * TEXT_SCALE_X)
      .attr("dy",Math.cos(POLY_ANGLE*9) * TEXT_SCALE_Y + TEXT_OFFSET_Y)
      .text("Intensité")
  }

  return(
    <>
      <div className='radalChart-container square-chart'>
      </div>
    </>
  )
    
}

export default RadialChart
