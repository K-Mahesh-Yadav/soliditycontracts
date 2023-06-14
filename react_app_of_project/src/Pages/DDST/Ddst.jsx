import React, { useEffect } from 'react';

async function DDSTDashboard() {
  useEffect(() => {
    const get = () => {
      const x = localStorage.getItem('user');
      document.getElementById('user_name').innerHTML = x;
      console.log(x);
    };
    get();
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Sathyameva Jayathe</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
          </div>
        </div>
        <div>
          <div id="user_name" style={{ color: 'aliceblue' }}></div>
        </div>
        <div>
          <a className="nav-item nav-link active" href="/Login">
            <button className="bg-primary" style={{ margin: '0 30px' }}>Logout</button>
          </a>
        </div>
      </nav>
      <br /><br /><br />
      <h1 style={{ textAlign: 'center' }}>DDST dashboard</h1>
      <div className="container position-absolute">
        <div className="row 1">
          <a href="/DdrrRequests"><button className="btn btn-dark" style={{ width: 'max-content', marginBottom: '20px' }}>RECEIVED REQUESTS</button></a>
        </div>
        <div className="row 3">
          <a href="RequestsSent.html"><button className="btn btn-dark" style={{ width: 'max-content', marginBottom: '20px' }}>ALL REQUESTS</button></a>
        </div>
      </div>
    </div>
  );
}

export default DDSTDashboard;
