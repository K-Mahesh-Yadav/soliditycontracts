import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Web3 from 'web3';
import context from "./Components/contract";

const root = ReactDOM.createRoot(document.getElementById('root'));
async function set() {

  let accountobj;
  const ethereum = window.ethereum;
  if (window.ethereum !== undefined) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    accountobj=accounts[0];
  }

  const web3 = new Web3(window.ethereum);
  let ABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "j",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "x",
          "type": "string"
        }
      ],
      "name": "Approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "j",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "x",
          "type": "string"
        }
      ],
      "name": "ASC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "u",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "p",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "n1",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "x",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "y",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "z",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "a",
          "type": "string"
        }
      ],
      "name": "push_element",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "n",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod_id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "uid",
              "type": "string"
            }
          ],
          "internalType": "struct demoArray.l2",
          "name": "x",
          "type": "tuple"
        }
      ],
      "name": "Spush_element",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "j",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "s",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "n",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod_id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "uid",
              "type": "string"
            }
          ],
          "internalType": "struct demoArray.l2",
          "name": "x",
          "type": "tuple"
        }
      ],
      "name": "update",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "prod",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "n",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "prod_id",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyStructs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "n",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status1",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod_id",
              "type": "string"
            }
          ],
          "internalType": "struct demoArray.l1[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "len",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Sarr",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "prod",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "n",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "prod_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "uid",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SgetMyStructs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "n",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "prod_id",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "uid",
              "type": "string"
            }
          ],
          "internalType": "struct demoArray.l2[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Slen",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  let Address = "0x86EF82cd90F50d8f57f4a2B10e494c5FFEe75b4C";
  let ABI1 = [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "division",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "unit_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "details",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            }
          ],
          "internalType": "struct data.l1",
          "name": "x",
          "type": "tuple"
        }
      ],
      "name": "Register",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "division_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            }
          ],
          "internalType": "struct data.l2",
          "name": "x",
          "type": "tuple"
        }
      ],
      "name": "RegisterD",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "division_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "password",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr1",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "division",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "unit_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "details",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "password",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr2",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "password",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr3",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "man",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "password",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ASC",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            }
          ],
          "internalType": "struct data.l3[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_data",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "division",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "unit_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "details",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            }
          ],
          "internalType": "struct data.l1[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_divdata",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "division_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            }
          ],
          "internalType": "struct data.l2[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "manu",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "man",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "password",
              "type": "string"
            }
          ],
          "internalType": "struct data.l4[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  let Address1 = "0x8432a8af7dC57C6b5F0A4a930e284fa7137008eA";
  let contractobj = new web3.eth.contract(ABI, Address);
  let contract1obj = new web3.eth.contract(ABI1, Address1);

  root.render(
    <React.StrictMode>
      <context.Provider value={{ contract: contractobj, contract1: contract1obj , account:accountobj}}>
        <App />
      </context.Provider>
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
