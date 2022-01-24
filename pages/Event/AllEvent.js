import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import CellTab from '../../components/StyledComponent/CellTab'
import urlSite from "./../../configServ"
import ReturnDate from "./../../reserveFonction/returnDate"

export default function AllEvent() {
    const [lastEvent, getLastEvents] = useState([]);
    useEffect(() => {
        getLastEvent();
    }, []);
    function getLastEvent() {
        fetch(urlSite + 'getlastevent')
            .then(response => response.json())
            .then(data => {
                getLastEvents(data);
            });
    }
    return (
        <div style={{}}>
            <div style={{ fontSize: 30, textAlign: "center", ...styles.titre_pro, marginTop: 30, marginBottom: 30, }}>
                Liste des Evenement en France :
                </div>
            <div style={{ ...styles.tab_medium_element, marginRight: 20}}>
                <CellTab head size={"15%"}>Date :</CellTab>
                <CellTab head size={"35%"}>Lieu :</CellTab>
                <CellTab head size={"35%"}>Event :</CellTab>
                <CellTab head size={"15%"}>Rank :</CellTab>
            </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20 }}>
                {lastEvent.map((Event, index) => (
                    <Link key={index} href={{
                        pathname: "/Event/Events",
                        query: { event_id: Event.id_event }
                    }} >
                        <a>
                            <div style={{ ...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null) }}>
                                <CellTab size={"15%"}>{ReturnDate(Event.date_event)}</CellTab>
                                <CellTab size={"35%"}>{Event.lieu_event}</CellTab>
                                <CellTab size={"35%"}>{Event.nom_event}</CellTab>
                                <CellTab size={"15%"}>{Event.rating_event}</CellTab>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div >
    )
}
