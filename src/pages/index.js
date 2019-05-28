import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/weather-icons.min.css"
// import { getWeather } from "../lib/api"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Brisbane,AU&units=metric&APPID=82f64da34251b0e58e057d344f3307a1"
    )
      .then(data => data.json())
      .then(result => {
        console.log(result)
        this.setState({ ...result })
      })
      .catch(error => console.error(error))
  }

  render() {
    if (!this.state.name) {
      return (
        <Layout>
          <SEO title="Home" />
          <h1>Loading...</h1>
        </Layout>
      )
    }
    const { main: { temp, temp_min, temp_max, humidity }, weather, name, sys } = this.state;
    return (
      <Layout>
        <SEO title="Home" />

        <div className="max-w-sm rounded shadow-lg bg-purple-100 mb-10">
          <h2 className="text-gray-800 text-2xl font-sans pl-3 pt-3">
            {name}, {sys.country}
          </h2>
          <h2 className="text-gray-600 text-2xl pl-3 font-sans">
            {weather[0].description}
          </h2>

          <div className="flex flex-row px-6 py-4 justify-between pb-10">
            <i
              className={`text-indigo-500 text-5xl wi wi-owm-${
                weather[0].id
              }`}
            />
            <div className="flex">
              <div className="text-indigo-700 text-6xl font-bold self-center font-sans">
                {Math.round(temp)}
              </div>
              <div className="text-indigo-700 text-xl font-bold self-start font-sans">°C</div>
            </div>
          </div>
          <div className="flex flex-row px-6 py-4 justify-between">
            <div className="text-gray-500">
              LOW
            </div>
            <div className="text-indigo-700 font-bold text-xl self-center font-sans">
              {Math.round(temp_min)}°C
            </div>
          </div>          
          <div className="flex flex-row px-6 py-4 justify-between">
            <div className="text-gray-500">
              HIGH
            </div>
            <div className="text-indigo-700 font-bold text-xl self-center font-sans">
              {Math.round(temp_max)}°C
            </div>
          </div>

          <div className="flex flex-row px-6 py-4 justify-between pb-10">
            <div className="text-gray-500">
              HUMIDITY
            </div>
            <div className="text-indigo-700 font-bold text-xl self-center font-sans">
              {humidity}%
            </div>
          </div>
          
        </div>


        {/* <h3>Sunrise is at: {new Date(sys.sunrise).toTimeString()}</h3>
      <h3>Sunset is at: {new Date(sys.sunset).toTimeString()}</h3> */}
      </Layout>
    )
  }
}

export default IndexPage
