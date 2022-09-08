import React from "react";
import { Link } from "react-router-dom";

import p_img from "../../Image/rank-majesty-ha.png";
import "./Layout.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="main-content">
        <nav className="navbar navbar-light d-none d-md-block ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" onClick={toggle}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-user">
              <div className="dropdown">
                {/* <!-- Toggle --> */}
                <a
                  href={() => false}
                  id="NotifyIcon"
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="icon icon_bell">
                    <i class="fe fe-bell"></i>
                  </span>
                </a>

                {/* <!-- Menu --> */}
                <div
                  className="dropdown-menu notify_dropdown  mt-3"
                  aria-labelledby="NotifyIcon"
                >
                  <div className="notify">
                    <div className="notifyHeader d-flex justify-content-between ">
                      <div className="notifyH1">
                        <h3>Notification</h3>
                      </div>
                      <div className="sellAll">
                        <p>Mark All as Read</p>
                      </div>
                    </div>
                    <div className="notify-details">
                      <div className="singleNotify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque ea molestias blanditiis aut omnis minima
                          consectetur voluptate cum odit magnam.
                        </p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                      <div className="singleNotify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque ea molestias blanditiis aut omnis minima
                          consectetur voluptate cum odit magnam.
                        </p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                      <div className="singleNotify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque ea molestias blanditiis aut omnis minima
                          consectetur voluptate cum odit magnam.
                        </p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                      <div className="singleNotify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque ea molestias blanditiis aut omnis minima
                          consectetur voluptate cum odit magnam.
                        </p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                      <div className="singleNotify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque ea molestias blanditiis aut omnis minima
                          consectetur voluptate cum odit magnam.
                        </p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                    </div>

                    <div className="notifyFooter pt-3">
                      <div className="d-flex justify-content-center text-center">
                        <Link to="/notification">View All</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="myWallet_nav ml-4">
                <Link to="/mywallet" className="btn btn-wallet">
                  $2323
                </Link>
                <div className="hover_wallet ">
                  <div className="myWallet_nav_txt d-flex justify-content-between">
                    <div>Wallet</div> <div>$70.00</div>
                  </div>
                  <div className=" myWallet_nav_txt myWallet_nav_txt2 d-flex justify-content-between">
                    <div>On Hold</div> <div>$00.00</div>
                  </div>

                  <div className="myWallet_nav_txt myWallet_nav_txt3 d-flex justify-content-between">
                    <div>Net Balance</div> <div>$70.00</div>
                  </div>
                </div>
              </div>

              <h4 className="mt-2 profile">Rakibul Hasan</h4>

              <div className="dropdown">
                {/* <!-- Toggle --> */}
                <a
                  href={() => false}
                  id="sidebarIcon"
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-sm avatar-online">
                    <img
                      src={p_img}
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </div>
                </a>

                {/* <!-- Menu --> */}
                <div
                  className="dropdown-menu dropdown-menu-end mt-3"
                  aria-labelledby="sidebarIcon"
                >
                  <Link to="/myprofile" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/mywallet" className="dropdown-item ">
                    MyWallet($ 70.00)
                  </Link>
                  <Link to="/signin" className="dropdown-item">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <SideNav></SideNav> */}
    </>
  );
};

export default Navbar;
