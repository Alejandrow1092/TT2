import React from "react";
import "./Gaugecomponent.scss";
import GaugeChart from "react-gauge-chart";
//


export const Gaugecomponent = () =>{
    const chartSylte={
        width: "50%",
    }
    const chartColor={
        
    }
    return(
        <div>
            <GaugeChart nrOfLevels={5} percent={0.5} style={chartSylte}
                textColor="#000000" animate={false} colors={['#9BE5F7', '#6BF56E', '#FFFF00', '#FFC000', '#FF0000']} 
            />
        </div>
    );
}

export default Gaugecomponent;