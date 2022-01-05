import React, { useState } from 'react';

export default function AjoutJoueur() {
    const [nom, setNom] = useState(null);
    const [lieu, setLieu] = useState(null);
    const [datej, setDatej] = useState(null);
    const [datem, setDatem] = useState(null);
    const [datea, setDatea] = useState(null);
    const [rating, setRating] = useState(null);
    const [nbr, setNbr] = useState(null);
    const [text, setText] = useState(null);
    const [repart, setRepart] = useState(null);
    const [repartTop, setRepartTop] = useState(null);
    const [top, setTop] = useState(null);
    const [orga, setOrga] = useState(null);

    function sendEvent(nom, lieu, rating, date, nbr, text, repart, repartTop, top, orga) {
        fetch('http://localhost:3001/sendevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nom, lieu, rating, date, nbr, text, repart, repartTop, top, orga })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }

    return (
        <div>
           <div style={{color: "white"}}>nom : </div>
            <input type="text" placeholder={"nom"} onChange={id => setNom(id.target.value)}></input>
            <div style={{color: "white"}}>Lieu : </div>
            <input type="text" placeholder={"Lieu"} onChange={id => setLieu(id.target.value)}></input>
            <div style={{color: "white"}}>Rating : </div>
            <input type="text" placeholder={"rating"} onChange={id => setRating(id.target.value)}></input>
            <div style={{color: "white"}}>date jour : </div>
            <input type="text" placeholder={"date jour"} onChange={id => setDatej(id.target.value)}></input>
            <div style={{color: "white"}}>date mois : </div>
            <input type="text" placeholder={"date mois"} onChange={id => setDatem(id.target.value)}></input>
            <div style={{color: "white"}}>date année : </div>
            <input type="text" placeholder={"date annee"} onChange={id => setDatea(id.target.value)}></input>
            <div style={{color: "white"}}>Nbr : </div>
            <input type="text" placeholder={"Nbr"} onChange={id => setNbr(id.target.value)}></input>
            <div style={{color: "white"}}>Text : </div>
            <input type="text" placeholder={"Text"} onChange={id => setText(id.target.value)}></input>
            <div style={{color: "white"}}>Repart : </div>
            <input type="text" placeholder={"Repart"} onChange={id => setRepart(id.target.value)}></input>
            <div style={{color: "white"}}>RepartTop : </div>
            <input type="text" placeholder={"RepartTop"} onChange={id => setRepartTop(id.target.value)}></input>
            <div style={{color: "white"}}>Top : </div>
            <input type="text" placeholder={"Topcut"} onChange={id => setTop(id.target.value)}></input>
            <div style={{color: "white"}}>Orga : </div>
            <input type="text" placeholder={"Orga"} onChange={id => setOrga(id.target.value)}></input>

            <button onClick={() => sendEvent( nom, lieu, rating, datea + '-' + datem + '-' + datej, nbr, text, repart, repartTop, top, orga)}>Submit</button>
        </div>
    )
}