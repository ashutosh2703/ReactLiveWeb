import React from 'react';
import web from "../src/images/img2.svg";
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
    <>
      <section id='header' className='d-flex align-items-center' style={{ padding: '170px 0' }}>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <h1>{props.name} <strong className="brand-name">Ashu's site</strong></h1>
                  <h2 className='my-3'> we are the team of talented developers making websites </h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn btn-outline-primary'>{props.btname}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={web} className='img-fluid animated' alt='Home img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
