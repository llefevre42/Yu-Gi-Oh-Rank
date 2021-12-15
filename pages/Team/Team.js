import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Arbo from './../../components/Arbo'
import Header from './../../components/Header'
import styles from '../../Styles/globalStyle'


export default function Team() {
    const [teams, getAllTeams] = useState([]);
    useEffect(() => {
        getAllTeam();
    }, []);
    function getAllTeam() {
        fetch('http://localhost:3001/getallteam')
            .then(response => response.json())
            .then(data => {
                getAllTeams(data);
            });
    }

    const results =
    {
        nom_team: "Goat Card Gaming", performance: "1", regulariter: "10", crea_team: "26/10/2016", team_id: '2', resu: [
            { place: '15', event: 'GCG', date: '26/09/2021', deck: 'Data', rank: "B+" },
            { place: '4', event: 'TTT cup', date: '26/10/2020', deck: 'Data', rank: "B++" },
            { place: '1', event: 'World', date: '26/09/2048', deck: 'Insecte', rank: "S++" },
        ]
    };

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
                    <div style={{...styles.bordure_g, borderRadius: "30px", display: "flex", flexDirection: "column", marginTop: 10, marginLeft: 10, marginRight: 30 }}>

                        <div style={{ display: "flex", flexDirection: "row", marginRight: 30, marginLeft: 30, marginTop: 30 }}>
                            <img src={"data:image/jpeg;base64,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"} style={{ width: 150, height: 200, marginTop: 10, ...styles.bordure_g, }} />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginRight: 30, marginLeft: 30, marginTop: 30, width: "100%" }}>
                                <div style={{ fontSize: 23, textAlign: "center", marginTop: 0, marginBottom: 0, color: "#efefef" }}>
                                    {results.nom_team}
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-around' }}>
                                    <div>

                                        <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Date de création : {results.crea_team}
                                        </div>
                                        <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Rank global : {results.performance}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Score total : {results.performance}
                                        </div>
                                        <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            Nombre de membre : {results.regulariter}
                                        </div>
                                        <div style={{ fontSize: 23, textAlign: "left", marginTop: 0, color: "#efefef" }}>
                                            derniere mise a jour des information : {results.crea_team}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "10%", marginTop: 10, marginBottom: 10 }}>
                            Photo :
                        </div>

                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "30%", marginTop: 10, marginBottom: 10 }}>
                            Joueur :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10 }}>
                            Point global :
                        </div>
                        <div style={{ fontSize: 23, textAlign: "center", color: "#efefef", fontSize: 25, width: "15%", marginTop: 10, marginBottom: 10 }}>
                            Point saison :
                        </div>
                    </div>
                        <div style={{ ...styles.bordure_g, borderRadius: "30px", marginRight: 20, overflow: "hidden", marginTop: 20, marginLeft: 20 }}>
                            {teams.map((team, index) => (
                                <Link href={{
                                    pathname: "/Team/Team",
                                    query: { id_team: team.id_team }
                                }} >
                                    <a style={{ color: "inherit", textDecoration: "inherit" }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                            backgroundColor: team.couleur_team//(index % 2 ? "black" : null)
                                        }}>
                                            <img src={team.logo_team} style={{ width: 100, height: 100 }}></img>
                                            <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "30%" }}>
                                                Ludovic Lefevre
                                            </div>

                                            <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "15%" }}>
                                                120
                                            </div>

                                            <div style={{ textAlign: "center", fontWeight: "bold", color: "#eaeaea", marginTop: 10, marginBottom: 10, fontSize: 25, width: "15%" }}>
                                                36
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}