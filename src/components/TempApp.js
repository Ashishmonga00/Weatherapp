import React, { useEffect, useState } from "react";
import "./css/index.css";


let temp = "";
const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");



    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4aa1502a76c3bfdae9c32ec721f7ad3f`
            const response = await fetch(url);
            const responsejson = await response.json();
            // console.log(responsejson);
            setCity(responsejson);
            console.log(responsejson);

            temp = responsejson.main;
            console.log(temp.temp);
        }

        fetchApi();
    }, [search])

    return (
        <><div id="bx">
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' id="inputF"/>
                </div>
                <div className='searchBtn' >
                        <button onClick={
                            () => {
                                let inp = document.getElementById('inputF').value;
                                setSearch(inp);
                            }
                        }>Search</button>
                </div>
                {
                    city ? (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp"> {Math.round(`${temp.temp}`-273)}° Celcius</h1>
                                <h3 className="tempmin_max">min. {Math.round(`${temp.temp_min}`-273)}° Celcius  max. {Math.round(`${temp.temp_max}`-273)}° Celcius</h3>
                            </div>
                            <div className='wave -one'></div>
                            <div className='wave -two'></div>
                            <div className='wave -three'></div>
                        </div>
                    ) : (
                            <div>
                                <div className="info">
                                    <h2 className="location">
                                        <i className="fas fa-street-view"></i>{search}
                                    </h2>
                                    <h1 className="temp"> No data found</h1>
                                    <h3 className="tempmin_max">oops!! No such city exists</h3>
                                </div>
                                <div className='wave -one'></div>
                                <div className='wave -two'></div>
                                <div className='wave -three'></div>
                            </div>
                        )
                }

            </div>
            </div>
        </>
    )
}

export default TempApp;
