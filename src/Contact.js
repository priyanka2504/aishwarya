import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './App.css';
import facebook from './facebook.png';
import instagram from './instagram.png';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Container className='scroll'>
                <Form className='mt-5 ml-5 mr-5'>
                <form action='mailto:rasberryme16@gmail.com' method='post' enctype='text/plain'>
                    <Container>
                        <Row>
                           
                            <Col md={6}>
                                <FormGroup>
                                    <Label for='First Name'>First Name</Label>
                                    <Input type='text' name='First Name' placeholder='Enter your First Name' />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for='Last Name'>Last Name</Label>
                                    <Input type='text' name='Last Name' placeholder='Enter your Last Name' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for='Email ID'>Email</Label>
                            <Input type='email' name='Email ID' placeholder='Enter your Email ID' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='Comments'>Comments</Label>
                            <Input type='textarea' name='Comments' placeholder='We would like to hear from you :)' />
                        </FormGroup>
                        <Button style={{ width: '9em' }} > Submit </Button>
                    </Container>
                    </form>
                </Form>
                <Row className='mt-5'>
                    <Col>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            </Col>
                            <Col className='mt-3' style={{ fontSize: '1.3em' }}> <u> <b> Follow Us </b> </u> </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                <Row>
                                    <a href='https://www.facebook.com/Aishwarya-Kripakaran-2290191221214664/' target='_blank' rel='noopener noreferrer'>
                                        <img className='ml-4' alt='facebook' title='facebook' src={facebook} /> </a>
                                    <a href='https://instagram.com/aishwaryakripakaran?utm_source=ig_profile_share&igshid=jfrwwapljks0' target='_blank' rel='noopener noreferrer'>
                                        <img className='ml-3' alt='instagram' title='instagram' src={instagram} /> </a>
                                </Row>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact;