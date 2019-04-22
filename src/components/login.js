import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

import '../App.scss';

ReactModal.setAppElement(document.getElementById('root'));

function Login(props)   {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  

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
      customers.map(customer => {
        if (customer.userName === email) {
          props.setUserData(customer);
        }
        return null;
      })
      props.history.replace('/app/home');
    } else {
      modalToggle();
    }

  }
    
    return (
      <div className="App">
        <img src={require("../logo.png")} alt={"invenio-logo"} />
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
            Zaboravljena <a href="#">lozinka</a>?
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


const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (userData) => {
      dispatch({
        type: 'LOGIN',
        user: userData
      })
    }
  }
}

export default connect(null ,mapDispatchToProps)(Login);