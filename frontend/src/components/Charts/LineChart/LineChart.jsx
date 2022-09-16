import React from 'react';
import {select,create} from 'd3';
import "./LineChart.scss";

const WIDTH = 200;
const SPACING_DAYS = WIDTH / 7;
const HEIGHT = 200;

/**
 * Creates a line chart for daily average session length, with tooltip and legend (see maquette)
 * @param {object} props - "props.average" must contain a "sessions" array proprety containing a "sessionLength" sub proprety
 * @returns {object} returns the created JSX object 
 */
function LineChart(props) {

  const AVERAGE = props.average;
  
  if(!document.querySelector("#lineChart-svg") && !(AVERAGE === -1)){

    let AVG_MAX = AVERAGE.sessions[0].sessionLength;
    for (let id = 0; id < AVERAGE.sessions.length-1; id++) {
      const CURRENT = AVERAGE.sessions[id].sessionLength;
      const NEXT = AVERAGE.sessions[id+1].sessionLength;
      const MAX = Math.max(CURRENT,NEXT);
      AVG_MAX = Math.max(AVG_MAX,MAX);
    }

    let AVG_MIN = AVERAGE.sessions[0].sessionLength;
    for (let id = 0; id < AVERAGE.sessions.length-1; id++) {
      const CURRENT = AVERAGE.sessions[id].sessionLength;
      const NEXT = AVERAGE.sessions[id+1].sessionLength;
      const MIN = Math.min(CURRENT,NEXT);
      AVG_MIN = Math.min(AVG_MIN,MIN);
    }
    
    const GRAPH_HEIGHT = 130;
    const SCALE = -(GRAPH_HEIGHT / (AVG_MAX - AVG_MIN));
    const MARGIN_GRAPH = -AVG_MIN * SCALE - (HEIGHT - GRAPH_HEIGHT) * 0.5;
    const MARGIN = 10;
    const DAYS = [ "L" , "M" , "M" , "J" , "V" , "S" , "D" ]

    const SVG = select(".lineChart-container")
      .append("svg")
      .attr("id","lineChart-svg")
      .attr("height","100%")
      .attr("width","100%")
      .attr("viewBox",`${0} ${-HEIGHT} ${WIDTH} ${HEIGHT}`)
      .attr("transform",`scale(1 1)`)
      .style("background","red")
      .style("border-radius","5px")

    
    SVG
      .append("g")
      .append("path")
      .attr("d",`
        M${SPACING_DAYS * 0 } , ${ MARGIN_GRAPH + AVERAGE.sessions[0].sessionLength * SCALE}
        L${SPACING_DAYS * 0.5}, ${ MARGIN_GRAPH + AVERAGE.sessions[0].sessionLength * SCALE}
        C${SPACING_DAYS * 1 }   ${ MARGIN_GRAPH + AVERAGE.sessions[0].sessionLength * SCALE} , ${SPACING_DAYS * 1 } ${ MARGIN_GRAPH + AVERAGE.sessions[1].sessionLength * SCALE} , ${SPACING_DAYS * 1.5 } ${ MARGIN_GRAPH + AVERAGE.sessions[1].sessionLength * SCALE}
        C${SPACING_DAYS * 2 }   ${ MARGIN_GRAPH + AVERAGE.sessions[1].sessionLength * SCALE} , ${SPACING_DAYS * 2 } ${ MARGIN_GRAPH + AVERAGE.sessions[2].sessionLength * SCALE} , ${SPACING_DAYS * 2.5 } ${ MARGIN_GRAPH + AVERAGE.sessions[2].sessionLength * SCALE}
        C${SPACING_DAYS * 3 }   ${ MARGIN_GRAPH + AVERAGE.sessions[2].sessionLength * SCALE} , ${SPACING_DAYS * 3 } ${ MARGIN_GRAPH + AVERAGE.sessions[3].sessionLength * SCALE} , ${SPACING_DAYS * 3.5 } ${ MARGIN_GRAPH + AVERAGE.sessions[3].sessionLength * SCALE}
        C${SPACING_DAYS * 4 }   ${ MARGIN_GRAPH + AVERAGE.sessions[3].sessionLength * SCALE} , ${SPACING_DAYS * 4 } ${ MARGIN_GRAPH + AVERAGE.sessions[4].sessionLength * SCALE} , ${SPACING_DAYS * 4.5 } ${ MARGIN_GRAPH + AVERAGE.sessions[4].sessionLength * SCALE}
        C${SPACING_DAYS * 5 }   ${ MARGIN_GRAPH + AVERAGE.sessions[4].sessionLength * SCALE} , ${SPACING_DAYS * 5 } ${ MARGIN_GRAPH + AVERAGE.sessions[5].sessionLength * SCALE} , ${SPACING_DAYS * 5.5 } ${ MARGIN_GRAPH + AVERAGE.sessions[5].sessionLength * SCALE}
        C${SPACING_DAYS * 6 }   ${ MARGIN_GRAPH + AVERAGE.sessions[5].sessionLength * SCALE} , ${SPACING_DAYS * 6 } ${ MARGIN_GRAPH + AVERAGE.sessions[6].sessionLength * SCALE} , ${SPACING_DAYS * 6.5 } ${ MARGIN_GRAPH + AVERAGE.sessions[6].sessionLength * SCALE}
        L${SPACING_DAYS * 7 }   ${ MARGIN_GRAPH + AVERAGE.sessions[6].sessionLength * SCALE}
      `)
      .attr("stroke","white")
      .attr("stroke-width","2")
      .attr("fill","none")

    SVG
      .append("g")
      .attr("class"," lineChart-text")
      .selectAll("text")
      .data(DAYS)
      .join("text")
      .attr("x", (d,id) => (SPACING_DAYS*0.5) + SPACING_DAYS * (id) )
      .attr("y", -MARGIN)
      .attr("fill","white")
      .attr("text-anchor", "middle")
      .style("font-size","12")
      .style("text-align","center")
      .text((d) => d)

    const TOOLTIP = SVG
      .append("g")
      .attr("transform",`scale(1 -1)`)
      .attr("class","lineBar_tooltip")

    const TOOLTIP_GROUPS = TOOLTIP
      .selectAll("g")
      .data(DAYS)
      .join("g")
      .attr("class","tooltip_group")
      .style("opacity",0)
    
    TOOLTIP_GROUPS
      .append("rect")
      .attr("x",(elem,id) =>  (id + 0.5) *SPACING_DAYS)
      .attr("y",0)
      .attr("width",WIDTH)
      .attr("height",HEIGHT)
      .style("opacity",0.2)

    TOOLTIP_GROUPS
      .append("circle")
      .attr("cx",(elem,id) => id *SPACING_DAYS + (0.5 * SPACING_DAYS))
      .attr("cy",(elem,id) => -(MARGIN_GRAPH + AVERAGE.sessions[id].sessionLength * SCALE))
      .attr("r",10)
      .attr("opacity",0.33)
      .attr("fill","white")
  
    TOOLTIP_GROUPS
      .append("circle")
      .attr("cx",(elem,id) => id *SPACING_DAYS + (0.5 * SPACING_DAYS))
      .attr("cy",(elem,id) => -(MARGIN_GRAPH + AVERAGE.sessions[id].sessionLength * SCALE))
      .attr("r",4)
      .attr("opacity",1)
      .attr("fill","white")

    TOOLTIP_GROUPS
      .append("rect")
      .attr("x",(elem,id) => id *SPACING_DAYS + (0.1 * SPACING_DAYS))
      .attr("y",(elem,id) => -(MARGIN_GRAPH + AVERAGE.sessions[id].sessionLength * SCALE) + ( 0.5 * SPACING_DAYS))
      .attr("width", 0.8 * SPACING_DAYS)
      .attr("height", 0.8 * SPACING_DAYS)
      .attr("rx",3)
      .attr("opacity",1)
      .attr("fill","white")
  
    const TEXT = TOOLTIP_GROUPS
      .append("g")
      .attr("class","tooltip-text")
      .attr("transform",`scale(1 -1)`)

    TEXT
      .append("text")
      .attr("x",(elem,id) => id *SPACING_DAYS + 0.5 * SPACING_DAYS )
      .attr("y",(elem,id) => (MARGIN_GRAPH + AVERAGE.sessions[id].sessionLength * SCALE)- ( 0.95 * SPACING_DAYS))
      .attr("text-anchor","middle")
      .style("font-size","10")
      .style("text-align","center") 
      .text((elem,id) => AVERAGE.sessions[id].sessionLength )
  
    TEXT
      .append("text")
      .attr("x",(elem,id) => id *SPACING_DAYS + (0.5 * SPACING_DAYS))
      .attr("y",(elem,id) => (MARGIN_GRAPH + AVERAGE.sessions[id].sessionLength * SCALE) - ( 0.6 * SPACING_DAYS))
      .attr("text-anchor","middle")
      .style("font-size","10")
      .style("text-align","center")
      .text("min")
    
    TOOLTIP
      .selectAll(".tooltip_group")
        .on("mouseover",function(a){
          select(this).style("opacity",1)
        })
        .on("mouseout",function(a){
          select(this).style("opacity",0)
        })

    
  }

  return(
    <>
      <div className='lineChart-container square-chart'>
      </div>
    </>
  )  
}

export default LineChart
