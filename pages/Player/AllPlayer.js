import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'
import styles from '../../Styles/globalStyle'

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
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10 }}>
                            Rank :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "25%", marginTop: 10, marginBottom: 10 }}>
                            Joueur :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "25%", marginTop: 10, marginBottom: 10 }}>
                            Cossy Id :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "5%", marginTop: 10, marginBottom: 10 }}>
                            Point :
                        </div>
                    </div>
                    <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20 }}>
                        {players.map((player, index) => (
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
                                        <div style={{ ...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "15%" }}>
                                            {player.nom_joueur}
                                        </div>
                                        <div style={{ ...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%" }}>
                                            {player.prenom_joueur}
                                        </div>
                                        <div style={{ ...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "25%" }} >
                                            {player.id_cossy}
                                        </div>
                                        <div style={{ ...styles.titre_metro, textAlign: "center", fontWeight: "bold", color: "#eaeaea", fontSize: 25, width: "5%", }}>
                                            {player.point_joueur} 0
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
