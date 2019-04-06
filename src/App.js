import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import SignUp from './components/signUp';



function App()   {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchedCustomers, setFetchedCustomers] = useState([]);
  const [fetchedBarbershops, setFetchedBarbershops] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/barbershops')
      .then(response => response.json())
      .then(data => setFetchedBarbershops(data));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    console.log(checkUser(fetchedBarbershops, email, password));

    if (checkUser(fetchedBarbershops, email, password)) {
      console.log("loggedin");
    } else {
      console.log("fail");
    }

    console.log(fetchedBarbershops);

   

    
  }
  
    
    return (
      <div className="App">
        <img src={require("./logo.png")} alt={"invenio-logo"} />
        <p>Pronađi najboljeg i najpovoljnijeg frizera u blizini.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
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
