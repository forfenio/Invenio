import React, { useState } from 'react';
import ReactModal from 'react-modal';

import '../App.scss';

ReactModal.setAppElement(document.getElementById('root'));

function SignUpBarbershop() {

  
  const [email, setEmail] = useState("");
  const [barbershopName, setBarbershopName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const barbershops = await (await fetch('http://localhost:3000/barbershops')).json();
    console.log(email);
    console.log(barbershopName);

    if (!checkUser(barbershops, email) && password === confirmPassword) {
       fetch('http://localhost:3000/barbershops', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName: email,
              barbershopName: barbershopName,
              password: password
            })
      }).then(() => {
          setModalText("Your account has been created successfully.")
          setEmail("");
          setBarbershopName("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch(() => setModalText("Check your internet connection."))
      modalToggle();
      
    } else {
        let mText = checkUser(barbershops, email) ? "Email is already in use." : "Password does not match.";
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
      
        
        <form className="barbershop" onSubmit={handleSubmit}>

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
            value={barbershopName}
            onChange={e => setBarbershopName(e.target.value)}
            placeholder="Ime salona"
            name="barbershopName"
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

export default SignUpBarbershop;