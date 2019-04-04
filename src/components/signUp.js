import React, { useState } from 'react';
import { SegmentedControl } from 'segmented-control'


import '../App.scss';

function SignUp()   {

  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
    
    return (
      <div className="sign-up">
        
        <form>

          <SegmentedControl
            name="friDefault"
            options={[
                { label: "FRIZER", value: "frizer", default: true },
                { label: "KLIJENT", value: "klijent" }
            ]}
            onChange={newValue => setType(newValue)}
          />
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
          <button>REGISTRACIJA</button>
        </form>
      </div>
    );
  }


export default SignUp;