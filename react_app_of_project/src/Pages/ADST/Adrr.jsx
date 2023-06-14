import React, { useEffect, useState } from 'react';

function Dashboard(props) {
  const [data, setData] = useState([]);
  // const contract = props.contract
  useEffect(() => {
    const get = async () => {

      const x = localStorage.getItem('user');
      document.getElementById('user_name').innerText = x;
      console.log(x);
      let y,y1,d1;
      console.log(window.contract);
      if (window.contract.methods !== undefined) {
        const datar = await window.contract.methods.getMyStructs().call();
        setData(datar);
        y = await window.contract1.methods.get_data().call();
        y1 = await window.contract1.methods.get_divdata().call();
        d1 = await window.contract.methods.getMyStructs().call();
        console.log(y,y1,d1,)
  
        let tabledata = '';
        let l, d;
        for (let j = 0; j < y.length; j++) {
          if (x === y[j][1]) {
            d = y[j][0];
          }
        }
  
        for (let j = 0; j < y1.length; j++) {
          if (d === y1[j][0]) {
            d = y1[j][1];
          }
        }
  
        for (let i = 0; i < datar.length; i++) {
          let f = 0;
          for (let j = 0; j < y.length; j++) {
            if (data[i][0] === y[j][1]) {
              l = y[j][0];
            }
          }
  
          for (let j = 0; j < y1.length; j++) {
            if (l === y1[j][0]) {
              l = y1[j][1];
            }
          }
  
          for (let m = 0; m < d1.length; m++) {
            if (d1[m][5] === data[i][6] && d1[m][6] === x) {
              f = 1;
            }
          }
  
          if (
            ((datar[i][0] !== x && d === l && f === 0 && datar[i][4] === d) && datar[i][5] !== 'Approved') ||
            (datar[i][5] === 'ASC' && datar[i][0] !== x && d !== l && f === 0)
          ) {
            tabledata += `
              <tr>
                <td>${datar[i][0]}</td>
                <td>${datar[i][1]}</td>
                <td>${datar[i][2]}</td>
                <td>${datar[i][3]}</td>
                <td>${datar[i][4]}</td>
                <td>
                  <button onclick={() => quote(${i})} className="bg-success">Accept</button>
                  <button onclick={() => reject(${i})} className="bg-danger">Reject</button>
                </td>
              </tr>
            `;
          }
        }
  
  
        document.getElementById('tablebody').innerHTML = tabledata;
      }
    };

    get();
  }, []);

  const quote = async (i) => {
    const x = localStorage.getItem('user');
    const arr = new Array(7);
    arr[0] = data[i][0];
    arr[1] = data[i][1];
    arr[2] = data[i][2];
    arr[3] = data[i][3];
    arr[4] = 'Approved';
    arr[5] = data[i][6];
    arr[6] = x;
    await window.contract.methods.Spush_element(arr).send({ from: props.name });
    await window.contract.methods.Approve(i, x).send({ from: props.name });
  };

  const reject = async (i) => {
    const x = localStorage.getItem('user');
    const arr = new Array(7);
    arr[0] = data[i][0];
    arr[1] = data[i][1];
    arr[2] = data[i][2];
    arr[3] = data[i][3];
    arr[4] = 'Rejected';
    arr[5] = data[i][6];
    arr[6] = x;
    await window.contract.methods.Spush_element(arr).send({ from: props.name });
  };

  return (
    <div>
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
          <a className="nav-item nav-link active" href="/">
            <button className="bg-primary" style={{ margin: '0 30px' }}>Logout</button>
          </a>
        </div>
      </nav>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Requests Received</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Sent To</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Status</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody id="tablebody"></tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
