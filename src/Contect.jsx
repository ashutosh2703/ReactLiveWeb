import React, { useState } from 'react';

function Contect() {
  const [data,setdata]=useState({
    fullname:'',
    email:'',
    phone:''
  });
  const inputEvent=(event)=>{
    const {name,value}=event.target;
    setdata((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    });
  }
  const subevent=(e)=>{
    e.preventDefault();
     alert(`Dear ${data.fullname} your phone no. :- ${data.phone} And Email :- ${data.email} has been recorded,our team contact you soon !Thank you `);
  }
  return (
   <>
    <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={subevent}>
        <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" name='fullname' value={data.fullname} onChange={inputEvent}  class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' value={data.email} onChange={inputEvent} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone no.</label>
    <input type="number" name='phone' value={data.phone} onChange={inputEvent} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        </div>
      </div>
   </>
  );
}

export default Contect;