import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.scss';





function App(props)   {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [fetchedCustomers, setFetchedCustomers] = useState([]);
  // const [fetchedBarbershops, setFetchedBarbershops] = useState([]);
  
  // useEffect(() => {
  //   fetch('http://localhost:3000/barbershops')
  //     .then(response => response.json())
  //     .then(data => setFetchedBarbershops(data));

  //   // fetch('http://localhost:3000/customers')
  //   //   .then(response => response.json())
  //   //   .then(data => setFetchedCustomers(data));

  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const barbershops = await (await fetch('http://localhost:3000/barbershops')).json();
    const customers = await (await fetch('http://localhost:3000/customers')).json();
    
      // fetch('http://localhost:3000/barbershops')
      // .then(response => response.json())
      // .then(data => setFetchedBarbershops(data))
    

    console.log(customers);
    console.log(barbershops);
    // console.log(password);
    // checkUser(barbershops, email, password);
    
    console.log(checkUser(barbershops, email, password));

    
    if(checkUser(barbershops, email, password) || checkUser(customers, email, password)) {
      props.history.replace('/home');
    }

    // console.log(fetchedBarbershops);
    
  }

//return <Redirect to='/home' />


  
    
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

// function useFetchBarbershops () {
//   const [fetchedBarbershops, setFetchedBarbershops] = useState([]);

//   useEffect(() => {
    
//   })
  

//   return fetchedBarbershops;
      
// }


function checkUser(arr, email, password) {
  return arr.some(el => {
    return el.userName === email && el.password === password
  })
}



export default App;
