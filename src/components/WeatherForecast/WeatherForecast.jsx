import "./WeatherForecast.css";


const WeatherForecast = ({ data }) => {
    //const { data } = props;
    return (
<div className="weather">
<h2>{data.day}</h2>
<img src={data.img} alt={data.imgAlt} />
<p><span>conditions:</span>{data.conditions}</p>
<p><span>time:</span>{data.time}</p>
</div>

)
}


export default WeatherForecast;
