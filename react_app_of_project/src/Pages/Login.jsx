import React, { useState, useEffect } from 'react';
import "./Components/img/peakpx.jpg";


const Login = () => {
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {

    const x = await window.contract1.methods.get_data().call();
    const x1 = await window.contract1.methods.get_divdata().call();
    const x2 = await window.contract1.methods.ASC().call();
    const x3 = await window.contract1.methods.manu().call();

    let userFound = false;

    for (let i = 0; i < x.length; i++) {
      if (x[i][2] === userInput && password === x[i][3]) {
        userFound = true;
        localStorage.setItem("user",x[i][1]);
        window.location.href = '/ADSTDashboard';
      }
    }

    if (!userFound) {
      for (let i = 0; i < x1.length; i++) {
        if (x1[i][0] === userInput && password === x1[i][2]) {
          userFound = true;
          localStorage.setItem('user',x1[i][1]) ;
          window.location.href = '/DDSTDashboard';
        }
      }
    }

    if (!userFound) {
      for (let i = 0; i < x2.length; i++) {
        if (x2[i][0] === userInput && x2[i][2] === password) {
          userFound = true;
          console.log('hhiii');
          localStorage.setItem('user',x2[i][1]);
          // window.location.href = '/DGST';
        }
      }
    }

    if (!userFound) {
      for (let i = 0; i < x3.length; i++) {
        if (x3[i][0] === userInput && password === x3[i][2]) {
          userFound = true;
          localStorage.setItem('user',x3[i][1]);
          // window.location.href = 'http://127.0.0.1:5500/Manufacturer.html';
        }
      }
    }

    if (!userFound) {
      setLoginError('Invalid credentials');
    }
  };

  useEffect(() => {
  
  }, []);

  return (
    <section className="vh-100" style={{ backgroundImage: 'url(../Component/img/peakpx.jpg)', color: 'black' }}>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
          style={{ marginTop: '40px' }}
        >
          Process Flow
        </button>
        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src="../prerequesties/processflow.jpeg" width="100%" height="100%" alt="Process Flow" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '250px', maxWidth: '500px', border: '2px solid black', padding: '15px' }} >
          <div className="form-group row">
            <label htmlFor="user_id" className="col-sm-2 col-form-label">User ID</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="user_id"
                placeholder="Enter User ID here"
                value={userInput}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button type="button" className="btn btn-primary" style={{ minWidth: '200px' }} onClick={handleSubmit}>
            Login
          </button>
          <br /><br />
        </div>
        <div id="login404" style={{ color: 'red' }}>{loginError}</div>
      </div>
    </section>
  );
};

export default Login;
