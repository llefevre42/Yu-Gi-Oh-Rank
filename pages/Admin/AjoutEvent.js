import React, { useState } from 'react';

export default function AjoutJoueur() {
    const [nom, setNom] = useState('');
    const [lieu, setLieu] = useState(-1);
    const [datej, setDatej] = useState('');
    const [datem, setDatem] = useState('');
    const [datea, setDatea] = useState('');
    const [rating, setRating] = useState('');
    const [nbr, setNbr] = useState('');
    const [text, setText] = useState('');
    const [repart, setRepart] = useState('');
    const [repartTop, setRepartTop] = useState('');
    const [top, setTop] = useState('');
    const [orga, setOrga] = useState('');

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
           <div>nom : </div>
            <input type="text" placeholder={"nom"} onChange={id => setNom(id.target.value)}></input>
            <div>Lieu : </div>
            <input type="text" placeholder={"Lieu"} onChange={id => setLieu(id.target.value)}></input>
            <div>Rating : </div>
            <input type="text" placeholder={"rating"} onChange={id => setRating(id.target.value)}></input>
            <div>date jour : </div>
            <input type="text" placeholder={"date jour"} onChange={id => setDatej(id.target.value)}></input>
            <div>date mois : </div>
            <input type="text" placeholder={"date mois"} onChange={id => setDatem(id.target.value)}></input>
            <div>date année : </div>
            <input type="text" placeholder={"date annee"} onChange={id => setDatea(id.target.value)}></input>
            <div>Nbr : </div>
            <input type="text" placeholder={"Nbr"} onChange={id => setNbr(id.target.value)}></input>
            <div>Text : </div>
            <input type="text" placeholder={"Text"} onChange={id => setText(id.target.value)}></input>
            <div>Repart : </div>
            <input type="text" placeholder={"Repart"} onChange={id => setRepart(id.target.value)}></input>
            <div>RepartTop : </div>
            <input type="text" placeholder={"RepartTop"} onChange={id => setRepartTop(id.target.value)}></input>
            <div>Top : </div>
            <input type="text" placeholder={"Topcut"} onChange={id => setTop(id.target.value)}></input>
            <div>Orga : </div>
            <input type="text" placeholder={"Orga"} onChange={id => setOrga(id.target.value)}></input>

            <button onClick={() => sendEvent( nom, lieu, rating, datea + '-' + datem + '-' + datej, nbr, text, repart, repartTop, top, orga)}>Submit</button>
        </div>
    )
}