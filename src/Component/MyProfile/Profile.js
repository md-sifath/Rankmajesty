import React ,{useState} from 'react';
import SideNav from '../Layout/SideNav';
import Navbar from '../Layout/Navbar';
import pimg from '../../Image/rank-majesty-ha.png';
import img1 from '../../Image/Group-546.svg'
import img2 from '../../Image/Group-546.svg'

import Card from '../Card/Card';
import {BsEyeSlash} from 'react-icons/bs';
import {BsEye} from 'react-icons/bs';
import './profile.css';


import { useFileUpload } from 'use-file-upload';
const Profile = () => {
    const [country, setCountry] = useState();
  const [discount, setDiscount] = useState(0);
  const [quota, setQuota] = useState(0);
  const [visible1, setVisibility1] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [visible3, setVisibility3] = useState(false);

  // image File Upload


  const [files, selectFiles] = useFileUpload();

  const passwordShow1 = () => {
    setVisibility1((visible1) => !visible1);
  };
  const passwordShow2 = () => {
    setVisibility2((visible2) => !visible2);
  };
  const passwordShow3 = () => {
    setVisibility3((visible3) => !visible3);
  };

  // For SideBar
  const [isopen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isopen);


  return (
    <>
      <SideNav isopen={isopen}></SideNav>
      <Navbar toggle={toggle}></Navbar>
      <div className="main-content">
        <div className="main_div">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box">
                  <h4 className="page-title">Profile</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="card shadow">
                  <div className="card-body profile-user-box">
                    <div className="row">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <div className="avatar-section">

                            <div className="profile_img">
                              <img
                                src={files?.source || pimg}
                                alt="preview"
                              />
                              <small className="cameraImg"
                                onClick={() =>
                                  selectFiles(
                                    { accept: "image/*" },
                                    ({ name, size, source, file }) => {
                                      console.log("Files Selected", {
                                        name,
                                        size,
                                        source,
                                        file,
                                      });
                                    }
                                  )
                                }
                              >
                                <i className="fe fe-camera"></i>
                              </small>
                            </div>

                          </div>


                        </div>
                        <div className="">
                          <div className="user-detail-section">
                            <h4>
                              <b>
                                <span className="user-info-name site-text-black">
                                  Sudip paul
                                </span>
                              </b>
                            </h4>
                            <p className="text-mute">
                              <span>INDIVIDUAL</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row user_info_row">
                        <form action className="user-info-section">
                          <h4 className="mt-4 mb-3 site-text-black">
                            Basic Details
                          </h4>
                          <div className="mb-3">
                            <label for="simpleinput" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id
                              className="form-control user-info-name"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label for="simpleinput" className="form-label">
                              Email Address
                            </label>
                            <input
                              type="text"
                              id
                              className="form-control user-info-name"
                              readOnly
                              required
                            />
                          </div>
                          <h4 className="mt-5 mb-3 site-text-black">
                            Billing Address
                          </h4>
                          <div className="mb-3">
                            <input
                              type="text"
                              id="address1"
                              name="address1"
                              className="form-control form-control-sm height"
                              placeholder="street address"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              id="address2"
                              name="address2"
                              className="form-control form-control-sm height"
                              placeholder="street address Line 2"
                              required
                            />
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control form-control-sm height"
                                  id="city"
                                  name="city"
                                  placeholder="City"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control form-control-sm height"
                                  id="state"
                                  name="state"
                                  placeholder="State"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control form-control-sm height"
                                  id="zip"
                                  name="zip"
                                  placeholder="ZIP"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <select
                                  className="custom-select"
                                  value={country}
                                  onChange={(e) => {
                                    setCountry(e.target.value);
                                  }}
                                >
                                  <option vlaue="bangladesh">Bangladesh</option>
                                  <option vlaue="india">India</option>
                                  <option vlaue="pakistan">Pakistan</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary btn-active">
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="row">
                  <div className="col-sm-6">
                    <Card
                      title={"Your discount"}
                      value={discount + "%"}
                      img={img1}
                    />
                  </div>
                  <div className="col-sm-6">
                    <Card
                      title={"Remaining Unlock Quota"}
                      value={quota}
                      img={img2}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="card password-card shadow">
                      <div className="card-body">
                        <form>
                          <h3 className="mb-4 site-text-black fw-bold">
                            {" "}
                            Change password
                          </h3>
                          <div className="input-group input-group-merge mb-3">
                            <input
                              className="form-control form-control-sm"
                              type={visible1 ? "text" : "password"}
                              placeholder="Current Password"
                            ></input>
                            <span
                              className="input-group-text"
                              onClick={passwordShow1}
                            >
                              {visible1 ? (
                                <i>
                                  <BsEyeSlash />
                                </i>
                              ) : (
                                <i>
                                  <BsEye />
                                </i>
                              )}
                            </span>
                          </div>
                          <div className="input-group input-group-merge mb-3">
                            <input
                              className="form-control form-control-sm"
                              type={visible2 ? "text" : "password"}
                              placeholder="New Password"
                            ></input>
                            <span
                              className="input-group-text"
                              onClick={passwordShow2}
                            >
                              {visible2 ? (
                                <i>
                                  <BsEyeSlash />
                                </i>
                              ) : (
                                <i>
                                  <BsEye />
                                </i>
                              )}
                            </span>
                          </div>
                          <div className="input-group input-group-merge mb-3">
                            <input
                              className="form-control form-control-sm"
                              type={visible3 ? "text" : "password"}
                              placeholder="Confirm Password"
                            ></input>
                            <span
                              className="input-group-text"
                              onClick={passwordShow3}
                            >
                              {visible3 ? (
                                <i>
                                  <BsEyeSlash />
                                </i>
                              ) : (
                                <i>
                                  <BsEye />
                                </i>
                              )}
                            </span>
                          </div>
                          <button type="submit" className="btn btn-primary mb-3 btn-active">
                            Change Password
                          </button>
                        </form>
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
  )
};

export default Profile;