import React from 'react';
import { useState } from 'react';
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import { InputGroup, Form, Button } from 'react-bootstrap';
import Card from '../Card/Card';
import img from '../../Image/Group-546.svg';
import './Layout.css';

const Layout = () => {
    const [isopen, setIsopen] = useState(false);
    const toggle = () => setIsopen(!isopen);


    return (
        <>
            <SideNav isopen={isopen}></SideNav>
            <Navbar toggle={toggle}></Navbar>

            <div className='main-content'>
                <div className='main_div'>
                    <div className='container-fluid'>
                        <div className='row mt-5'>
                            <h4 className='page-title mb-3'>Dashboard</h4>
                        </div>
                        <div className='card mt-3'>
                            <div className='card-body'>
                                <h4 className='mt-3 mb-3 text-primary'> Share & Earn Comission</h4>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Enter your Url"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Copy
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-lg-2 mb-3'>
                                <select className="form-select">
                                    <option value='30 Days'>Last 30 days</option>
                                    <option value='6 Months'>Last 6 months</option>
                                    <option value='12 Months'>Last 12 months</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-lg-3'>
                                <Card img={img}
                                    title={"Click"}
                                    value={"1880"}
                                />
                            </div>
                            <div className='col-lg-3'>
                                <Card img={img}
                                    title={"Sign Up"}
                                    value={"200"}
                                />
                            </div>
                            <div className='col-lg-3'>
                                <Card img={img}
                                    title={"Earning"}
                                    value={"200"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Layout;