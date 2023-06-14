import React, { useEffect } from 'react';

const ADSTDashboard = () => {
  useEffect(() => {
    get();
  }, []);

  const get = () => {
    const x = localStorage.getItem('user');
    document.getElementById('user_name').innerText = x;
    console.log(x);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          Sathyameva Jayathe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home<span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
        <div>
          <div id="user_name" style={{ color: 'aliceblue' }}></div>
        </div>
        <div>
          <a className="nav-item nav-link active" href="/">
            <button className="bg-primary" style={{ margin: '0 30px' }}>
              Logout
            </button>
          </a>
        </div>
      </nav>

      <div className="container">
        <br />
        <br />
        <div className="container position-absolute">
          <div className="row 0">
            <a href="/request">
              <button
                className="btn btn-dark"
                style={{
                  width: 'max-content',
                  marginTop: '100px',
                  marginBottom: '20px',
                }}
              >
                REQUEST FOR SUPPLIES
              </button>
            </a>
          </div>
          <div className="row 1">
            <a href="/AdrrRequests">
              <button
                className="btn btn-dark"
                style={{ width: 'max-content', marginBottom: '20px' }}
              >
                Get RECEIVED REQUESTS
              </button>
            </a>
          </div>
          <div className="row 2">
            <a href="RequestsSent.html">
              <button
                className="btn btn-dark"
                style={{ width: 'max-content', marginBottom: '20px' }}
              >
                Get ALL REQUESTS
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};


export default ADSTDashboard;
