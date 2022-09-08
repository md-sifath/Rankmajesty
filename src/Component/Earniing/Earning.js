import React, { useState } from 'react';
import Card from '../Card/Card';
import img1 from '../../Image/Group-546.svg';
import BasicTable from '../Table/BasicTable';
import Navbar from '../Layout/Navbar';
import SideNav from '../Layout/SideNav';
import './Earning.css';


const Earning = () => {
    const title = "Payment in process";
    const [isopen, setIsopen] = useState(false);
    const toggle = () => setIsopen(!isopen);
    return (
        <>
            <SideNav isopen={isopen} />
            <Navbar toggle={toggle} />
            <div className='main-content'>
                    <div className='container-fluid'>
                        <div className='main_div'>
                        <div className='row mt-5'>
                            <h4 className='page-title mb-3'>
                                Earning
                            </h4>
                        </div>
                            <div className="row mt-3">
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <Card img={img1}
                                            title={title}
                                            value={"$" + 1233.00}
                                        />
                                    </div>
                                    <div className='col-lg-3'>
                                        <Card img={img1}
                                            title={"Total Earnings"}
                                            value={"$" + 1233.00}
                                        />
                                    </div>
                                    <div className='col-lg-3'>
                                        <Card img={img1}
                                            title={"Earning(This Month)"}
                                            value={"$" + 1233.00}
                                        />
                                    </div>
                                    <div className='col-lg-3'>
                                        <Card img={img1}
                                            title={title}
                                            value={"$" + 1233.00}
                                        />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <h4 className="mt-2 head-title">Payment History</h4>
                                                <div className='mt-2'>
                                                    <BasicTable />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
               
            </div>
        </>
    );
};

export default Earning;