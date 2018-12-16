import React, { Component } from 'react';
import './App.css';
// import { Row, Col } from 'reactstrap';
import aishwarya from './aishwarya.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={{ fontSize: '3em', textAlign: 'center' }}>
                Aishwarya Kripakaran
                <h4> Fashion <span style={{ color: '#FF69B4' }}> &#9829; </span> Food <span style={{ color: '#FF69B4' }}> &#9829; </span> Lifestyle </h4>
                <img src={aishwarya} className='bg' id='id' alt='aishwarya' />
            </div>
        )
    }
}

export default Home;