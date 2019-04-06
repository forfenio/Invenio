import React, { useState } from 'react';



import '../App.scss';

function SignUpBarbershop()   {

  
  const [email, setEmail] = useState("");
  const [barbershopName, setBarbershopName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(barbershopName);

    if (password === confirmPassword && password != "") { 

      fetch('http://localhost:3000/barbershops', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: email,
          password: password,
        })
      })
    }
  }
  
    
    return (
      
        
        <form className="barbershop" onSubmit={handleSubmit}>

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
       
      </form>
    );
  }


export default SignUpBarbershop;