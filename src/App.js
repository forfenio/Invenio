import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import SignUp from './components/signUp';

function App()   {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    
    return (
      <div className="App">
        <img src={require("./logo.png")} alt={"invenio-logo"} />
        <p>Pronađi najboljeg i najpovoljnijeg frizera u blizini.</p>
        <form>
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
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
            required
          />
          <button>PRIJAVA</button>
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


export default App;
