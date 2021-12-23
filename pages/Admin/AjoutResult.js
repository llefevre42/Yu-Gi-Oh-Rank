import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import BackGround from '../../components/BackGround';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'

export default function AjoutResult() {
    const router = useRouter()
    const [result, setResult] = useState([{place:'', deck:null,decklist:null,youtube:null,toped:'',cossy:''}]);
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
        fetch('http://localhost:3001/sendresult/' + event + '/' + place + '/' + deck + '/' + decklist + '/' + youtube + '/' + toped + '/' + cossy, {
        })
            .then(response => response.json())
            .then(data => {
            });
    }

    return (
        <div>
            <div>cossy : </div>
            <input type="text" placeholder={"cossy"} onChange={id => setResult({cossy : id})}></input>
            <div>place : </div>
            <input type="text" placeholder={"place"} onChange={id => setResult({place : id})}></input>
            <div>top : </div>
            <input type="text" placeholder={"top"} onChange={id => setResult({top : id})}></input>
            <div>deck : </div>
            <input type="text" placeholder={"deck"} onChange={id => setResult({deck : id})}></input>
            <div>decklist : </div>
            <input type="text" placeholder={"decklist"} onChange={id => setResult({decklist : id})}></input>
            <div>youtube : </div>
            <input type="text" placeholder={"youtube"} onChange={id => setResult({youtube : id})}></input>


            <button onClick={sendResultat(events.id_event, result.place, result.deck, result.decklist, result.youtube,result.toped,result.cossy)}>Submit</button>
        </div>
    )
}