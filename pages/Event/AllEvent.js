import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'
import styles from '../../Styles/globalStyle'

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
        <div style={{
            minHeight: "100vh", overflow: "hidden", backgroundColor: "#22171c", backgroundImage: "url(" + "/pattern.png" + ")", width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "30%",
            backgroundPosition: "right top",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Arbo />
                <div style={{ width: "100%", marginLeft: 30 }}>
                    <Header />
                    <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40", marginTop: 30, marginBottom: 30 }}>
                        Liste des Evenement en France :
                </div>
                    <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20 }}>
                        {lastEvent.map((Event, index) => (
                            <Link href={{
                                pathname: "/Event/Events",
                                query: { event_id: Event.id_event }
                            }} >
                                <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        backgroundColor: (index % 2 ? "black" : null),
                                        minHeight: 50,
                                        alignItems: "center"
                                    }}>
                                        <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "15%" }}>
                                            {Event.date_event}
                                        </div>
                                        <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%" }}>
                                            {Event.lieu_event}
                                        </div>
                                        <div style={{...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%" }} >
                                            {Event.nom_event}
                                        </div>
                                        <div style={{ ...styles.titre_metro,textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "5%", }}>
                                            {Event.rating_event}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
