import React, { Component } from 'react';
import './about.css';
import { Row, Col } from 'reactstrap';
import about from './about.jpg';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Col className='scroll'>
                <Row>
                    <Col>
                        <img src={about} className="rounded-circle mt-5" alt="about" width="130%" />
                    </Col>
                    <Col xs='8' className='mt-5 ml-5 responsive' style={{ fontSize: '2em' }}>
                        A blog bringing out the latest trends, fashion, beauty and lifestyle.
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default About;