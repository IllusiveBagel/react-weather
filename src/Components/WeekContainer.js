import React from 'react';
import apiConfig from '../apiKeys';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import Chart from './Chart';

class WeekContainer extends React.Component
{
    state = {
        fullData: [],
        dailyData: [],
        chartData: [],
        degreeType: "celsius"
    }

    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?id=2649692&units=imperial&APPID=${apiConfig.owmKey}`
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
            let chartData = [];

            data.list.forEach(element => {
                chartData.push({
                    time : element.dt,
                    temp : element.main.temp
                });
            });

            this.setState({
                fullData: data.list,
                dailyData: dailyData,
                chartData: chartData
            }, () => console.log(this.state))
        })
    }

    formatDayCards = () => {
        return <div className="card-group">{this.state.dailyData.map((reading, index) => <DayCard day={reading} key={index} degreeType={this.state.degreeType} />)}</div>
    }

    render()
    {
        return(
            <div className="container">
                <h1 className="display-1 jumbtron">React Forecast</h1>
                <h5 className="diplay-5 text-muted">Fareham, UK</h5>
                <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
                <div className="row justify-content-center">
                    <Chart data={this.state.chartData} degreeType={this.state.degreeType}/>
                </div>
            </div>
        )
    }
}

export default WeekContainer;