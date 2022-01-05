import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import AlgoPoint from '../../reserveFonction/AlgoPoint'

function ajoutPoint(point, cossy) {
    fetch('http://localhost:3001/sendpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ point, cossy })
    })
    fetch('http://localhost:3001/sendpointglobal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ point, cossy })
    })
}

export default function AjoutResult() {
    const router = useRouter()
    const [place, setPlace] = useState(null);
    const [deck, setDeck] = useState(null);
    const [decklist, setDecklist] = useState(null);
    const [toped, setToped] = useState(null);
    const [youtube, setYoutube] = useState(null);
    const [cossy, setCossy] = useState(null);
    const [events, getOneEvents] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        getOneEvent(router.query.event_id);
    }, [router.isReady])

    function getOneEvent(id) {
        fetch('http://localhost:3001/getoneevent/' + id, {
        })
            .then(response => response.json())
            .then(data => {
                getOneEvents(data);
            });
    }


    function sendResultat(event, place, deck, decklist, youtube, toped, cossy) {
        let point = AlgoPoint(events.nbr_player_event, place, toped, events.top_event )
        fetch('http://localhost:3001/sendresult', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ event, place, deck, decklist, youtube, toped, cossy, point })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (point > 0)
                    ajoutPoint(point, cossy)
            });
    }

    return (
        <div>
            <div style={{color: "white"}}>cossy : </div>
            <input type="text" placeholder={"cossy"} onChange={id => setCossy(id.target.value)}></input>
            <div style={{color: "white"}}>place : </div>
            <input type="text" placeholder={"place"} onChange={id => setPlace(id.target.value)}></input>
            <div style={{color: "white"}}>top : </div>
            <input type="text" placeholder={"top"} onChange={id => setToped(id.target.value)}></input>
            <div style={{color: "white"}}>deck : </div>
            <input type="text" placeholder={"deck"} onChange={id => setDeck(id.target.value)}></input>
            <div style={{color: "white"}}>decklist : </div>
            <input type="text" placeholder={"decklist"} onChange={id => setDecklist(id.target.value)}></input>
            <div style={{color: "white"}}>youtube : </div>
            <input type="text" placeholder={"youtube"} onChange={id => setYoutube(id.target.value)}></input>

            <button onClick={() => sendResultat(events.id_event, place, deck, decklist, youtube, toped, cossy)}>Submit</button>
        </div>
    )
}