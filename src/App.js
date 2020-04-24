import React from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import {fetchData} from './api'

import styles from './App.module.css'
import CoronaImage from '../src/images/image.png'

class App extends React.Component{

    state={
        data: {},
        country:''
    }

     async componentDidMount(){
        const fetchedData =  await fetchData();
        this.setState({ data : fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData =  await fetchData(country);
        this.setState({ data : fetchedData , country : country})
        console.log(country)
    }


    render(){

        const {data,country} = this.state;
        

        return(

            <div className={styles.container}>
                <img  className={styles.image} src={CoronaImage}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}

export default App;