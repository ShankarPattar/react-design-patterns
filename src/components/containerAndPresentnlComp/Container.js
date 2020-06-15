import React, {useState} from 'react';
import {PresentationalComp} from './Presentational'

function Container() {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
    <div className="App">
        <PresentationalComp
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            setFirstName={setFirstName}
            setMiddleName={setMiddleName}
            setLastName={setLastName}
        />
    </div>
    );
    }

export {Container};