import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
    <div className="projects">
    <section>
        <h1>Flight Booking Website</h1>
        <h2>This is a simple and responsive flight booking app with lots of effects and animations!</h2>
        <img className='p-img' src="flight.png" alt="flight-app-img" />
        <p>This website is built using <span className='def-col'>React Js</span> and <span className='def-col'>SCSS</span>. It consists of multiple pages with different hover effects, transitions and inputs.<br/><br/><br/>You can find the <span className='def-col'>Github Repository</span> for this project at : <Link className='git-link' to="https://github.com/devashishsoni98/flight-booking-website" target="_blank">Github Repo</Link><br/><br/><br/>You can also check it out <span className='def-col'>live</span> at : <Link className='git-link' to="https://ds-flight-app.netlify.app/" target="_blank"> Flight Website</Link></p>
    </section><hr style={{marginTop:"3rem"}}/>
    <section>
        <h1>Weather checking Website</h1>
        <h2>This is a simple and responsive Weather website which shows the live weather of any city!</h2>
        <img className='p-img' src="weather.png" alt="weather-app-img" />
        <p>This website is built using <span className='def-col'>React Js</span> and it collects data for live weather from <span className='def-col'>OpenWeatherMap API</span>. It displays various information about the weather like temprature, humidity, what the area feels like and weather.<br/><br/>It also have a toggle button which can be used to switch to a <span className='def-col'>dark theme</span>, like this :<br/><br/><br/><img className='p-img' src="dark-weather.png" alt="dark-theme-pic" /><br/><br/>
        You can find the <span className='def-col'>Github Repository</span> for this project at : <Link className='git-link' to="https://github.com/devashishsoni98/weatherApp" target="_blank">Github Repo</Link><br/><br/><br/>You can also check it out <span className='def-col'>live</span> at : <Link className='git-link' to="https://ds-weather-app.netlify.app/" target="_blank"> Weather Website</Link></p>
    </section><hr style={{marginTop:"3rem"}}/>

    <section>
        <h1>Flight Booking Website</h1>
        <h2>This is a simple and responsive flight booking app with lots of effects and animations!</h2>
        <img className='p-img' src="flight.png" alt="flight-app-img" />
        <p>This website is built using <span className='def-col'>React Js</span> and <span className='def-col'>SCSS</span>. It consists of multiple pages with different hover effects, transitions and inputs.<br/><br/><br/>You can find the <span className='def-col'>Github Repository</span> for this project at : <Link className='git-link' to="https://github.com/devashishsoni98/flight-booking-website" target="_blank">Github Repo</Link><br/><br/><br/>You can also check it out <span className='def-col'>live</span> at : <Link className='git-link' to="https://ds-flight-app.netlify.app/" target="_blank"> Flight Website</Link></p>
    </section><hr style={{marginTop:"3rem"}}/>

    <section>
        <h1>Flight Booking Website</h1>
        <h2>This is a simple and responsive flight booking app with lots of effects and animations!</h2>
        <img className='p-img' src="flight.png" alt="flight-app-img" />
        <p>This website is built using <span className='def-col'>React Js</span> and <span className='def-col'>SCSS</span>. It consists of multiple pages with different hover effects, transitions and inputs.<br/><br/><br/>You can find the <span className='def-col'>Github Repository</span> for this project at : <Link className='git-link' to="https://github.com/devashishsoni98/flight-booking-website" target="_blank">Github Repo</Link><br/><br/><br/>You can also check it out <span className='def-col'>live</span> at : <Link className='git-link' to="https://ds-flight-app.netlify.app/" target="_blank"> Flight Website</Link></p>
    </section>

    </div>
    </>
  )
}

export default Projects