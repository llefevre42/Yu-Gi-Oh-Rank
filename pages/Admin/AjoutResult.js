import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import BackGround from '../../components/BackGround';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'
import isPositiveOrBeZero from '../../reserveFonction/isPositiveOrBeZero';



export default function AjoutResult() {
    const router = useRouter()
    const [result, setResult] = useState([{ place: '', deck: null, decklist: null, youtube: null, toped: null, cossy: '' }]);
    const [place, setPlace] = useState('');
    const [deck, setDeck] = useState('');
    const [decklist, setDecklist] = useState('');
    const [toped, setToped] = useState('');
    const [youtube, setYoutube] = useState('');
    const [cossy, setCossy] = useState('');
    const [events, getOneEvents] = useState([]);

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
        console.log(JSON.stringify({event, place, deck, decklist, youtube, toped, cossy}))
        fetch('http://localhost:3001/sendresult',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({event, place, deck, decklist, youtube, toped, cossy})
        })
            .then(response => response.json())
            .then(data => {
                let point = ((Math.trunc(events.nbr_player_event / 8) - (place - 1)) * 1 + isPositiveOrBeZero((events.top_event / 2) - (toped - 1)) * 1)
                if (point > 0)
                    console.log("point :", point)
                console.log("data", data)
            });
    }

    return (
        <div>
            <div>cossy : </div>
            <input type="text" placeholder={"cossy"} onChange={id => setCossy(id.target.value)}></input>
            <div>place : </div>
            <input type="text" placeholder={"place"} onChange={id => setPlace(id.target.value)}></input>
            <div>top : </div>
            <input type="text" placeholder={"top"} onChange={id => setToped(id.target.value)}></input>
            <div>deck : </div>
            <input type="text" placeholder={"deck"} onChange={id => setDeck(id.target.value)}></input>
            <div>decklist : </div>
            <input type="text" placeholder={"decklist"} onChange={id => setDecklist(id.target.value)}></input>
            <div>youtube : </div>
            <input type="text" placeholder={"youtube"} onChange={id => setYoutube(id.target.value)}></input>

            <button onClick={() => sendResultat(events.id_event, place, deck, decklist, youtube, toped, cossy)}>Submit</button>
        </div>
    )
}