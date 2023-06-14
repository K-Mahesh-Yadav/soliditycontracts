import React, { useEffect, useState } from 'react';

const RequestForm = (props) => {
    const [x,setx]=useState("");
    useEffect(() => {
        setx(localStorage.getItem('user'));
        document.getElementById('user_name').innerText = x;
        console.log(x);
    }, []);


    const add = async () => {

        const m2 = document.getElementById('n2').value;
        const m3 = document.getElementById('n3').value;
        const m4 = document.getElementById('date').value;
        const m5 = new Date().getTime();
        console.log(x, m2, m3, m4, 'pending', 'pending', '' + m5);

        await window.contract.methods.push_element(x, m2, m3, m4, 'pending', 'pending', '' + m5)
            .send({ from: props.name})
            .then((result) => {
                document.getElementById('sucessful').innerHTML = `<b><p>Officer, your request has been added to the Blockchain. Other officers can now view and reply to your request.</p><p>You can view its status <a href="/AdrrRequests">here</a></p></b>`;
            })
            .catch((err) => {
                console.error(err);
            });
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
            <br />
            <br />
            <br />
            <div className="container">
                <h6>Request Form</h6>
                <br />
                <div className="form">
                    <p>
                        Product :{' '}
                        <input type="text" id="n2" list="Lists" />
                        <datalist id="Lists">
                            <option value="milk" />
                            <option value="eggs" />
                            <option value="chana" />
                            <option value="carrot" />
                            <option value="beetroot" />
                            <option value="eggs" />
                            <option value="Rice" />
                            <option value="Wheat" />
                            <option value="meat" />
                        </datalist>
                    </p>
                    <br />
                    <p>
                        Quantity : <input type="number" name="quantity" placeholder="quantity" id="n3" />
                    </p>
                    <br />
                    <p>
                        Last Date for contract : <input type="date" name="date" id="date" />
                    </p>
                    <br />
                    <button onClick={add} type="submit">
                        Submit
                    </button>
                    <br />
                    <br />
                    <div id="sucessful"></div>
                </div>
                <p id="sum"></p>
            </div>
        </>
    );
};

export default RequestForm;
