import React, { useState } from 'react';

function HomeChild () {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [barbershopName, setBarbershopName] = useState("");

    return (
        <AppContext.Provider>
            {this.props.children}
        </AppContext.Provider>
    ) 
}

export default HomeChild