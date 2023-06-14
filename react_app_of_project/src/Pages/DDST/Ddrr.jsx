import React, { useEffect, useState } from 'react';
import ConnectToSmartContract from '../Components/Smartcontract';

function RequestReceived(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const x = localStorage.getItem('user');
      document.getElementById('user_name').innerHTML = `${x}`;
      console.log(x);
      
      const data = await window.contract.methods.getMyStructs().call();
      setData(data);
      const y = await window.contract1.methods.get_data().call();
      const y1 = await window.contract1.methods.get_divdata().call();
      const d1 = await window.contract.methods.SgetMyStructs().call();
      let tabledata = '';
      let l, c = 1, n, count = 0, f;

      for (let i = 0; i < data.length; i++) {
        c = 1;
        count = 0;
        f = 0;

        if (data[i][5] !== 'Approved') {
          for (let j = 0; j < y.length; j++) {
            if (data[i][0] === y[j][1]) {
              l = y[j][0];
              break;
            }
          }

          for (let j = 0; j < y1.length; j++) {
            if (l === y1[j][0]) {
              l = y1[j][1];
            }

            if (x === y1[j][1]) {
              n = y1[j][0];
            }
          }

          for (let j = 0; j < y.length; j++) {
            if (n === y[j][0]) {
              count++;

              for (let k = 0; k < d1.length; k++) {
                if (d1[k][6] === y[j][1] && d1[k][5] === data[i][6]) {
                  c++;
                  f = 1;
                }
              }
            }
          }

          if (data[i][5] === 'ASC') {
            count += 1;
          }

          if (c !== count) {
            if (((l === x && data[i][4] !== x && data[i][4] !== 'Approved') || (data[i][5] === 'ASC' && data[i][4] !== x)) && f !== 1) {
              tabledata += `
                <tr>
                  <td>${data[i][0]}</td>
                  <td>${data[i][1]}</td>
                  <td>${data[i][2]}</td>
                  <td>${data[i][3]}</td>
                  <td>${data[i][4]}</td>
                  <td><Button onClick={() => quote(${i})} className="bg-primary">Forward To Units</Button></td>
                </tr>
              `;
            }
          } else {
            if (((l === x && data[i][4] !== 'ASC' && data[i][5] !== 'Approved') || (data[i][5] === 'ASC' && f !== 1))) {
              tabledata += `
                <tr>
                  <td>${data[i][0]}</td>
                  <td>${data[i][1]}</td>
                  <td>${data[i][2]}</td>
                  <td>${data[i][3]}</td>
                  <td>${data[i][4]}</td>
                  <td><button onClick={() => quote(${i})}>Forward To DGST</button></td>
                </tr>
              `;
            }
          }
        }

        document.getElementById('tablebody').innerHTML = tabledata;
      }
    };

    get();
  }, []);

  const quote = async (i) => {
    const x = localStorage.getItem('user');

    const arr = [];
    if (data[i][4] === x) {
      arr[0] = data[i][0];
      arr[1] = data[i][1];
      arr[2] = data[i][2];
      arr[3] = data[i][3];
      arr[4] = 'Forwarded to Asc';
      arr[5] = data[i][6];
      arr[6] = x;
      await window.contract.methods.update(i, 'ASC', arr).send({ from: props.name });
    } else {
      arr[0] = data[i][0];
      arr[1] = data[i][1];
      arr[2] = data[i][2];
      arr[3] = data[i][3];
      arr[4] = 'Forwarded to units';
      arr[5] = data[i][6];
      arr[6] = x;
      await window.contract.methods.update(i, x, arr).send({ from: props.name });
    }
  };

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
          <a className="nav-item nav-link active" href="/">
            <button className="bg-primary" style={{ margin: '0 30px' }}>Logout</button>
          </a>
        </div>
      </nav>
      <br /><br /><br />
      <h2 style={{ textAlign: 'center' }}>Request Received</h2>
      <table className="table">
        <thead>
          <tr>
            <th>From</th>
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
  );
}

export default RequestReceived;
