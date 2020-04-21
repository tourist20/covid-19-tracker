import React from "react";
import { Component } from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index';

import covidImage from './images/img19.png';

export default class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
        // console.log(fetchedData);
    }

    handleCountryChange = async(country)=>{

        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country:country})

    }

    render() {

        const {data, country} = this.state;
        return (
            <div className={styles.container}>

                <img className={styles.image} src={covidImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>  
                
            </div>
        )
    }
}
