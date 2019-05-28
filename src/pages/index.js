import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import { getWeather } from "../lib/api"

class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Brisbane,AU&units=metric&APPID=82f64da34251b0e58e057d344f3307a1'
    ).then(data => data.json())
    .then( result => {
      console.log(result);
      this.setState({...result});
    })
    .catch(error => console.error(error));
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
    return (
      <Layout>
      <SEO title="Home" />
      <h1>The weather in {this.state.name} is currently</h1>
      <h3>Today's outlook is {this.state.weather[0].main}</h3>
      <h3>Today's low: {Math.round(this.state.main.temp_min)}</h3>
      <h3>Today's high: {this.state.main.temp_max}</h3>
      <h3>Humidity: {this.state.main.humidity}</h3>
      <h3>Sunrise is at: {new Date(this.state.sys.sunrise).toTimeString()}</h3>
      <h3>Sunset is at: {new Date(this.state.sys.sunset).toTimeString()}</h3>

    </Layout>

    )
  }
}

export default IndexPage
