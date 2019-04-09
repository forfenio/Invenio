import React, { useState } from 'react';
import { SegmentedControl } from 'segmented-control'


import SignUpChild from './signUpChild';


import '../App.scss';

function SignUp()   {

    const [type, setType] = useState("");


    // useEffect(() => {
    //   console.log(type);
    // });
    
    return (
      <div className="sign-up">
        
        

          <SegmentedControl
            name="friDefault"
            options={[
                { label: "FRIZER", value: "frizer", default: true },
                { label: "KLIJENT", value: "klijent" }
            ]}
            setValue={e => setType(e)}
            value={type}
            style={{ width: '95%', color: '#0ca81b', borderRadius: 25, display: 'block' }}
          />
        
          <SignUpChild type={type}/>  
        
      </div>
    );
  }


export default SignUp;