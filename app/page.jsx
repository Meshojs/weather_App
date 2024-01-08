'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Home = () => {
    const [cityName, setCityName] = useState();
    const [temp, setTemp] = useState();
    const [tempk, setTempk] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [country, setCountry] = useState();



    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=c04c97887424717da9b166db0fa68938`
    fetch(url)
        .then((dataJson) => {
            return dataJson.json()
        }).then((data) => {
            const lat = data[0].lat;
            const lon = data[0].lon;
            const country = data[0].country;

            setLat(lat)
            setLon(lon)
            setCountry(country)
            const temp = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c04c97887424717da9b166db0fa68938`;
            fetch(temp).then((dataJson) => {
                return dataJson.json()
            }).then((data) => {
                // console.log(data.main.temp)
                setTempk(data.main.temp )
                let c = data.main.temp - 273.15;
                setTemp(c.toFixed(0)) // celcuis

            })
        })
    function handle(e) {
        setCityName(e.target.value);
    }






    return (
        <>


            <nav className="navbar navbar-expand  p-0 col-6" style={{ position: 'fixed', top: '0px', width: '100%', zIndex: '1000' }}>
                <div className="container rounded-2 pt-1 p-0 px-4 pb-1">
                    <a className="navbar-brand fs-2 p-1 mb-2 fw-bold" style={{ color: 'black' }} href="https://github.com/Meshojs">ɥ</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* GitHub link */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item  py-0">
                                <a href="https://github.com/Meshojs">


                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>





            <div className="container">
                <div className="row">
                    <div className="col-12 display-2 text-center mx-auto fw-bold text-black " style={{ marginTop: '250px' }}>
                        Weather App
                    </div>
                    <div className="fs-6 mx-auto text-center mt-2  text-black fw-bold">
                        Web-App using Next.js For Beginners. <br />
                    </div>
                </div>

                <div className="row">

                    <input type="text" onChange={handle} className='col-10 col-sm-6 col-md-5  col-lg-4 mx-auto mt-3 rounded-3 border-dark border-1 p-2 ' placeholder='Type You City Name : ' />
                </div>


                <div className="row mt-4 ">

                    <div class="card col-11 col-sm-6 col-md-5 col-lg-4 mx-auto  ">
                        <div class="card-body">
                            <h5 class="card-title">City Name : {cityName}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Data Below_  </h6>
                            <hr />
                            <p class="card-text">
                                <b>Country Name</b> : {country}
                            </p>
                            <p class="card-text">
                                <b>longitude</b> : {lon}
                            </p>
                            <p class="card-text">
                                <b>Latitude</b> : {lat}
                            </p>
                            <p class="card-text">
                                <b>Temp.C</b> : {temp}°C
                            </p>
                            <p class="card-text">
                                <b>Temp.K</b> : {tempk} kelvin 
                            </p>




                        </div>
                    </div>


                </div>






            </div>

        </>
    )
}
export default Home;
