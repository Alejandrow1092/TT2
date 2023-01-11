import React from "react";
import "./Gaugecomponent.scss";
import GaugeChart from "react-gauge-chart";
//


export const Gaugecomponent = (props) =>{
    const{num}=props;

    const chartSylte={
        width: "50%",
    }
    return(
        <GaugeChart nrOfLevels={5} percent={num}
                textColor="#000000" animate={false} colors={['#9BE5F7', '#6BF56E', '#FFFF00', '#FFC000', '#FF0000']} 
            />
    );
}

export default Gaugecomponent;