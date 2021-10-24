import React, { useEffect, useState } from "react";
import "./css/style.css";



const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=36c4b368854a57b0d7cbf526acf49613`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

            //console.log(response);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
            <h1 className="box-h1">Today's Weather Report</h1>
                <div className="inputData">
                    <h2>Enter your city name</h2>
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {!city ? (
                    <p> No Data Found! </p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp} °Cel
                            </h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel </h3>
                            <h3 className="humidity"> Humidity : {city.humidity} </h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Tempapp;