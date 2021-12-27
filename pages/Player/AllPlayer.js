import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import HeadTab from './../../components/HeadTab'
import CellTab from './../../components/CellTab'

export default function AllPlayer() {
    const [players, getAllPlayer] = useState([]);
    useEffect(() => {
        getAllPlayers();
    }, []);
    function getAllPlayers() {
        fetch('http://localhost:3001/getallplayer')
            .then(response => response.json())
            .then(data => {
                getAllPlayer(data);
            });
    }
    return (
        <div>
            <div style={{ fontSize: 30, textAlign: "center", fontFamily: "Ariq", color: "#0d8d40", marginTop: 30, marginBottom: 30 }}>
                Liste des Joueurs :
                </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 30,
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <HeadTab text={"Rank :"} size={"15%"}></HeadTab>
                <HeadTab text={"Joueur :"} size={"25%"}></HeadTab>
                <HeadTab text={"Cossy Id :"} size={"25%"}></HeadTab>
                <HeadTab text={"Point :"} size={"5%"}></HeadTab>
            </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20 }}>
                {players.map((player, index) => (
                    <Link href={{
                        pathname: "/Event/Events",
                        query: { event_id: Event.id_event }
                    }} >
                        <a style={{ color: "inherit", textDecoration: "inherit" }}>
                            <div style={{...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null)}}>
                                <CellTab text={player.nom_joueur} size={"15%"}></CellTab>
                                <CellTab text={player.prenom_joueur} size={"25%"}></CellTab>
                                <CellTab text={player.id_cossy} size={"25%"}></CellTab>
                                <CellTab text={player.point_joueur} size={"5%"}></CellTab>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}
