import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'

export default function AllEvent() {
    const [lastEvent, getLastEvents] = useState([]);
    useEffect(() => {
        getLastEvent();
    }, []);
    function getLastEvent() {
        fetch('http://localhost:3001/getlastevent')
            .then(response => response.json())
            .then(data => {
                getLastEvents(data);
            });
    }
    lastEvent.map((Events, index) => {
        const date = new Date(Events.date_event)
        lastEvent[index].date_event = (date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear())
    })
    return (
        <div style={{}}>
            <div style={{ fontSize: 30, textAlign: "center", ...styles.titre_pro, marginTop: 30, marginBottom: 30, }}>
                Liste des Evenement en France :
                </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20 }}>
                {lastEvent.map((Event, index) => (
                    <Link key={index}  href={{
                        pathname: "/Event/Events",
                        query: { event_id: Event.id_event }
                    }} >
                        <a>
                            <div style={{...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null)}}>
                                <CellTab text={Event.date_event} size={"15%"}></CellTab>
                                <CellTab text={Event.lieu_event} size={"25%"}></CellTab>
                                <CellTab text={Event.nom_event} size={"25%"}></CellTab>
                                <CellTab text={Event.rating_event} size={"5%"}></CellTab>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div >
    )
}
