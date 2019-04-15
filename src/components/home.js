import React, { useState } from 'react';
import Context from "./appProvider";



function Home () {
    return (

        <Context.Consumer>
        {({foo, baz}) => (
            <div>
                {foo}
                {baz}
            </div>
        )}
        </Context.Consumer>
        
    );
}

export default Home;