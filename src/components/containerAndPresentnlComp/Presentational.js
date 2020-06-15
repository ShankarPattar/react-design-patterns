
import React from 'react';
function PresentationalComp({
    firstName,
    middleName,
    lastName,
    setFirstName,
    setMiddleName,
    setLastName
    }) {


    return (
        <>
        <h4 style={{ textAlign: "center", position:'relative'}}>Please fill up the details</h4>

        <div style={{ margin: "0 0 0 45%", width: "350px" }}>
            <h4>First name:</h4>
        <input onChange={e => setFirstName(e.target.value)} />

        <h4>Middle name:</h4>
            <input onChange={e => setMiddleName(e.target.value)} />
        <h4>Last name:</h4>
            <input onChange={e => setLastName(e.target.value)} />
        </div>
        <h4 style={{ textAlign: "center" , position:'relative' }}>Results</h4>
            <div style={{ margin: "0 0 0 45%", width: "350px" }}>
                <h4>First name: {firstName} </h4>
                <h4>Middle name: {middleName} </h4>
                <h4>Last name: {lastName} </h4>
            </div>
            <p>“A container does data fetching and then renders its corresponding sub-component. That’s it.”
        — Jason Bonta. On presentational component you’ll see UI stuffs mostly and the props that needs to be displayed in UI.</p>
        </>
    );
};

export {PresentationalComp};