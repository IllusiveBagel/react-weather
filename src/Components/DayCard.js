import React from 'react';
import moment from 'moment';

class DayCard extends React.Component
{
    render()
    {
        //Props: day, key, degreeType
        let newDate = new Date();
        const weekday = this.props.day.dt * 1000
        newDate.setTime(weekday)

        const fahrenheit = Math.round(this.props.day.main.temp)
        const celsius = Math.round((fahrenheit - 32) * 5/9)

        const imgURL = `owf owf-${this.props.day.weather[0].id} owf-5x`

        return(
            <div className="card">
                <h5 className="card-header">{moment(newDate).format('dddd')}</h5>
                <i className={imgURL}></i>
                <h2>{this.props.degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
                <div className="card-body">
                    <p className="card-text">{this.props.day.weather[0].description}</p>
                </div>
                <div className="card-footer">
                    <p className="text-muted my-auto">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                </div>
                
            </div>
        )
    }
}

export default DayCard;