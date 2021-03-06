import React from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment';

class Chart extends React.Component
{
    render()
    {
        
        // Props data, degreeType

        const labels = [];
        const dataSet = [];
        
        this.props.data.forEach(element => {
            labels.push(moment(element.time * 1000).format('ddd h:mm a'));

            const fahrenheit = Math.round(element.temp)
            const celsius = Math.round((fahrenheit - 32) * 5/9)

            dataSet.push(this.props.degreeType === "celsius" ? celsius: fahrenheit);
        });
        
        const chartData = 
        {
            labels : labels,
            datasets :
            [{
                label : "Temperature",
                data : dataSet
            }]
        }
         
        const legend = 
        {
            display : false
        }
        
        return(
            <Line height={100} data={chartData} legend={legend} />
        )
    }
}
    
    export default Chart