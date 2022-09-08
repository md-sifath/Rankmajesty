import React, { useState } from "react";
import './Layout.css';
import logo from '../../Image/rank-majesty-ha.png';
import { AiFillHome } from 'react-icons/ai';
import { FaDollarSign } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";


const SideNav = ({ isopen }) => {
    const [dropdown, setDropdown] = useState(false);
    const space=" ";
    const sidebarData = [
        {
            name: "Dashboard",
            path: "/",
            icon: <i><AiFillHome/></i>
        },
        {
            name: "Earning",
            path: "/earning",
            icon: <FaDollarSign />
        }
    ];
    return (
        <>
            <nav
                className={`navbar navbar-vertical fixed-start navbar-expand-md navbar-light ${isopen ? 'navbar-vertical-sm' : ''}`}
                id="sidebar"
            >

                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Brand --> */}
                    <Link to="/" className="navbar-brand" >
                        <img src={logo} className="navbar-brand-img mx-auto" alt="..." />
                    </Link>

                   


                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse " id="sidebarCollapse">


                        {/* <!-- Navigation --> */}
                        <ul className="navbar-nav">
                            {sidebarData.map((data, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink to={data.path} className="nav-link">
                                        {data.icon} {isopen ? '' : data.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default SideNav;