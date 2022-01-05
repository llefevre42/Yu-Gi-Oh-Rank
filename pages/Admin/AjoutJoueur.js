import React, { useState, useEffect } from 'react';

export default function AjoutJoueur() {
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [team, setTeam] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [cossy, setCossy] = useState(null);


    function sendJoueur(cossy, team, prenom, nom, photo) {
        fetch('http://localhost:3001/sendjoueur', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({cossy, team, prenom, nom, photo })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }

    return (
        <div>
            <div style={{color: "white"}}>cossy : </div>
            <input type="text" placeholder={"cossy"} onChange={id => setCossy(id.target.value)}></input>
            <div style={{color: "white"}}>prenom : </div>
            <input type="text" placeholder={"prenom"} onChange={id => setPrenom(id.target.value)}></input>
            <div style={{color: "white"}}>nom : </div>
            <input type="text" placeholder={"nom"} onChange={id => setNom(id.target.value)}></input>
            <div style={{color: "white"}}> id team : </div>
            <input type="text" placeholder={"id team"} onChange={id => setTeam(id.target.value)}></input>
            <div style={{color: "white"}}>photo : </div>
            <input type="text" placeholder={"photo"} onChange={id => setPhoto(id.target.value)}></input>
            <button onClick={() => sendJoueur(cossy, team, prenom, nom, photo)}>Submit</button>
        </div>
    )
}