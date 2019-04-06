import React, { useState } from 'react';



import '../App.scss';

function SignUpBarbershop()   {

  
  const [email, setEmail] = useState("");
  const [barbershopName, setBarbershopName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
    
    return (
      
        
        <form className="barbershop">

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
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Lozinka"
            name="password"
            required
          />
          <input
            type="text"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Potvrdi lozinku"
            name="confirmPassword"
            required
          />
          <button>REGISTRACIJA</button>
       
      </form>
    );
  }


export default SignUpBarbershop;