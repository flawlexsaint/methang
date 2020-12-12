import React from "react";
import "./Landing.css";

import Logo from "./assets/Frame.svg";
import Group from "./assets/Mask Group.png";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Twitter from "./assets/Vector.svg";
import XMLID from "./assets/XMLID 32.svg";
import Chair from "./assets/image10.png";

const Landing = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 navigation d-flex align-items-center justify-content-center">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 bg d-flex align-items-center">
          <div className="custom-container">
            <div className="row">
              <div className="col-md-5 d-flex align-items-center">
                <div className="container">
                  <h1 className="title mt-5">
                    Coming <br /> So<span className="soon-style">on</span>
                  </h1>
                  <div className="mt-5">
                    <p className="text">
                      We are currently working on giving you the best online
                      shopping experience. Feel free to reach out to us over
                      email or drop us a call
                    </p>
                    <div className="mt-5 btn_area">
                      <button className="email_btn">Send Email</button>
                      <button className="call_btn">Call 07081463459</button>
                    </div>
                  </div>
                  <div className="social_area mt-8">
                    <span className="social_text">
                      Connect With Us{" "}
                      <img src={Facebook} className="ml-3" alt="" />
                      <img src={Twitter} className="ml-3" alt="" />
                      <img src={Instagram} className="ml-3" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <span className="col-md-1"></span>
              <div className="col-md-5 custom_margin_top">
                <div className="position-relative">
                  <img src={Group} className="card_img" alt="" />
                  <div className="card-img-overlay right_design">
                    <img src={XMLID} className="" alt="" />
                  </div>
                  <div className="card-img-overlay design_2">
                    <img src={XMLID} className="" alt="" />
                  </div>
                  <div className="card-img-overlay design_3">
                    <img src={XMLID} className="" alt="" />
                  </div>
                  <div className="card-img-overlay overlay d-flex align-items-center">
                    <img src={Chair} className="chair" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container social_footer">
              <span className="social_text">
                Connect With Us <img src={Facebook} className="ml-3" alt="" />
                <img src={Twitter} className="ml-3" alt="" />
                <img src={Instagram} className="ml-3" alt="" />
              </span>
            </div>
            <p className="footer mt-186">
              (c) 2021 Methang. Beat the <br /> difference. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
