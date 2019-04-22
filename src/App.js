import {  useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ReactModal from 'react-modal'
// import Login from './components/login';

import './App.scss';


function App(props)   {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.history.push("/login");
  });

    
    return (
      null
    );
} 

export default App;
