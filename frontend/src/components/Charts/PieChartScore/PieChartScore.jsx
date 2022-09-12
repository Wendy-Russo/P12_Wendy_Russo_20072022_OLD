import React, { useEffect } from 'react';
import { select, arc } from 'd3';
import "./PieChartScore.scss";

function PieChartScore(props) {

  const SCORE = props.score;
  const ANGLE_PI = SCORE * Math.PI * 2;
  const ANGLE_DEG = SCORE * 360;
  const WIDTH = 200;
  const HEIGHT = 200;
  const IN_RADIUS = 70;
  const THICKNESS= 10;
  const CIRCLE_Y = -IN_RADIUS -(THICKNESS/2);

  const DONUT_PATH =  arc()
    .innerRadius(IN_RADIUS)         // This is the size of the donut hole
    .outerRadius(IN_RADIUS+THICKNESS)
    .startAngle(0)
    .endAngle(-ANGLE_PI)

  if(!document.querySelector("#pie-svg")){
    const SVG = select(".pieChart-container")
      .append("svg")
      .attr("id","pie-svg")
      .attr("height","100%")
      .attr("width","100%")
      .attr("viewBox",`${-WIDTH/2} ${-HEIGHT/2} ${WIDTH} ${HEIGHT}`)
      .style("background-color","#FBFBFB")
      .style("border-radius","5px")

    SVG
      .append("g")
      .attr("class","donut red")
      .append("path")
      .attr('d', DONUT_PATH)

    SVG
      .append("g")
      .attr("class","circle-start red")
      .append("circle")
      .attr('r', THICKNESS/2)
      .attr('cy', CIRCLE_Y)

    SVG
      .append("g")
      .attr("class","circle-end red")
      .append("circle")
      .attr('r', THICKNESS/2)
      .attr("transform",`rotate(${-ANGLE_DEG} 0 0)`)
      .attr('cy', CIRCLE_Y)

    const DESCRIPTION = SVG
      .append("g")
      .attr("class","text")

    DESCRIPTION
      .append("text")
      .attr("class","description-percentage center fw-700 fs-26")
      .attr("fill", "#282D30")
      .text(SCORE * 100 + "%")

    DESCRIPTION
      .append("text")
      .attr("class","description-text center fw-500")
      .attr("dy","20")
      .text("de votre")

    DESCRIPTION
      .append("text")
      .attr("class","description-text center fw-500")
      .attr("dy","40")
      .text("objectif")

    DESCRIPTION
      .append("text")
      .attr("class","title center fw-500 fs-15")
      .attr("dx",-WIDTH*0.25)
      .attr("dy",-HEIGHT/2+15)
      .attr("fill", "#20253A")
      .text("Score")

    DESCRIPTION
      .selectAll(".description-text")
      .attr("fill", "#74798C")

    //STYLES
 
    SVG
      .selectAll(".center")
      .attr("text-anchor", "middle")
      .attr("text-align", "center")

    SVG
      .selectAll(".fw-500")
      .attr("font-weight", "500")

    SVG
      .selectAll(".fw-700")
      .attr("font-weight", "700")

    SVG
      .selectAll(".fs-15")
      .attr("font-size", "15")

    SVG 
      .selectAll(".fs-26")
      .attr("font-size", "26")

    SVG 
      .selectAll(".red")
      .attr("fill", "#FF0000")

  }

  return(
    <>
      <div className='pieChart-container square-chart'>

      </div>
    </>
  )
}

export default PieChartScore
