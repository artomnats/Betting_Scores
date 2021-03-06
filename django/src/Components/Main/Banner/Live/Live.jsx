import React from 'react'
import {
    Card,
    Tabs,
    Tab,
    Accordion,
    Button,
    ListGroup,
    Row,
    Col,
    Container,
    ToggleButtonGroup,
    ToggleButton,
    Breadcrumb,
    ButtonToolbar

} from 'react-bootstrap'

import "../Banner.css"
import "./Live.css"

import Romania from "../../../../Images/romania.svg"
import Italy from "../../../../Images/italy.svg"

const Live = () => {
    return (
        <div className="live-container">

            <Card className="py-4 px-3 accord_btns">
                            <ButtonToolbar>
                                    <Button className="according_filter mx-1" variant="light">
                                        <span className="text-white">ALL</span>
                                    </Button>
                                    <Button className="according_filter mx-1" variant="light">
                                        <span className="text-primary">A</span>  
                                    </Button>
                                    <Button className="according_filter mx-1" variant="light">
                                        <span className="text-success">B</span> 
                                    </Button>
                                    <Button className="according_filter mx-1" variant="light">
                                        <span className="text-danger">C</span>  
                                    </Button>
                                    <Button className="according_filter mx-1" variant="light">
                                        <span className="text-warning">D</span> 
                                    </Button>
                            </ButtonToolbar>
                        </Card>
            <Card>                        
                            <Card.Header className="banner-header">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="according">
                                    <div className="text-white link-toggle">
                                        <img src={Italy} alt="ITALY"/>
                                        <span className="ml-4">ITALY-SERIE B</span>
                                    </div>
                                </Accordion.Toggle>
                            </Card.Header>             
                            <Accordion.Collapse eventKey="0" className="accorting-container">
                           
                                <Row>
                                    <Col md={8}>
                                        <Card.Body className="acordion-body">
                                                <ListGroup variant="flush" className="acordion-body">
                                                    <ListGroup.Item>
                                                        <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Central Norte</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">1</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">2</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Martin Formosa</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Crucero del Norte</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">4</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Villa Dalmine</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-warning">D</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Boca Unidos</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">2</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">1</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Instituto</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-primary">A</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Club A. Guemes</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">1</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">2</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Alvarado</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-danger">C</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Real Potosi</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">4</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Deportivo Moron</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>

                                                </ListGroup>
                                        </Card.Body>
                                    </Col>
                                    <Col md={4}>
                                        <Card.Body className="acordion-body">

                                        </Card.Body>
                                    </Col>
                                </Row>
                             
                                
                                
                            </Accordion.Collapse>
                        </Card>
            <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <div className="text-white link-toggle">
                                    <img src={Romania} alt="ROMANIA"/>
                                    <span className="ml-4">ROMANIA-LIGA 1</span>
                                </div>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">

                                <Card.Body className="acordion-body">
                                <ListGroup variant="flush" className="acordion-body">
                                                    <ListGroup.Item>
                                                        <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Central Norte</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">1</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">2</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Martin Formosa</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Crucero del Norte</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">4</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Villa Dalmine</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Boca Unidos</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">2</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">1</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Instituto</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Club A. Guemes</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">1</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">2</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Alvarado</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Real Potosi</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">4</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Deportivo Moron</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                    <div className="w-100 d-flex">
                                                            <div className="w-5">             
                                                                <Button className="list-btns padding-none" variant="light">
                                                                    <span className="">FT</span> 
                                                                </Button>     
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">San Jose</p>
                                                            </div>
                                                            <div className="w-10">
                                                                <div className="d-flex justify-content-center">
                                                                    <span className="text-white ml-1">0</span>
                                                                    <span className="text-white">:</span>
                                                                    <span className="text-white mr-1">3</span>
                                                                </div>
                                                            </div>
                                                            <div className="w-40">
                                                                <p className="text-white text-center mb-0">Guabira</p>
                                                            </div>
                                                            <div className="w-5">
                                                                <Button className="list-btns" variant="light">
                                                                    <span className="text-success">B</span> 
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>

                                                </ListGroup>
                                </Card.Body>

                            </Accordion.Collapse>
                        </Card>
                          
        </div>
    )
}

export default Live