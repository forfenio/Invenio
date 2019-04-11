import React, { useState } from 'react';
import ReactModal from 'react-modal';

import '../App.scss';

ReactModal.setAppElement(document.getElementById('root'));

function SignUpCustomer()   {

  
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const customers = await (await fetch('http://localhost:3000/customers')).json();
    // console.log(email);
    // console.log(firstName);
    // console.log(lastName);
    // console.log(password);
    // console.log(confirmPassword);

    if (!checkUser(customers, email) && password === confirmPassword) {
      await fetch('http://localhost:3000/customers', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName: email,
              firstName: firstName,
              lastName: lastName,
              password: password
            })
      }).then(() => {
          setModalText("Your account has been created successfully.");
          setEmail("");
          setFirstName("");
          setLastName("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch(() => setModalText("Check your internet connection."))
      modalToggle();
    } else {
        let mText = checkUser(customers, email) ? "Email is already in use." : "Password does not match.";
        setModalText(mText);
        modalToggle();
    }
  }

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
  
    
    return (
      
        
        <form className="customer" onSubmit={handleSubmit}>

          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail address"
            name="email"
            required
          />
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Ime"
            name="firstName"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Prezime"
            name="lastName"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Lozinka"
            name="password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Potvrdi lozinku"
            name="confirmPassword"
            required
          />
          <input type="submit" value="REGISTRACIJA" />
          <ReactModal
            isOpen={showModal}
            closeTimeoutMS={200}
            style={{content: contentStyle}}
          >
            <div>{modalText}</div>
            <button onClick={modalToggle} className="modal-button">OK</button>
          </ReactModal>
       
      </form>
    );
  }

function checkUser(arr, email) {
  return arr.some(el => {
    return el.userName === email
  })
}

export default SignUpCustomer;