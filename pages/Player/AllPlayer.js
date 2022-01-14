import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/globalStyle'
import CellTab from './../../components/StyledComponent/CellTab'
import urlSite from "./../../configServ"


export default function AllPlayer() {
    const [players, getAllPlayer] = useState([]);
    useEffect(() => {
        getAllPlayers();
    }, []);
    function getAllPlayers() {
        fetch(urlSite + 'getallplayer')
            .then(response => response.json())
            .then(data => {
                getAllPlayer(data);
            });
    }
    return (
        <div>
            <div style={{ fontSize: 30, textAlign: "center",...styles.titre_pro, marginTop: 30, marginBottom: 30 }}>
                Liste des Joueurs :
                </div>
            <div style={{
                ...styles.tab_medium_element,
                marginTop: 10,
                marginRight: 20,
            }}>
                <CellTab head size={"15%"}>Rank :</CellTab>
                <CellTab head size={"25%"}>Joueur :</CellTab>
                <CellTab head size={"25%"}>Cossy Id :</CellTab>
                <CellTab head size={"10%"}>Point :</CellTab>
            </div>
            <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20 }}>
                {players.map((player, index) => (
                    <Link key={index} href={{
                        pathname: "/Event/Events",
                        query: { event_id: Event.id_event }
                    }} >
                        <a>
                            <div style={{...styles.tab_medium_element, backgroundColor: (index % 2 ? "black" : null)}}>
                                <CellTab size={"15%"}>{player.nom_joueur}</CellTab>
                                <CellTab size={"25%"}>{player.prenom_joueur}</CellTab>
                                <CellTab size={"25%"}>{player.id_cossy}</CellTab>
                                <CellTab size={"10%"}>{player.point_joueur}</CellTab>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}
