import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal'

import './App.scss';

ReactModal.setAppElement(document.getElementById('root'));

function App(props)   {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // const [fetchedCustomers, setFetchedCustomers] = useState([]);
  // const [fetchedBarbershops, setFetchedBarbershops] = useState([]);
  
  // useEffect(() => {
 
  // });

  const modalToggle = () => {
    setShowModal(!showModal);
  }

  const contentStyle = {
    position: 'absolute',
    left: '7vw',
    textAlign: 'center',
    right: '7vw',
    width: '30vw',
    margin: '0 auto',
    border: 'none',
    background: 'moccasin',
    overflow: 'auto',
    borderRadius: '4px',
    bottom: 'unset',
    outline: 'none',
    padding: '35px',
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const barbershops = await (await fetch('http://localhost:3000/barbershops')).json();
    const customers = await (await fetch('http://localhost:3000/customers')).json();

    // console.log(customers);
    // console.log(barbershops);
    // console.log(password);
    // checkUser(barbershops, email, password);
    
    // console.log(checkUser(barbershops, email, password));
    
    if(checkUser(barbershops, email, password) || checkUser(customers, email, password)) {
      props.history.replace('/home');
    } else {
      modalToggle();
    }

  }
    
    return (
      <div className="App">
        <img src={require("./logo.png")} alt={"invenio-logo"} />
        <p>Pronađi najboljeg i najpovoljnijeg frizera u blizini.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail address"
            name="email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
            required
          />
          <input type="submit" value="PRIJAVA" />
        </form>
        <ReactModal
          isOpen={showModal}
          closeTimeoutMS={200}
          style={{content: contentStyle}}
        >
          <div>Please enter valid email and password.</div>
          <button onClick={modalToggle} className="modal-button">OK</button>
        </ReactModal>
        <div>
          <span>
            Izradi <Link to="/signup">Novi račun</Link>
          </span>
          <span>
            Zaboravljena <a>lozinka</a>?
          </span>
        </div>
        
      </div>
      
    );
} 

function checkUser(arr, email, password) {
  return arr.some(el => {
    return el.userName === email && el.password === password
  })
}

export default App;
