import React, { useState } from 'react';


import SignUpCustomer from './signUpCustomer';
import SignUpBarbershop from './signUpBarbershop';


import '../App.scss';

function SignUpChild(props)   {
  
    
    if (props.type === "klijent") {
        return <SignUpCustomer />
    } else {
        return <SignUpBarbershop />
    }
  }


export default SignUpChild;