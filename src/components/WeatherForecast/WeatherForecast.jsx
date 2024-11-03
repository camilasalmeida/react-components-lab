import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";

const WeatherForecast = ({ data }) => {
  //const { data } = props;
  return (
    <div className="weather">
      <WeatherIcon img={data.img} alt={data.imgAlt} />

      <WeatherData
        day={data.day}
        conditions={data.conditions}
        time={data.time}
      />
    </div>
  );
};

export default WeatherForecast;
