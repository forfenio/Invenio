import React, { useState } from 'react';



import '../App.scss';

function SignUpCustomer()   {

  
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(firstName);
    console.log(lastName);
    console.log(password);
    console.log(confirmPassword);

    if (password === confirmPassword && password !== "") { 

      fetch('http://localhost:3000/customers', {
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
      })
    }
  }
  
    
    return (
      
        
        <form className="customer" onSubmit={handleSubmit}>

          <input
            type="text"
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
       
      </form>
    );
  }


export default SignUpCustomer;